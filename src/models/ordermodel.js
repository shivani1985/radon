const mongoose = require(mongoose);
const objectId =mongoose.schema.types.objectId
const orderschema = new mongoose.schema({
userId:{
    type: objectId,
    ref:"user"
},
productId:{
    type:"objectId",
    ref:"product"
},
Isfreeappuser:booolean,

amount: number,
date: Date

}, {timestamp:true})

module.exports =mongoose.model('order',orderschema)