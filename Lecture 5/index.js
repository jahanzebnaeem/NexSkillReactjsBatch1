const express = require('express');

const app = express();

app.get('/', function (req, res) {
  // console.log(request);
  res.send("Welcome");
});

app.get('/contact', function (req, res) {
  res.send("This is the contact page.");
});

app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
