var mongoose = require('mongoose');

// Connect to the GymBuddy MongoDB database
function connectDB() {

    mongoose.connect(process.env.MONGODB_URI)
        .then(function () {
            console.log('Connected to GymBuddy MongoDB database!');
        })
        .catch(function (error) {
            console.error('MongoDB connection error:', error);
        });

}

module.exports = connectDB;