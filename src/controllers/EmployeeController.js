const {Employee} = require('../models')

module.exports = {
    async getEmployees (req,res) {
        try {
            let data = await Employee.findAll()
            res.send(data)
        } catch(err){
            console.log(err)
        }
    },
    async getEmployee (req,res,next) {
        try {
            let data = await Employee.findOne({
                where : {employeeID : req.body.employeeID}
            })
            res.send(data)
        } catch(err){
            console.log(err)
        }
    },
    async addEmployee (req,res,next) {
        try {
            let data = await Employee.create(req.body)
            res.send(data)
        } catch(err){
            res.send({error : err.errors[0].message})
        }
    },
    async updateEmployee (req,res,next) {
        let result = await Employee.findOne({
            where: {employeeID : req.body.employeeID}
        })
        await result.updateAttributes(req.body)
        res.end()
        .catch(next)
    }
}