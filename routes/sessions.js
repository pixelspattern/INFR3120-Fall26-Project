var express = require('express');
var router = express.Router();

// Display the Log a Session form
router.get('/new', function (req, res, next) {
    res.render('new-session', { title: 'Log a Session' });
});

module.exports = router;