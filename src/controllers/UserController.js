const {User,Employee} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60*60
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn : ONE_WEEK
    })
}

module.exports = {
    async getUsers(req,res) {
        try{
            let data = await User.findAll({
                include : [
                    {model : Employee}
                ]
            })
            res.send(data)
        }catch(err) {
            let errors = []
            if(errors.length!=0)
                for(let i=0; i<err.errors.length; i++){
                    errors.push(err.errors[i].validatorArgs[0])
                }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async getUser(req,res) {
        try{
            let data = await User.findOne({
                where : {id : req.body.id},
            include : [
                {model : Employee}
            ]
            })
            res.send(data)
        }catch(err) {
            let errors = []
            if(errors.length!=0)
                for(let i=0; i<err.errors.length; i++){
                    errors.push(err.errors[i].validatorArgs[0])
                }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async addUser(req,res) {
        try{
            let data = await User.create(req.body)
            res.send(data)
        }catch(err) {
            console.log(err)
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].message)
            }
            res.status(500).send({error : errors})
        }
    },
    async deleteUser(req,res) {
        try{
            let exist = await User.findOne({
                where : {username : req.body.username}
            })
            console.log(exist)
            if(!exist){
                res.status(500).send('User tidak ditemukan')
            }else{
                await User.destroy({
                    where : {username : req.body.username}
                })
            }
            res.end()
        }catch(err) {
            console.error(err)
            res.status(403).send(err)
        }
    },
    async editUser(req,res) {
        try{
            let exist = await User.findOne({
                where : {id : req.body.id},
                individualHooks: true  
            })
            if(!exist){
                res.send('User tidak ditemukan')
            }else{
                await exist.updateAttributes(req.body)
            }
            res.end()
        }catch(err) {
            let errors = []
            if(errors.length!=0)
                for(let i=0; i<(err.errors).length; i++){
                    errors.push(err.errors[i].message)
                }
            res.status(403).send({error : errors})
        }
    },
    async login (req, res){
        try{
            const user = await User.findOne({
                where: {
                    username : req.body.username,
                    approved : true
                },
                include : [
                    {model : Employee}
                ]
            })
            if(!user){
                res.status(403).send({error: 'Incorrect username or username not authorized'})
            }
            
            const isPasswordValid = await user.comparePassword(req.body.password)
            console.log(isPasswordValid)
            if(!isPasswordValid){
                res.status(403).send({error: 'Incorrect username or username not authorized'})
            }

            res.send({
                user: user.toJSON(),
                token : "JWT " + jwtSignUser(user.toJSON())
            })
            
        } catch (err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].validatorArgs[0])
            }
            res.status(403).send({error: errors})
        }
    },
}