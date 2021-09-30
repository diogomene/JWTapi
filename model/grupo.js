const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cor:{
        type:String,
        required:true
    },
    cursistas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Cursistas"
    }]
    })

module.exports = mongoose.model('Grupos', schema)