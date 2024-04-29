const OrdersModel = require('../models/order');

exports.getall = async () => {
    let orders = await OrdersModel.find();
    return orders;
}

exports.getOne = async (id) => {
    let order = await OrdersModel.find({_id: id});
    return order;
}

exports.save = async (order, address, total, email) => {
    let _order = new OrdersModel({order, address, total, email});
    _order.save();
    return _order;
}
