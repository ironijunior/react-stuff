const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

//Apply errorHandler middleware
BillingCycle.after('post', errorHandler).after('put', errorHandler)

//Create different route called 'count'
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({code: 0, errors: [error]})
        } else {
            res.json({ value })
        }
    })
})

//Create different route called 'summary'
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        $project: {credit: {$sum: "$credits.value"}, debit: {$sum: "$debits.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debit"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }]).exec((error, result) => {
        if(error) {
            res.status(500).json({code: 0, errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle