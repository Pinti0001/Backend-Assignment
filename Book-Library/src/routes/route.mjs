import express from 'express';
import {creatBook, findBooks} from '../controllers/bookControlles.mjs';
const router = express.Router();

router.post('/books/add',creatBook);
router.get('/books', findBooks);

export default router;