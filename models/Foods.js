const mongoose = require('mongoose');

// Mongoose schema for Food.
let foodSchema = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: String,
    price: Number,
    image: String,
    category:{
        type:String,
        enum:["veg","non-veg"]
    }
    
}, { timestamps: true, usePushEach: true });

const Food = new mongoose.model('Food', foodSchema);
module.exports = Food;
