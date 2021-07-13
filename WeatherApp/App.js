const express = require('express');
const https = require('https');

const app = express();

app.get('/', function (req, res) {
  // res.send("Hello");
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=695ca5f03b96757465f1d38174759d66&units=metric";

  https.get(url, function(response) {
    // console.log(response);
    response.on('data', function(data) {
      // console.log(JSON.parse(data));
      let weatherData = JSON.parse(data);
      // console.log(weatherData);

      res.write("<p>Todays temperature for : " + weatherData.name + "</p>");
      res.write("<h1>is : " + weatherData.main.temp + " degree celceou</h1>")
      res.write(weatherData.weather[0].icon);
      res.send();
    });

    // res.send("Hello");

  }).on('error', (e) => {
    console.error(e);
  });
});

app.listen(4000, function () {
  console.log("App listening on port 4000");
});
