const userinformationmodel=require("../models/userinformationmodel")



const createuserinformation =async function(req,res, next) {

    let data= req.body
    let savedata= await userinformationmodel.create(data)
    res.send({msg:savedata})
}






module.exports.createuserinformation = createuserinformation