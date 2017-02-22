const rp = require('request-promise')
//console.log(rp)
const options = {
  method: 'GET',
  uri: 'http://localhost:3000/users'
}

rp(options)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (err) {
    console.log(err)
  })
//var querystring = require('querystring');
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/json'
}

const optionsPost = {
    method: 'POST',
    uri: 'http://localhost:3000/users',
    headers:headers,
    body: {
      'name': 'bar',
      'age':63
    },
    json:true
}
const data={
  name: 'bar',
  age:63
}

rp(optionsPost)
    .then(function (response) {
      console.log(response,"add succeed")
    })
    .catch(function (err) {
      console.log("err\n",err.toString().substr(0,100))
    })
