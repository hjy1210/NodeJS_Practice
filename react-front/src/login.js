var http = require('http');
var https = require('https')

var login = (username, password, cb)=>{
  var namepass = JSON.stringify({
    'username': username,
    'password': password,
  });

  var loginOptionsPost = {
    host: 'localhost',
    port: '3000',
    path: '/users/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': namepass.length
    }//,
    //rejectUnauthorized: false
  };
  var token
  // http://stackoverflow.com/questions/20433287/node-js-request-cert-has-expired#answer-29397100
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  var reqPost = http.request(loginOptionsPost, function (res) {
    res.on('error',(err)=>{
      console.log("err")
    })
    console.log("response statusCode: ", res.statusCode);
    res.on('data', function (data) {
      console.log('Posting Result:\n');
      token = JSON.parse(data).token
      cb(token)
    })
  })
  reqPost.write(namepass);
  reqPost.end();
  reqPost.on('error', function (e) {
    console.error(e);
  });
}

module.exports={login}

