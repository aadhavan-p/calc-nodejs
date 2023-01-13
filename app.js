const express = require("express");
const { title } = require("process");

const app = express();

app.set('view engine', 'pug');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = 8080;

app.get('/', (req, res) => {
    res.render('index', {title: 'Calculator', message: 'Calculator', result: 0, num1: 0, num2: 0});
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})

app.post('/', (req, res) => {

    var result;

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    op = req.body.operation

    if (op === 'div') {
        result = num1 / num2;
    }
    else if (op === 'add') {
        result = num1 + num2;
    }
    else if (op === 'mul') {
        result = num1 * num2;
    }
    else {
        result = num1 - num2
    }

    res.render('index', {title: 'Calculator', message: 'Calculator', result: result, num1: num1, num2: num2});
})