// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const comments = [
    { username: 'Tam', comment: 'Hello' },
    { username: 'Huyen', comment: 'Hi' }
]

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', function(req, res) {
    res.render('comments/index', {
        comments: comments
    });
});

app.get('/comments/create', function(req, res) {
    res.render('comments/create');
});

app.post('/comments/create', function(req, res) {
    comments.push(req.body);
    res.redirect('/comments');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});