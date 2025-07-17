import restaurentscontroller from '../controllers/restaurentscontro.js';
import express from 'express';

const router = express.Router();
//POST http://localhost:5000/restaurents
router.post('/', restaurentscontroller.create);

export default router;
