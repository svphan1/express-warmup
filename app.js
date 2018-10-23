const express = require('express');
const app = express();
const cakes = require('./data.json');
const bodyParser = require('body-parser');
const port = 3100;

app.get('/', (req, res, next) => {
  res.send('rawr')
});

app.get('/cakes', (req, res, next) => {
  res.json({ cakes: cakes })
})

app.get('/cakes/:id', (req, res, next) => {
  const id = req.params.id
  const cake = cakes.filter(cake => {
    return cake.id == id
  })
  res.json({cake})
})

app.use(bodyParser.json());

app.post('/cakes', (req, res, next) => {
  const body = req.body
  characters.push(body)
  res.json({ body: body })
})

app.listen(port, () => console.log(`I got you on ${port}`));


