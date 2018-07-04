const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },
    phoneNo:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }
})