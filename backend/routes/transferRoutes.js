const express = require('express')

const router = express.Router()
const {updataeBalance ,showTable} = require('../controller/transferController')
router.put('/:senderid/:id/:amount',updataeBalance)


router.get('/table',showTable)
module.exports = router    