const {Vehicle} = require('../models')

module.exports = {
    async getVehicles(req,res) {
        try{
            let data = await Vehicle.findAll()
            res.send(data)
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].validatorArgs[0])
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async getVehicle(req,res) {
        try{
            let data = await Vehicle.findOne({
                where : {vehicleID : req.body.vehicleID}
            })
            res.send(data)
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].validatorArgs[0])
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async addVehicle(req,res) {
        try{
            let data = await Vehicle.create(req.body)
            res.send(data)
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].validatorArgs[0])
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async deleteVehicle(req,res) {
        try{
            let exist = await Vehicle.findOne({
                where : {vehicleID : req.body.vehicleID}
            })
            if(!exist){
                res.status(500).send('Alat tidak ditemukan')
            }else{
                await Vehicle.destroy({
                    where : {vehicleID : req.body.vehicleID}
                })
            }
            res.end()
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].validatorArgs[0])
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async editVehicle(req,res) {
        try{
            let data = await Vehicle.findOne({
                where : {vehicleID : req.body.vehicleID}
            })
            if(!exist){
                res.status(500).send('Alat tidak ditemukan')
            }else{
                await data.updateAttributes(req.body)
            }
            res.end()
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].validatorArgs[0])
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    }
}