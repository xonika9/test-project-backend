import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getProfile = async (req: Request & { user: { id: number } }, res: Response) => {
  try {
    const userId = req.user.id;
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
