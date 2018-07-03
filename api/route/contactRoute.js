const router = require('express').Router()

const contactController = require('../controller/contactController')

router.get('/',contactController.getallContact)
router.get('/:id',contactController.getSingleContact)
router.post('/',contactController.postContact)

module.exports = router