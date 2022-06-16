

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
let token =req.header["x-auth-token"]
if (!token) return res.send({status:false, msg:"token must be present in the request" }) 
let decodedToken =jwt.verify(token,'functionup')
if(!decodedToken) return res.send ({status:false, msg:"this is not valid"})
   next()
}


const authorise = async function(req, res, next) {
    let userId = req.params.userid ;
    let userDetails =await usermodel.findById(userId);
    if(userDetails === null)
    return res.send ({status:false,msg: "user is not found "})

    else if ( userDetails.isdeleted ){
        res.send ({msg :"user is deleted"})
        
    }
    else


    // comapre the logged in user's id and the id in request
    
    next()
}
module.exports.authenticate = authenticate;
module.exports.authorise = authorise ;