const router = require('express').Router()
const eventController = require('../Controllers/eventController')

// Add API routes here
router.get('/events/', eventController.get)
router.post('/events/', eventController.push)

module.exports = router