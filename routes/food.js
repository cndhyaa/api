let express = require('express');
const foodController = require('../controller/foodController');

let router = express.Router();

// route to get all the food
router.get('/foods/', async (req, res) => {
   let foods = await foodController.getall();
    res.json({data: foods});
});

// save the food data
router.post('/food/', async (req, res) => {
    let name = req.body.name;
    let description = req.body.description; 
    let ingredients = req.body.ingredients; 
    let price = req.body.price;
    // let image = req.body.image;

    let food = await foodController.save(name, description, ingredients, price);
    res.json({data: food})
});

router.get('/food/:id', async (req, res) => {
    let food = await foodController.getOne(req.params.id);
    res.json({data: food});
 });
module.exports = router;
