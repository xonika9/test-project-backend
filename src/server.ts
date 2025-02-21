import { app } from './app';
import config from './config';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from './config/swagger';

const PORT = config.port || 3000;

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const server = app.listen(PORT, () => {
    console.log(
        `🚀 Server is running in ${process.env.NODE_ENV} || 'development' mode on port ${PORT}`,
    );
    console.log(`📚 API documentation available at http://localhost:${PORT}/api-docs`);
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
