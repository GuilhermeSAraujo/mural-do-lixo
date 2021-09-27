var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200
 }));

app.post('/', function (req, res) {
    console.log(req.body);
    
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
