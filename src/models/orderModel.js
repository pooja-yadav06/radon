const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    user_Id: {type:ObjectId,
        ref:"newUser"
    },
	product_Id:{type:ObjectId,
        ref:"Product"
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date:{type:Number,
        default:new Date()
    }
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    
}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //users
