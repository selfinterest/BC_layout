/**
 * Created by ADCZ679 on 11/18/2014.
 */
var express = require("express")
    , lessMiddleware = require('less-middleware')

    ;

var app = express();

app.use(lessMiddleware(__dirname + "/public", {compiler: {compress: false}}));
app.use(express.static(__dirname + '/public'));
app.listen(3000);