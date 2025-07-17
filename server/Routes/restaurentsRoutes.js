import restaurentscontroller from '../controllers/restaurentscontro.js';
import express from 'express';

const router = express.Router();
//POST http://localhost:5000/api/v1/restaurants
router.post('/', restaurentscontroller.create);

//GET http://localhost:5000/api/v1/restaurants
router.get('/', restaurentscontroller.getAllRestaurants);

//GET http://localhost:5000/api/v1/restaurants/:id
router.get('/:id', restaurentscontroller.getById);

//PUT http://localhost:5000/api/v1/restaurants/:id
router.put('/:id', restaurentscontroller.update);

//DELETE http://localhost:5000/api/v1/restaurants/:id
router.delete('/:id', restaurentscontroller.delete);
export default router;
