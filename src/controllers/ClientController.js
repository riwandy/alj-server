const {Client} = require('../models')

module.exports = {
    async getClients(req,res) {
        try{
            let data = await Client.findAll()
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
    async getClient(req,res) {
        try{
            let data = await Client.findOne({
                where : {clientID : req.body.clientID}
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
    async addClient(req,res) {
        try{
            let data = await Client.create(req.body)
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
    async deleteClient(req,res) {
        try{
            let data = await Client.findOne({
                where : {clientID : req.body.clientID}
            })
            if(!data){
                res.status(500).send('Client tidak ditemukan')
            }else{
                await Client.destroy({
                    where : {clientID : req.body.clientID}
                })
            }
            res.end()
        }catch(errors) {
            // let errors = []
            // for(let i=0; i<err.errors.length; i++){
            //     errors.push(err.errors[i].message)
            // }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async editClient(req,res) {
        try{
            let data = await Client.findOne({
                where : {clientID : req.body.clientID}
            })
            if(!data){
                res.status(500).send('Client tidak ditemukan')
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