const requestpromise = require('request-promise')
//console.log(requestpromise)
const options = {
  method: 'GET',
  uri: 'http://localhost:3000/users'
}

requestpromise(options)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (err) {
    console.log(err)
  })
var querystring = require('querystring');
const optionsPost = {
    method: 'POST',
    url: 'http://localhost:3000/users',
    form: querystring.stringify({
      name: 'bar',
      age:63
    }),
    json:true,
    simple:false
  }
const data={
  name: 'bar',
  age:63
}

requestpromise(optionsPost)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (err) {
      console.log("err\n",err.toString().substr(0,100))
    })
