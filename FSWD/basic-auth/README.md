## server.js
use following auth as middleware
```
function auth (req, res, next) {
    console.log(req.headers);
    var authHeader = req.headers.authorization;
    if (!authHeader) {
        var err = new Error('You are not authenticated!');
        err.status = 401;
        next(err);
        return;
    }

    var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    if (user == 'admin' && pass == 'password') {
        next(); // authorized
    } else {
        var err = new Error('You are not authenticated!');
        err.status = 401;
        next(err);
    }
}

app.use(auth);
```

## server-2.js
```
var cookieParser = require('cookie-parser')
...
app.use(cookieParser('12345-67890-09876-54321'))
... modify auth
if (!req.signedCookies.user) {
  // get user and password
  if (user == 'admin' && pass == 'password'){
    res.cookie('user', 'admin', { signed: true })
    next()
  } else{
    ...
    next(err)
  }
} else {
  if (req.signedCookies.user == 'admin'){
    next()
  } else {
    ...
    next(err)
  }
}
```
## server-3.js
```
var session = require('express-session')
var FileStore=require('session-file-store')(session)
...
app.use(session({
  name:'session-id',
  secret:'12345-67890-09876-54321',
  saveUninitialized:true,
  resave:true,
  store:new FileStore
}))
... modify auth
if (!req.session.user) {
  // get user and password
  if (user == 'admin' && pass == 'password'){
    req.session.user='admin'
    next()
  } else{
    ...
    next(err)
  }
} else {
  if (req.session.user == 'admin'){
    next()
  } else {
    ...
    next(err)
  }
}
```
