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

app.get('/magic/:question', function(req,res){
	const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
	let response = answers[Math.floor(Math.random() * answers.length)]
	res.send(`<h1>${response}</h1>`)
})