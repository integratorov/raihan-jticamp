const express = require('express');
const bodyparser =  require('body-parser');
const router = express.Router();

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

// api router
const bootcampcontroller = require('./bootcamp/index');
router.use( '/bootcamp', bootcampcontroller);

module.exports = router;
