const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function () {
    console.log("listening")
})

app.get('/greeting/:name'), (req, res) => {
	console.log(req.params);
	res.send('Hey ' + req.params.name);
}

app.get('/tip/:total/:tipPercentage', (req, res) => {
	console.log(req.params);
	res.send(`Total: ${req.params.total}   Tip: ${req.params.total * (req.params.tipPercentage / 100)}`)
})