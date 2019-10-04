const express = require('express');
const app = express();
const port = 3000;

app.get('/teapot', (req, res) => {
	req.set('X-teapot', 'I\'m a teapot');
	req.sendStatus(418);
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on poart ${port}!`));
