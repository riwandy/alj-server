const {Project, Employee, Client} = require('../models')

module.exports = {
    async getProjects(req,res) {
        try{
            let data = await Project.findAll({
                include : [
                    {model : Employee},
                    {model : Client}
                ]
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
    async getProject(req,res) {
        try{
            let data = await Project.findOne({
                where : {projectID : req.body.projectID},
                include : [
                    {model : Employee},
                    {model : Client}
                ]
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
    async addProject(req,res) {
        try{
            let data = await Project.create(req.body)
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
    async editProject(req,res) {
        try{
            console.log(req.body)
            let data = await Project.findOne({
                where : {projectID : req.body.projectID}
            })
            await data.updateAttributes(req.body)
            let updatedData = await Project.findOne({
                where : {projectID : req.body.projectID}
            })
            res.send(updatedData)
        }catch(err) {
            let errors = []
            for(let i=0; i<err.errors.length; i++){
                errors.push(err.errors[i].message)
            }
            console.log(errors)
            res.status(500).send({error : errors})
        }
    },
    async deleteProject(req,res) {
        try{
            let exist = await Project.findOne({
                where : {projectID : req.body.projectID}
            })
            if(!exist){
                res.status(500).send({error : 'Proyek tidak ditemukan'})
            }else{
                await Project.destroy({
                    where : {projectID : req.body.projectID}
                })
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