const {Vendor} = require('../models')

module.exports = {
    async getVendors(req,res) {
        try{
            let data = await Vendor.findAll()
            res.send(data)
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].message)
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async getVendor(req,res) {
        try{
            let data = await Vendor.findOne({
                where : {vendorID : req.body.vendorID}
            })
            res.send(data)
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].message)
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async addVendor(req,res) {
        try{
            let data = await Vendor.create(req.body)
            res.send(data)
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].message)
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async deleteVendor(req,res) {
        try{
            let exist = await Vendor.findOne({
                where : {vendorID : req.body.vendorID}
            })
            if(!exist){
                res.send('Vendor tidak ditemukan')
            }else{
                await Vendor.destroy({
                    where : {vendorID : req.body.vendorID}
                })
            }
            res.status(200).end()
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].message)
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async editVendor(req,res) {
        try{
            let data = await Vendor.findOne({
                where : {vendorID : req.body.vendorID}
            })
            if(!data){
                console.log(req.body)
                res.status(500).send({error : 'Vendor tidak ditemukan'})
            }else{
                await data.updateAttributes(req.body)
            }
            res.end()
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].message)
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    }
}