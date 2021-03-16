const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourGame', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let User = mongoose.model('users', {
  name: String,
  score: Number,
});

module.exports = User
