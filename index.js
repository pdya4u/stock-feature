console.log("hello world")
const axios = require('axios');
var fs = require('fs');
axios.get('https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey=6b9088ed312e4e33bfb82f95e7fa6e7a')
  .then(function (response) {
    // handle success
    var data = JSON.stringify(response['data'])
    console.log(data);
    fs.writeFile('myjsonfile.json', data, 'utf8', function(){console.log("done")});
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });