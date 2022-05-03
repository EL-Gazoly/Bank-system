const express = require('express')

const router = express.Router()
const {updataeBalance} = require('../controller/transferController')
router.get('/:senderid/:id/:amount',updataeBalance)

module.exports = router