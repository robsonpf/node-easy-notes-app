var express = reqire('express');
var bodyParser = require('body-parse')

var app = express();
app.use(bodyParser.urlencoded({extend:true}))

app.use(bodyParser.json())

app.get('/', function(req, res){
  res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
