const mongoose =require('mongoose');
const productschema = new mongoose.Schema({
    productname:String,
    category : String,
    price :number

},{timestmps:true} )
module.exports =mongoose.model('product', productschema)