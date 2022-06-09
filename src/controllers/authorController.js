const authorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({data: savedData})
}
const getAuthorsData= async function (req, res) {
    let allAuthors= await AuthorsModel.find()
    res.send({msg: allAuthors})
}


module.exports.getAuthorsData= getAuthorsData
module.exports.createAuthor= createAuthor