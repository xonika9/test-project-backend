# Express TypeScript Backend API

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A modern Node.js backend API built with Express, TypeScript, and Prisma. Features user authentication, profile management, and API documentation.

## Features

- 🚀 TypeScript support
- 🔐 JWT authentication
- 📝 Swagger API documentation
- 🐘 PostgreSQL database with Prisma ORM
- 🐳 Docker containerization
- 📦 Modular architecture
- 🔄 Automatic database migrations
- 🛡️ Environment variable validation
- 🧪 Type-safe database queries

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT
- **API Docs**: Swagger UI
- **Containerization**: Docker

## Getting Started

### Prerequisites

- Node.js (>=16)
- Docker
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/test-project-backend.git
   cd test-project-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your database credentials.

4. Start the development environment:
   ```bash
   docker-compose up -d
   ```

5. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

The API will be running at `http://localhost:3000` and API documentation at `http://localhost:3000/api-docs`.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### User Profile
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Database Schema

The database schema is managed using Prisma. The main models include:

- **User**: Stores user information including authentication details and profile data

## Environment Variables

The following environment variables are required:

- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name
- `DB_HOST` - Database host
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Application port (default: 3000)

## Development

- Run in development mode:
  ```bash
  npm run dev
  ```

- Generate Prisma client:
  ```bash
  npm run prisma:generate
  ```

- Run Prisma Studio:
  ```bash
  npm run prisma:studio
  ```

## Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Prisma for the excellent ORM
- Express for the web framework
- TypeScript for type safety
- Swagger for API documentation
