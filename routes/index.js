var express = require('express');
var router = express.Router();
var Session = require('../models/Session');

/* GET home page and retrieve all workout sessions. */
router.get('/', function (req, res, next) {

  Session.find()
    .sort({ date: -1 })
    .then(function (sessions) {
      res.render('index', {
        title: 'GymBuddy',
        sessions: sessions
      });
    })
    .catch(function (error) {
      next(error);
    });

});

module.exports = router;
