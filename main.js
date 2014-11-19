/**
 * Created by ADCZ679 on 11/18/2014.
 */
var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));
app.listen(3000);