const {Asset} = require('../models')

module.exports = {
    async getAssets(req,res) {
        try{
            let data = await Asset.findAll()
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
    async getAsset(req,res) {
        try{
            let data = await Asset.findOne({
                where : {assetID : req.body.assetID}
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
    async addAsset(req,res) {
        try{
            let data = await Asset.create(req.body)
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
    async deleteAsset(req,res) {
        try{
            let exist = await Asset.findOne({
                where : {assetID : req.body.assetID}
            })
            if(!exist){
                res.status(500).send('Asset tidak ditemukan')
            }else{
                await Client.destroy({
                    where : {assetID : req.body.assetID}
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
    async editAsset(req,res) {
        try{
            let data = await Asset.findOne({
                where : {assetID : req.body.assetID}
            })
            if(!exist){
                res.status(500).send('Asset tidak ditemukan')
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