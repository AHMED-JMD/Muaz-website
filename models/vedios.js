const mongoose = require('mongoose');

const vedioSchema = mongoose.Schema({
    link:{
        type: String,
        required: true,
        unique: true
    },
    subject:{
        type: String,
        required: true
    },
    kind:{
        type: String,
        required: true
    },
    booknum:{
        type: String,
        required: true
    },
    chapter:{
        type: String,
        required: true
    },
    subName:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    users: {
        type : Array,
        default: []
    }

});

module.exports = mongoose.model('vedios', vedioSchema);