let multer = require('multer');
let express = require('express');
const foodController = require('../controller/foodController');

let router = express.Router();
// const upload = multer({ dest: 'upload/' })
let uniqueName = Date.now()
const storage = multer.diskStorage(
    {
        destination: './upload/',
        filename: function ( req, file, cb ) {
            cb( null, uniqueName + "_" + file.originalname);
        }
    }
);

const upload = multer( { storage: storage } );

// route to get all the food
router.get('/foods/', async (req, res) => {
    let foods = await foodController.getall();
    res.json({ data: foods });
});

// save the food data
router.post('/food/',upload.single('image'), async (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
    let ingredients = req.body.ingredients;
    let price = req.body.price;

    const image =  uniqueName + "_" + req.file.originalname
    console.log({name, description, image})

    let food = await foodController.save(name, description, ingredients, price, image);
    res.json({ data: food })
});

router.get('/food/:id', async (req, res) => {
    let food = await foodController.getOne(req.params.id);
    res.json({ data: food });
});

router.delete('/food/:id', async (req, res) => {
    await foodController.deleteOne(req.params.id);
    res.json({ data: {} });
});

module.exports = router;
