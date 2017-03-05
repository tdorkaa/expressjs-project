var express = require('express')
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/helloWorld', function (req, res) {
    res.send('<h1>Hello World!</h1>')
});

app.listen(3000, function () {
    console.log('App1 listening on port 3000!')
});