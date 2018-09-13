const {Timesheet,Employee,Project} = require('../models');

module.exports = {
    async addTimesheet (req,res,next) {
        try {
            await Timesheet.create(req.body)
            res.status(200).end()
        } catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].validatorArgs[0])
            }
            res.status(500).send({error : errors})
        }
    },
    async editTimesheet (req,res) {
        try {
            let timesheet = await Timesheet.findOne({
                where : {id : req.body.id}
            })
            delete req.body.Project
            delete req.body.Employee
            await timesheet.updateAttributes(req.body)
            res.status(200).end()
        } catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].validatorArgs[0])
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async getTimesheets (req,res) {
        try {
            let data = await Timesheet.findAll({
                include : [
                    {model : Project},
                    {model : Employee}
                ]
            })
            res.send(data)
        } catch(err) {
            res.send({error : err.errors[0].message})
        }
    },
    async getTimesheet (req,res) {
        try {
            let data = await Timesheet.findAll({
                include : [
                    {model : Project},
                    {model : Employee}
                ],
                where : {id : req.body.id}
            })
            res.send(data)
        } catch(err) {
            res.send({error : err.errors[0].message})
        }
    },
    async getTimesheetByEmployee (req,res) {
        try {
            let data = await Timesheet.findAll({
                where : {employeeID : req.body.employeeID},
                include : [
                    {model : Project},
                    {model : Employee}
                ]
            })
            res.send(data)
        } catch(err) {
            res.send({error : err.errors[0].message})
        }
    },
    async getTimesheetByProject (req,res) {
        try {
            let data = await Timesheet.findAll({
                where : {projectID : req.body.projectID},
                include : [
                    {model : Project},
                    {model : Employee}
                ]
            })
            res.send(data)
        } catch(err) {
            res.status(500).send({error : err.message})
        }
    },
    async updateTimesheet (req,res) {
        try {
            let data = await Timesheet.findOne({
                where : {id : req.body.id}
            })
            await data.updateAttributes(req.body)
            let updatedData = await Timesheet.findOne({
                where : {id : req.body.id}
            })
            res.send(updatedData)
        } catch(err) {
            res.status(500).send({error : err.message})
        }
    },
    async deleteTimesheet (req,res) {
        try {
            let exist = await Timesheet.findOne({
                where : {id : req.body.id}
            })
            if(!exist){
                throw "Timesheet doesn't exist"
            }
            await Timesheet.destroy({
                where : {id : req.body.id}
            })
            res.end()
        } catch(err) {
            res.send({error : err})
        }
    }

}