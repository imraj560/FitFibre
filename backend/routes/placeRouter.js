const express = require('express');
const { allPlaces } = require('../controller/placeController');
const router = express.Router();

router.get('/', allPlaces);


module.exports = router;

