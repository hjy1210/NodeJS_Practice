var http = require('http');
var https = require('https')

var getJobs = (cb)=>{

  var getOptions = {
    host: 'codepen.io',
    port: '80',
    path: '/jobs.json', 
    method: 'GET',
    headers:{'origin':'http://localhost',
      'content-type':'application/json',
      'Access-Control-Allow-Origin':'*'
    }
    //rejectUnauthorized: false
  };
  var jobs
  // http://stackoverflow.com/questions/20433287/node-js-request-cert-has-expired#answer-29397100
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  var reqGet = http.request(getOptions, function (res) {
    res.on('error',(err)=>{
      console.log("err")
    })
    console.log("response statusCode: ", res.statusCode);
    res.on('data', function (data) {
      console.log('Posting Result:\n');
      //token = JSON.parse(data).token
      cb(data)
    })
  })
  reqGet.end();
  reqGet.on('error', function (e) {
    console.error(e);
  });
}

module.exports={getJobs}

