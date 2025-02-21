import express from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import * as userController from '../controllers/user.controller';

const router = express.Router();

// Protected routes
router.use(authenticate);
router.get('/profile', userController.getProfile);

export default router;
