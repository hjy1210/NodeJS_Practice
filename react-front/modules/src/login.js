var http = require('http');
var https = require('https')

const login = (username, password, cb){
  var namepass = JSON.stringify({
    'username': username,
    'password': 'password,
  });

  var loginOptionsPost = {
    host: 'localhost',
    port: '3443',
    path: '/users/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': namepass.length
    },
    rejectUnauthorized: false
  };
  var token
  // http://stackoverflow.com/questions/20433287/node-js-request-cert-has-expired#answer-29397100
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  var reqPost = https.request(loginOptionsPost, function (res) {
    console.log("response statusCode: ", res.statusCode);
    res.on('data', function (data) {
      console.log('Posting Result:\n');
      honjangToken = JSON.parse(data).token
      cb(token)
    }
  }
}

login("honjang",'abcdef',(e)=>console.log(e))
