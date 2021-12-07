const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Weclome! Ace the CI/CD bruh!');
});


app.get('/multiply/:a/:b', (req, res) => {

    // concat string
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    var answer = a*b;
    res.send("The answer is : "+answer);
});

app.get('/add/:a/:b', (req, res) => {

    // concat string
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    var result = a+b;
    res.send("The answer is : "+result);
});


app.listen(port, () => { console.log('App Started.'); });
module.exports = app;