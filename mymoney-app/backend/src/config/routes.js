const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    /*
     * Protected Route by JWT Token
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    //Define BillingCycle routes
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(protectedApi, '/billingCycles')

    /*
     * Open Route
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/valideToken', AuthService.validateToken)
}