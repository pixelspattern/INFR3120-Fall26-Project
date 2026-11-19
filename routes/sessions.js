var express = require('express');
var router = express.Router();

// Display the Log a Session form
router.get('/new', function (req, res, next) {
    res.render('new-session', { title: 'Log a Session' });
});

// Receive and validate the submitted workout information
router.post('/', function (req, res, next) {

    var type = req.body.type;
    var date = req.body.date;
    var duration = Number(req.body.duration);
    var intensity = req.body.intensity;
    var notes = req.body.notes;

    // Check that the required fields are filled in
    if (!type || !date || !req.body.duration || !intensity) {
        return res.render('new-session', {
            title: 'Log a Session',
            error: 'Please fill in all required fields.'
        });
    }

    // Check that duration is a positive number
    if (isNaN(duration) || duration <= 0) {
        return res.render('new-session', {
            title: 'Log a Session',
            error: 'Duration must be a number greater than zero.'
        });
    }

    // Check that the intensity is valid
    if (intensity !== 'Low' && intensity !== 'Medium' && intensity !== 'High') {
        return res.render('new-session', {
            title: 'Log a Session',
            error: 'Please select a valid intensity.'
        });
    }

    // Check that the workout type is valid
    var validTypes = ['Cardio', 'Running', 'Weight Training', 'Boxing', 'Yoga', 'Other'];

    if (!validTypes.includes(type)) {
        return res.render('new-session', {
            title: 'Log a Session',
            error: 'Please select a valid workout type.'
        });
    }

    // Check that a valid date was entered
    var workoutDate = new Date(date);

    if (isNaN(workoutDate.getTime())) {
        return res.render('new-session', {
            title: 'Log a Session',
            error: 'Please enter a valid workout date.'
        });
    }

    // Information is valid. Database saving will be added next.
    res.send('Your workout details have been successfully submitted!');

});

module.exports = router;