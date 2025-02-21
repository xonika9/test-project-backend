import './types/index.d.ts';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/auth.route';
import userRoutes from './routes/user.route';

const prisma = new PrismaClient();

// Проверка подключения к базе данных
async function checkDatabaseConnection() {
    try {
        await prisma.$connect();
        console.log('Database connection established');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}

const app = express();

// Проверяем подключение при старте
checkDatabaseConnection();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/api/health', (req: express.Request, res: express.Response) => {
    res.status(200).json({ status: 'OK' });
});

// Error handling
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

export { app, prisma };
