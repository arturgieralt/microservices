const express  = require('express');
const app      = express();
const path = require('path')
// const httpProxy = require('http-proxy');
// const apiProxy = httpProxy.createProxyServer();
// const serverOne = 'http://localhost:3001/',
//     ServerTwo = 'http://localhost:3002/',
//     ServerThree = 'http://localhost:3002/';
 
// app.all("/app1/*", function(req, res) {
//     console.log('redirecting to Server1');
//     apiProxy.web(req, res, {target: serverOne});
// });

// app.all("/app2/*", function(req, res) {
//     console.log('redirecting to Server2');
//     apiProxy.web(req, res, {target: ServerTwo});
// });

// app.all("/app2/*", function(req, res) {
//     console.log('redirecting to Server3');
//     apiProxy.web(req, res, {target: ServerThree});
// });


app.get('/portal*', function(req, res) {
    res.sendFile(path.join(__dirname + '/parent/parent.html'));
});

app.get('/service1*', function(req, res) {
    res.sendFile(path.join(__dirname + '/service1/service1.html'));
});

app.get('/service2*', function(req, res) {
    res.sendFile(path.join(__dirname + '/service2/service2.html'));
});

app.use('/js', express.static('js'))



app.listen(3000);