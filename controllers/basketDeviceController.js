const {BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError')

class basketDeviceController {
    async create(req, res, next) {
        try {
            const {id, deviceId, basketId} = req.body
            const basketDevice = await BasketDevice.create({id, deviceId, basketId})

            return res.json(basketDevice)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new basketDeviceController()