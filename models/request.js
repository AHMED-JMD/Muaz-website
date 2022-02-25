const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    videoname:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    videoId :{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true 
    }
});

module.exports =  mongoose.model('request', RequestSchema);