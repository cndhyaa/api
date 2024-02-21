const FoodModel = require('../models/Foods');

exports.getall = async () => {
    let foods = await FoodModel.find();
    return foods;
}

exports.getOne = async (id) => {
    let food = await FoodModel.find({_id: id});
    return food;
}

exports.save = async (name, description, ingredients, price, image) => {
    let food = new FoodModel({name, description, ingredients, price, image});
    food.save();
    return food;
}
