const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    username: {
        type: String
    }
});

module.exports = User = mongoose.model('user', schema);