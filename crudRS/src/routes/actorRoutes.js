const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/actors', actorsController.list);
router.get('/actors/detail/:id', actorsController.detail);

router.get('/actors/add', actorsController.add);
router.post('/actors/add', actorsController.create);
//a futuro, no llegooooo
// router.get('/movies/edit/:id', moviesController.edit);
// router.post('/movies/edit/:id', moviesController.update);
// router.get('/movies/delete/:id', moviesController.delete);
// router.post('/movies/delete/:id', moviesController.delete);
module.exports=router;