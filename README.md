# Express TypeScript Backend API

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Современное backend-приложение на Node.js с использованием Express, TypeScript и Prisma. Включает аутентификацию пользователей, управление профилем и документацию API.

## Возможности

- 🚀 Поддержка TypeScript
- 🔐 Аутентификация через JWT
- 📝 Документация API через Swagger
- 🐘 База данных PostgreSQL с ORM Prisma
- 🐳 Контейнеризация через Docker
- 📦 Модульная архитектура
- 🔄 Автоматические миграции базы данных
- 🛡️ Валидация переменных окружения
- 🧪 Типизированные запросы к базе данных

## Технологии

- **Среда выполнения**: Node.js
- **Фреймворк**: Express
- **Язык**: TypeScript
- **ORM**: Prisma
- **База данных**: PostgreSQL
- **Аутентификация**: JWT
- **Документация API**: Swagger UI
- **Контейнеризация**: Docker

## Начало работы

### Требования

- Node.js (>=16)
- Docker
- PostgreSQL

### Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/yourusername/test-project-backend.git
   cd test-project-backend
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Настройте переменные окружения:
   ```bash
   cp .env.example .env
   ```
   Отредактируйте файл `.env`, указав данные для подключения к базе данных.

4. Запустите окружение разработки:
   ```bash
   docker-compose up -d
   ```

5. Выполните миграции базы данных:
   ```bash
   npm run prisma:migrate
   ```

6. Запустите сервер разработки:
   ```bash
   npm run dev
   ```

API будет доступен по адресу `http://localhost:3000`, а документация API - по адресу `http://localhost:3000/api-docs`.

## Конечные точки API

### Аутентификация
- `POST /api/auth/register` - Регистрация нового пользователя
- `POST /api/auth/login` - Вход пользователя

### Профиль пользователя
- `GET /api/users/profile` - Получение профиля пользователя
- `PUT /api/users/profile` - Обновление профиля пользователя

## Схема базы данных

Схема базы данных управляется с помощью Prisma. Основные модели включают:

- **User**: Хранит информацию о пользователях, включая данные для аутентификации и профиля

## Переменные окружения

Необходимо задать следующие переменные окружения:

- `DB_USER` - Имя пользователя базы данных
- `DB_PASSWORD` - Пароль базы данных
- `DB_NAME` - Имя базы данных
- `DB_HOST` - Хост базы данных
- `JWT_SECRET` - Секретный ключ для JWT токенов
- `PORT` - Порт приложения (по умолчанию: 3000)

## Разработка

- Запуск в режиме разработки:
  ```bash
  npm run dev
  ```

- Генерация клиента Prisma:
  ```bash
  npm run prisma:generate
  ```

- Запуск Prisma Studio:
  ```bash
  npm run prisma:studio
  ```

## Продакшн

1. Сборка проекта:
   ```bash
   npm run build
   ```

2. Запуск продакшн сервера:
   ```bash
   npm start
   ```

## Лицензия

Этот проект лицензирован под MIT License - подробности в файле [LICENSE](LICENSE).
