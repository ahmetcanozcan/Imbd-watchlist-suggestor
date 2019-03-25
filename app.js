const getMovies = require("./functions/getMovies");
const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/api/getmovies', async (req, res) => {
  let url = req.query.url;
  let response = await getMovies(url);
  res.send(response);
})

app.listen(3000, () => console.log('port 3000 listening'));