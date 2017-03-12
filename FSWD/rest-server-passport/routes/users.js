var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Verify = require('./verify');


/* GET users listing. */
router.get('/', Verify.verifyAdmin, (req, res, next) => {
  User.find({})
    .populate('comments.postedBy')
    .exec((err, dish) => {
      if (err) throw err
      res.json(dish)
    })
  // res.send('respond with a resource')
})

router.post('/register', (req, res) => {
  //console.log('req: ',req)
  User.register(new User({ username: req.body.username }),
    req.body.password, (err, user) => {
      if (err) {
        return res.status(500).json({ err: err })
      }
      if (req.body.firstname) {
        user.firstname = req.body.firstname
      }
      if (req.body.lastname) {
        user.lastname = req.body.lastname
      }
      user.save((err, user) => {
        passport.authenticate('local')(req, res, () => {
          return res.status(200).json({ status: 'Registration Successful!' })
        })
      })
    })
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json({ err: info })
    }
    req.logIn(user, err => {
      if (err) {
        return res.status(500).json({ err: 'Could not login in user' })
      }
      var token = Verify.getToken(user)
      res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      })
    })
  })(req, res, next)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.status(200).json({ status: 'Bye' })
})

router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }),
  function (req, res) {

  });

router.get('/google/callback', function (req, res, next) {
  passport.authenticate('google', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      var token = Verify.getToken(user);
      res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req, res, next);
});

module.exports = router