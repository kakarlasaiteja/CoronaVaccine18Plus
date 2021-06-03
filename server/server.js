const express = require('express')
const http = require('http')
const app = express()
const port = 3002


var httpServer = http.createServer(app);

httpServer.listener(port, 'localhost', function() {
    console.log('Express server running here: ', port);
})