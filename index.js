var express = require('express');
var app = express();

app.use(express.static('root'));

app.listen(3000, function () {
  console.log('Server listening on port 3000 serving files from /root folder!');
});