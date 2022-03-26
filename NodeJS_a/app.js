// const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const path = require('path');
const app = express();
const lists = require('./data.json');
const fs = require('fs');


app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine', 'ejs');
// app.engine('handlebars', expressHbs.engine());
// app.set('view engine', 'hbs');

const comments = [
    {
    username: 'todd',
    comments: 'lol that is so funny'
    },
    {
        username: 'sky',
        comments: 'no'
    },
    {
        username: 'yes',
        comments: 'yessir'
    },
    
]

app.get('/todos', (req, res) => {
    // const lists = [
    //     'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    // ]
    // res.send("GET /tacos respone")
   
    res.render('todos/index', { lists });
})
// app.get('/todos/')
app.post('/todos', (req, res) => {
    console.log(req.body.title);
    
    // console.log('tes');
    res.send(req.body);
})
// app.engine('hbs', expressHbs.engine);
// app.set('view engine', 'hbs');
// app.set('views');
// app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(express.static(path.join(__dirname, 'public')));

// app.get('/todos', (req, res, next) => {
//     // res.sendFile(path.join(__dirname, 'views', 'todo.hbs'));
//     res.render('404', {pageTitle: 'Page Not Found'});
//     // console.log();
//     // console.log('todo', {layout: 'index'});
// })
app.listen(3000);