# Системные паттерны (System Patterns)

## Архитектура системы

- **Backend:** Node.js приложение на фреймворке Express.
- **Язык:** TypeScript для строгой типизации.
- **База данных:** PostgreSQL, взаимодействие через Prisma ORM.
- **Аутентификация:** Реализована с использованием JSON Web Tokens (JWT).
- **API:** RESTful API с документацией через Swagger UI.
- **Структура:** Модульная архитектура (предположительно разделение по функциональности: auth, users, profile и т.д., судя по файловой структуре).
- **Контейнеризация:** Поддерживается Docker и Docker Compose для настройки окружения.

## Ключевые технические решения

- Использование Prisma как ORM для взаимодействия с PostgreSQL.
- Применение JWT для управления сессиями и аутентификации.
- Использование Swagger для автоматической генерации и отображения документации API.
- TypeScript для повышения надежности и упрощения разработки.

## Используемые паттерны проектирования

- **Модульная архитектура:** Код организован в модули (controllers, services, routes), что способствует разделению ответственности и упрощает поддержку.
- **Middleware (Express):** Используется для обработки запросов, например, для аутентификации (`auth.middleware.ts`).
- **Сервисный слой:** Логика приложения вынесена в сервисы (`auth.service.ts`, `user.service.ts`, `profile.service.ts`).
- **Контроллеры:** Обрабатывают входящие HTTP-запросы и вызывают соответствующие сервисы (`auth.controller.ts`, `user.controller.ts`, `profile.controller.ts`).
- **Маршрутизация (Express):** Определяет конечные точки API и связывает их с контроллерами (`auth.route.ts`, `user.route.ts`).

## Взаимодействие компонентов

```mermaid
graph LR
    Client --> Nginx[Docker: Nginx (Optional)] -- Порт 80/443 --> App[Docker: Node.js/Express App :3000]
    App --> AuthMiddleware[Auth Middleware]
    App --> Routes[API Routes]
    Routes --> Controllers
    Controllers --> Services
    Services --> PrismaClient[Prisma Client]
    PrismaClient --> DB[Docker: PostgreSQL DB]

    subgraph "Приложение (Node.js/Express)"
        direction TB
        AuthMiddleware
        Routes
        Controllers
        Services
        PrismaClient
    end

    subgraph "Инфраструктура (Docker Compose)"
        direction LR
        Nginx
        App
        DB
    end
```

## Схема базы данных (Prisma)

- Основная модель: **User**.
- Хранит информацию о пользователях, включая данные для аутентификации и профиля.
- Управляется через `prisma/schema.prisma`.
- Миграции находятся в `prisma/migrations/`.

## Конечные точки API (Основные)

- **Аутентификация:**
    - `POST /api/auth/register`: Регистрация нового пользователя.
    - `POST /api/auth/login`: Вход пользователя.
- **Профиль пользователя:**
    - `GET /api/users/profile`: Получение профиля пользователя (требует аутентификации).
    - `PUT /api/users/profile`: Обновление профиля пользователя (требует аутентификации).
- **Документация API:**
    - `GET /api-docs`: Доступ к Swagger UI.
