const mongoose = require('mongoose');
// const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema( {
    name:{
        type:String},
    author_id:{
        type:Number,
        required:true,
    },
    price:Number,
    ratings:Number
   
}, { timestamps: true });
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")



module.exports = mongoose.model('Book', bookSchema) //users
