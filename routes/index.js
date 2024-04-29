var express = require('express');
var router = express.Router();

router.use(require('./food'));
router.use(require('./orders'));

module.exports = router;
