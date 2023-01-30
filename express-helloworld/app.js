var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function(res,res) {
  res.send('Alo Alo Vecinirijillo\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});