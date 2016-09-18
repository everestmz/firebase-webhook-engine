var Firebase = require('firebase'),
    fbf = new Firebase('your-firebase-url');
    http = require('http');
var requestify = require('requestify');
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

fb.on('child_added', function(snapshot) {
  requestify.post('your-post-url', snapshot.val())
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
