# Технический контекст (Tech Context)

## Используемые технологии

- **Среда выполнения**: Node.js (>=16)
- **Фреймворк**: Express
- **Язык**: TypeScript
- **ORM**: Prisma
- **База данных**: PostgreSQL
- **Аутентификация**: JWT (JSON Web Tokens)
- **Документация API**: Swagger UI (интегрирован, доступен по `/api-docs`)
- **Контейнеризация**: Docker, Docker Compose (`docker-compose.yml`)
- **Менеджер пакетов**: npm (`package.json`, `package-lock.json`)
- **Конфигурация TypeScript**: `tsconfig.json`
- **Форматирование кода**: Prettier (`.prettierrc`, `.prettierignore`)

## Настройка окружения разработки

### Требования

- Node.js (версия 16 или выше)
- Docker
- PostgreSQL (обычно запускается через Docker Compose)

### Шаги установки

1.  **Клонировать репозиторий.**
2.  **Установить зависимости:** `npm install`
3.  **Настроить переменные окружения:** Скопировать `.env.example` в `.env` и заполнить данными для подключения к БД и `JWT_SECRET`.
4.  **Запустить Docker-контейнеры:** `docker-compose up -d` (запускает PostgreSQL и, возможно, другие сервисы).
5.  **Применить миграции БД:** `npm run prisma:migrate`
6.  **Запустить сервер разработки:** `npm run dev`

## Технические ограничения

- Зависимость от Node.js версии >=16.
- Требуется Docker для локального запуска окружения, описанного в `README.md`.
- Необходимо настроить переменные окружения в файле `.env`.

## Зависимости

- Основные зависимости перечислены в `package.json`.
- Ключевые зависимости: `express`, `typescript`, `@prisma/client`, `jsonwebtoken`, `swagger-ui-express`, `docker`.

## Использование инструментов

- **npm:** Для управления зависимостями и запуска скриптов (`dev`, `build`, `start`, `prisma:migrate`, `prisma:generate`, `prisma:studio`).
- **Prisma CLI:** Для миграций (`prisma migrate dev`), генерации клиента (`prisma generate`), и просмотра данных (`prisma studio`).
- **Docker/Docker Compose:** Для управления контейнерами (база данных, приложение).
- **TypeScript Compiler (tsc):** Для компиляции TypeScript в JavaScript (`npm run build`).
- **Swagger:** Для документации API.

## Переменные окружения (`.env`)

Необходимо определить следующие переменные:
- `DB_USER`: Имя пользователя базы данных
- `DB_PASSWORD`: Пароль базы данных
- `DB_NAME`: Имя базы данных
- `DB_HOST`: Хост базы данных (обычно имя сервиса из `docker-compose.yml`, например, `postgres`)
- `DATABASE_URL`: Полный URL для подключения Prisma (обычно формируется из предыдущих переменных, например: `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}?schema=public`)
- `JWT_SECRET`: Секретный ключ для подписи JWT токенов.
- `PORT`: Порт, на котором будет работать приложение (по умолчанию: 3000).

*(Примечание: `DATABASE_URL` часто используется Prisma напрямую и может заменять отдельные переменные DB_*)*.
