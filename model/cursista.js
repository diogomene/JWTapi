const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:6,
        maxlength:40
    },
    idade:{
        type: Number,
        required:true,
        min:12
    },
    email:{
        type:String,
        required:true,
        minlength:6,
        maxlength:255
    },
    paroquia:{
        type:String,
        required: true,
        minlength:4,
        maxlength:100
    },
    comunidade:{
        type:String,
        required: true,
        minlength: 4,
        maxlength: 100
    },
    grupo:{
        type: String,
        ref: "Grupos",
        required: false
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Cursistas', schema);