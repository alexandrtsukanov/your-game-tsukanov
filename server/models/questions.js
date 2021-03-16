const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourGame', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let Question = mongoose.model('questions', {
    topic: String,
    body: [{
        question: String,
        answer: String,
        price: Number,
        isOpen: {
          type: Boolean,
          default: true,
        },
    }]
});

let questionsDb = [{
        topic: 'Кто не был в Эльбрусе, тому не понять...',
        body: [
            { question: '8 800 555 35 35 - продолжите...', answer: 'Лучше быть в Эльбрусе, чем тусить и выпивать', price: 3000 },
            { question: 'Какой минимальный опыт работы получает студент Эльбруса после 3 месяцев обучения?', answer: '1 год', price: 3001 },
            { question: 'Назовите высоту Эльбруса', answer: '5642', price: 8080 }
        ]
    },
    {
        topic: 'Шляпа',
        body: [
            { question: 'Препод наш - продолжите...', answer: 'Игорь', price: 3000 },
            { question: 'Саша, Санёк, Сашуля, Сашулечка... а как правильно?', answer: 'Саня Малой', price: 3001 },
            { question: 'Хиранобу... ?', answer: 'Сакагучи', price: 8080 }
        ]
    },
    {
        topic: 'Песни',
        body: [{
                question: 'const mongoose = require(\'mongoose\')\nconst discoSchema = new mongoose.Schema({\n\ttype: String,\n\tking: {\n\tname: mongoose.schema.Types.ObjectID,\n\tenvironment: String\n\t}\n});\nconst disco = new Disco({type: \'water\', king: {name: \'Vova\', environment: \'leisure\'});',
                answer: 'Аквадискотека, аквадискотека\nЦарь среди досуга, здесь мне будет супер',
                price: 3000
            },
            {
                question: '.mood {\n\tcolor: #0000FF\n}',
                answer: 'Цвет настроения синий',
                price: 3001
            },
            {
                question: 'const you = {\n\thands: []\n}\nconst he = {\n\theart: 1\n}',
                answer: 'Сердце его теперь в твоих руках, Не потеряй его и не сломай',
                price: 8080 
            }
        ]
    },
]

Question.insertMany(questionsDb);

module.exports = Question
