const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Credit name is required'] },
    value: { type: Number, required: [true, 'Credit value is required'], min: 0 }
})

const debitSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Debit name is required'] },
    value: { type: Number, required: [true, 'Debit value is required'], min: 0 },
    status: { type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Billing cycle name is required']
    },
    month: { 
        type: Number, 
        required: [true, 'Billing cycle month is required'], 
        min: 1, 
        max: 12 },
    year: { 
        type: Number, 
        required: [true, 'Billing cycle year is required'], 
        min: 1970, 
        max: 2100 },
    credits: [creditSchema],
    debits: [debitSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)