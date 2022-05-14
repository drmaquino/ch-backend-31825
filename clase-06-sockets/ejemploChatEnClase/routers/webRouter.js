const { Router } = require('express')
const { webGetController } = require('../controllers/web/webControllers.js')

const router = new Router()

router.get('/', webGetController)

module.exports = router
