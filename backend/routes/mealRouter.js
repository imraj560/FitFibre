const express = require('express');
const { allMeals } = require('../controller/mealController');
const router = express.Router();

router.get('/', allMeals);


module.exports = router;

