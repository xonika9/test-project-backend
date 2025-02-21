import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
