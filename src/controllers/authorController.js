const res = require("express/lib/response")

const AuthorModel= require("../models/authorModel")

const createAuthor=async function (req,res){
let data =req.body
let savedata =await authorModel.create(data)
res.send({msg:savedata})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData