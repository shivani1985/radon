const mongoose = require('mongoose');

const publisher = new mongoose.Schema( {
    name:"string",
    headquarter:"string"
}, { timestamps:true })


module.exports = mongoose.model('publisher', publisher)





