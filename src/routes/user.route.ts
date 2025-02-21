import express from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import * as userController from '../controllers/user.controller';

const router = express.Router();

router.get('/profile', authenticate, userController.getProfile);

export default router;
