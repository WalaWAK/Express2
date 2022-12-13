const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting/:name'), (req, res) => {
	console.log(req.params);
	res.send('Hey ' + req.params.name);
};