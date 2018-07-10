const express = require('express')

module.exports = function(server) {

    //Base URL for all routes
    const router = express.Router()
    server.use('/api', router)

    //Define BillingCycle routes
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
}