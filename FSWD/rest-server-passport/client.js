var http = require('http');
var https=require('https')
var honjang = JSON.stringify({
  'username': 'honjang',
  'password': 'abcde',
});

var loginOptionsPost = {
  host: 'localhost',
  port: '3000',
  path: '/users/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': honjang.length
  }, 
  rejectUnauthorized: false
};
var honjangToken
// http://stackoverflow.com/questions/20433287/node-js-request-cert-has-expired#answer-29397100
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
var reqPost = http.request(loginOptionsPost, function (res) {
  console.log("response statusCode: ", res.statusCode);
  res.on('data', function (data) {
    console.log('Posting Result:\n');
    //process.stdout.write(data);
    //process.stdout.write(JSON.parse(data).token);
    honjangToken = JSON.parse(data).token
    console.log("honjangToken.length:", honjangToken.length)
    console.log('\n\nPOST Operation Completed');
    var dishesOptionsGet = {
      host: 'localhost',
      port: '3000',
      path: '/dishes',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token':honjangToken
      }, 
      rejectUnauthorized: false
    };
    var reqGet=http.request(dishesOptionsGet, function (res) {
      res.on('data',data=>{
        dishes=JSON.parse(data)
        console.log(JSON.stringify(dishes,null,2)) // pretty stringify
        //for (dish of dishes){
        //  console.log(dish.name)
        //  for (comment of dish.comments){
        //    console.log(comment)
        //  }
        //}
      })
    })
    reqGet.end()
    reqGet.on('error',e=>{
      console.error(e)
    })
  });
});

// 7
reqPost.write(honjang);
reqPost.end();
reqPost.on('error', function (e) {
  console.error(e);
});

