/**
 * Created by ADCZ679 on 11/18/2014.
 */
var express = require("express")
    , lessMiddleware = require('less-middleware')

    ;

var app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.use(lessMiddleware(__dirname + "/public", {compiler: {compress: false}}));
app.use(express.static(__dirname + '/public'));

app.listen(server_port, server_ip_address);
