var User = require('../models/user');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config.js');

exports.getToken = user => {
  return jwt.sign(user, config.secretKey, {
    expiresIn: 3600
  })
}

exports.verifyAdmin = (req, res, next) => {
  // check header or url parameters or post parameters for token  
  var token = req.body.token || req.query.token || req.headers['x-access-token']
  // decode token
  if (token){
    jwt.verify(token,config.secretKey, (err,decoded)=>{
      if (err) {
        var err=new Error("You are not authenticated!")
        err.status=401
        return next(err)
      } else {
        // if every thing is good, save to request for use in other routes
        if (!decoded._doc.admin){
          var err=new Error("You are not in admins!")
          err.status=401
          return next(err)
        }
        req.decoded=decoded
        next()
      }
    })
  } else {
    // there is no token
    var err=new Error('No token provided!')
    err.status=403
    return next(err)
  }
}

exports.verifyOrdinaryUser = (req, res, next) => {
  // check header or url parameters or post parameters for token  
  var token = req.body.token || req.query.token || req.headers['x-access-token']
  // decode token
  if (token){
    jwt.verify(token,config.secretKey, (err,decoded)=>{
      if (err) {
        var err=new Error("You are not authenticated!")
        err.status=401
        return next(err)
      } else {
        // if every thing is good, save to request for use in other routes
        req.decoded=decoded
        next()
      }
    })
  } else {
    // there is no token
    var err=new Error('No token provided!')
    err.status=403
    return next(err)
  }
}