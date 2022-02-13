const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    username:{
        type: String,
        required: true,
        unique: true 
    },
    password:{
        type: String,
        required: true 
    },
    role:{
        type: String,
        default: 'basic'
    },
});

module.exports = mongoose.model('user', UserSchema);