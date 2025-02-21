import { Request, Response } from 'express';
import * as profileService from '../services/profile.service';

export const updateUserProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const profileData = req.body; // Данные для обновления профиля из тела запроса

        const updatedProfile = await profileService.updateProfile(userId, profileData);
        res.json(updatedProfile);

    } catch (error: any) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
