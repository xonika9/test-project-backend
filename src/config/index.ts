import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
  },
  jwtSecret: process.env.JWT_SECRET || 'super_secret_key',
};
