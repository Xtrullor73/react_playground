const {Order} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderController {
    async create(req, res, next) {
        try {
            const {email, address, phoneNum, name, totalPrice, orderedDevices} = req.body
            const order = await Order.create({email, address, phoneNum, name, totalPrice, orderedDevices})


            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    // async getAll(req, res, next) {
    //     try {
    //         const orders = await Order.findAll()
    //
    //         return res.json(orders)
    //     } catch (e) {
    //         next(ApiError.badRequest(e.message))
    //     }
    // }
    //
    // async delete(req, res) {
    //
    // }
}

module.exports = new OrderController()