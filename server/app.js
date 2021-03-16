const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const { urlencoded } = require('express');

const Question = require('./models/questions');
const User = require('./models/users')

mongoose.connect('mongodb://localhost:27017/yourGame', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.set('trust proxy', 1);
app.use(session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: 'key123',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.post('/', async (req, res) => {
  let { name } = req.body;
  let newUser = new User({ name });
  await newUser.save();
  res.send(newUser)
});

app.get('/questions', async (req, res) => {
  let questions = await Question.find();
  res.json(questions)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(8080, () => {
    console.log('Game started')
});
