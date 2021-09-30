const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:6,
        maxlength:40
    },
    email:{
        type:String,
        required:true,
        minlength:6,
        maxlength:255
    },
    password:{
        type:String,
        required: true,
        minlength:4,
        maxlength:1024
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Usuarios', schema);