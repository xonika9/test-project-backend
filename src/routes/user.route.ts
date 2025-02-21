import express from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import * as userController from '../controllers/user.controller';
import * as profileController from '../controllers/profile.controller';

const router = express.Router();

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                 firstName:
 *                   type: string
 *                   nullable: true
 *                 lastName:
 *                   type: string
 *                   nullable: true
 *                 username:
 *                   type: string
 *                   nullable: true
 *                 bio:
 *                   type: string
 *                   nullable: true
 *                 avatarUrl:
 *                   type: string
 *                   nullable: true
 *                 phoneNumber:
 *                   type: string
 *                   nullable: true
 *                 location:
 *                   type: string
 *                   nullable: true
 *                 language:
 *                   type: string
 *                   nullable: true
 *                 timezone:
 *                   type: string
 *                   nullable: true
 *                 themePreference:
 *                   type: string
 *                   nullable: true
 *                 lastLoginAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                 isActive:
 *                   type: boolean
 *                 role:
 *                   type: string
 *                   nullable: true
 *       401:
 *         description: Unauthorized - invalid or missing token
 *       404:
 *         description: User not found
 */
router.get('/profile', authenticate, userController.getProfile);

/**
 * @swagger
 * /api/users/profile:
 *   put:
 *     summary: Update user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 nullable: true
 *               lastName:
 *                 type: string
 *                 nullable: true
 *               username:
 *                 type: string
 *                 nullable: true
 *               bio:
 *                 type: string
 *                 nullable: true
 *               avatarUrl:
 *                 type: string
 *                 nullable: true
 *               phoneNumber:
 *                 type: string
 *                 nullable: true
 *               location:
 *                 type: string
 *                 nullable: true
 *               language:
 *                 type: string
 *                 nullable: true
 *               timezone:
 *                 type: string
 *                 nullable: true
 *               themePreference:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 firstName:
 *                   type: string
 *                   nullable: true
 *                 lastName:
 *                   type: string
 *                   nullable: true
 *                 username:
 *                   type: string
 *                   nullable: true
 *                 bio:
 *                   type: string
 *                   nullable: true
 *                 avatarUrl:
 *                   type: string
 *                   nullable: true
 *                 phoneNumber:
 *                   type: string
 *                   nullable: true
 *                 location:
 *                   type: string
 *                   nullable: true
 *                 email:
 *                   type: string
 *                 language:
 *                   type: string
 *                   nullable: true
 *                 timezone:
 *                   type: string
 *                   nullable: true
 *                 themePreference:
 *                   type: string
 *                   nullable: true
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *                 lastLoginAt:
 *                   type: string
 *                   nullable: true
 *                 isActive:
 *                   type: boolean
 *                 role:
 *                   type: string
 *                   nullable: true
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized - invalid or missing token
 *       500:
 *         description: Internal server error
 */
router.put('/profile', authenticate, profileController.updateUserProfile);

router.get('/profile', authenticate, userController.getProfile);


export default router;
