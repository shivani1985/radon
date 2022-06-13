const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    name: string,
    balance:
        {type: number,
          default: 100
        },  
        address : string,
    
    
    age: number,
    gender:{
        type: string,
        enum: ["male", "female", "LGBTQ"]
}
},  { timestamps: true} );
module.exports = mongoose.model( 'userinformation', userschema)