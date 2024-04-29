const mongoose = require('mongoose');

let order = new mongoose.Schema({
    order: mongoose.Schema.Types.Mixed,
    address: String,
    total: Number,
    email: String
}, { timestamps: true, usePushEach: true });

const Order = new mongoose.model('Order', order);
module.exports = Order;
