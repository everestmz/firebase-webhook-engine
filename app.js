ar Firebase = require('firebase'),
    usersRef = new Firebase('https://koan-cbd22.firebaseio.com/detailedprofiles/');
    http = require('http');
var requestify = require('requestify');
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


usersRef.on('child_added', function(snapshot) {
  requestify.post('localhost:3000/webhooks/firebase', snapshot.val())
  //http.post({ host: 'koan-htn.herokuapp.com', path: '/webhooks/firebase' })
});

var server = app.listen(3001, function() {
  console.log('Listening on port %d', server.address().port);
});
