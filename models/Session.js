var mongoose = require('mongoose');

// Define the structure of a workout session
var sessionSchema = new mongoose.Schema({

    type: {
        type: String,
        required: true,
        enum: ['Cardio', 'Running', 'Weight Training', 'Boxing', 'Yoga', 'Other']
    },

    date: {
        type: Date,
        required: true
    },

    duration: {
        type: Number,
        required: true,
        min: 1
    },

    intensity: {
        type: String,
        required: true,
        enum: ['Low', 'Medium', 'High']
    },

    notes: {
        type: String,
        trim: true
    }

});

// Create the Workout Session model
var Session = mongoose.model('Session', sessionSchema);

module.exports = Session;