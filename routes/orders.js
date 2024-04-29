let express = require('express');
const OrdersController = require('../controller/ordersController');

let router = express.Router();

router.get('/orders', async (req, res) => {
    let orders = await OrdersController.getall();
    res.json({ data: orders });
});

router.get('/order/:id', async (req, res) => {
    let order = await OrdersController.getOne(req.params.id);
    res.json({ data: order });
});

router.post('/order', async (req, res) => {
    let order = req.body.order;
    let address = req.body.address;
    let total = req.body.total;
    let email = req.body.email;

    let _order = await OrdersController.save(order, address, total, email);
    res.json({ data: _order })
});

module.exports = router;
