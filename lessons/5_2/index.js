'use strict'

const pg = require('pg')
const conString = 'postgres://hjy:1234567890@localhost/node_hero' // make sure to match your own database's credentials

pg.connect(conString, function (err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err)
  }
  client.query('SELECT * from users',  function (err, result) {
    done()

    if (err) {
      return console.error('error happened during query', err)
    }
    for (var i = 0; i < result.rows.length; i++){
      console.log(result.rows[i])
    }
  })
})

const addUser=function(user){
  pg.connect(conString, function (err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err)
    }
    client.query('INSERT INTO users (name, age) VALUES ($1, $2);',
      [user.name, user.age],
      function (err, result) {
          done()

          if (err) {
            return console.error('error happened during query', err)
          }
     })
  })
}
//addUser({name:"Huang",age:65})
//addUser({name:"楊宏章",age:67})
const express = require('express')
const exphbs = require('express-handlebars')
const port=3000;
const app = express()

// 必須要有網路連線才可以成功 !!!!!!
app.post('/users', function (req, res, next) {
  var body=[]
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    console.log(body.length)
    body = Buffer.concat(body).toString();
    // at this point, `body` has the entire request body stored in it as a string
    console.log("body:",body)
    const d=JSON.parse(body)   // OK
    console.log(d.name+1)
    console.log(d.age+1)
    //res.end(body)    //OK
    pg.connect(conString, function (err, client, done) {
      if (err) {
        // pass the error to the express error handler
        return next(err)
      }
      client.query('INSERT INTO users (name, age) VALUES ($1, $2);',
        [d.name,d.age],
        function (err, result) {
          done() //this done callback signals the pg driver that the connection can be closed or returned to the connection pool

          if (err) {
          // pass the error to the express error handler
            return next(err)
          }
          res.send(result)
      })
    })
  });
})

app.get('/users', function (req, res, next) {
  pg.connect(conString, function (err, client, done) {
    if (err) {
      // pass the error to the express error handler
      return next(err)
    }
    client.query('SELECT name, age FROM users;', function (err, result) {
      done()

      if (err) {
        // pass the error to the express error handler
        return next(err)
      }
      //alert(result)
      res.json(result.rows)
    })
  })
})

app.listen(port, err=>{
  if (err) {
    coneole.log("Something wrong:"+err)
    return
  }
  else {
    console.log(`server is listening at port ${port}`)
  }
})
