const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_Name: String,
    author_id:{
        type:number,
        unique:true,
        required:true
    },
    age:number,
    address:string,
    timestamps: true
   })
        
    
    
    
    //"falana" will give an error
    
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]


module.exports = mongoose.model('author', authorSchema) //users



// String, Number
// Boolean, Object/json, array