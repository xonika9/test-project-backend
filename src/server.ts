import { app } from './app';
import config from './config';

const PORT = config.port || 3000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Обработка непредвиденных ошибок
process.on('unhandledRejection', (err: Error) => {
  console.error('Unhandled Rejection:', err);
  server.close(() => process.exit(1));
});

process.on('SIGTERM', () => {
  console.log('🔻 SIGTERM received. Shutting down gracefully');
  server.close(() => {
    console.log('✅ Process terminated');
    process.exit(0);
  });
});
