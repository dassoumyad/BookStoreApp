import express from 'express';
import { createMessage } from '../Controllers/contactController.js';

const router = express.Router();

// Post a new message
router.post('/', createMessage);

export default router;
