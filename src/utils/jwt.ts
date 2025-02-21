import jwt from 'jsonwebtoken';
import config from '../config';

export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, config.jwtSecret, { expiresIn: '1h' });
};

export const verifyToken = (token: string): { userId: number } => {
  return jwt.verify(token, config.jwtSecret) as { userId: number };
};
