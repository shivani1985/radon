const publishermodel = require ("../models/publishermodel")

const createpublisher = async function(req,res){
let publisher = req.body
let publishercreated = await publishermodel.create(publisher)
res.send =({ msg: publishercreated})


}
module.exports.createpublisher =createpublisher