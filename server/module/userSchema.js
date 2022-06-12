const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
});

module.exports = Userdb = mongoose.model('userdb', userSchema);