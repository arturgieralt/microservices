const express  = require('express');
const app      = express();
const path = require('path');
const open = require('open');

app.get(['/portal/', '/portal/*'], function(req, res) {
    res.sendFile(path.join(__dirname + '/parent/parent.html'));
});

app.get(['/service1/', '/service1/*'], function(req, res) {
    res.sendFile(path.join(__dirname + '/service1/service1.html'));
});

app.get(['/service2/', '/service2/*'], function(req, res) {
    res.sendFile(path.join(__dirname + '/service2/service2.html'));
});

app.use('/js', express.static('js'))

app.use('/css', express.static('css'))

app.listen(3000, () => {
    console.log('Server started.')
    open('http://localhost:3000/portal');
});

