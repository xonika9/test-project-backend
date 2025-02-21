import dotenv from 'dotenv';
dotenv.config();

function validateEnv() {
  const requiredVars = ['DB_USER', 'DB_PASSWORD', 'DB_NAME', 'JWT_SECRET'];
  const missingVars = requiredVars.filter(v => !process.env[v]);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}

validateEnv();

export default {
  port: parseInt(process.env.PORT || '3000', 10),
  db: {
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    name: process.env.DB_NAME!,
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
  },
  jwtSecret: process.env.JWT_SECRET!,
};
