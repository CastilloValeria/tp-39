const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/genres', genresController.listG);
router.get('/genres/detail/:id', genresController.detailG);


module.exports = router;