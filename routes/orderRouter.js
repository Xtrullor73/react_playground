const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')
// const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', orderController.create)
// router.get('/get', orderController.getAll) Реализация необязательна
// router.delete('/delete', orderController.delete) Реализация необязательна

module.exports = router
