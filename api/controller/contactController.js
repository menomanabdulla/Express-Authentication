const contactModel = require('../model/contactModel')

const getallContact = (req,res)=>{
    res.json(
        {
            msg: 'hello form all contact'
        }
    )
}

const getSingleContact = (req,res)=>{
    res.json(
        {
            msg: 'hello form single contact'
        }
    )
}

const postContact = (req,res)=>{
    res.json(
        {
            msg: 'hello form post contact'
        }
    )
}

module.exports = {
    getallContact,
    getSingleContact,
    postContact
}