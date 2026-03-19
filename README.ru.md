# Next Base Starter

English version: [README.md](./README.md)

Подробный стартовый шаблон Next.js с Tailwind, SCSS, React Query, генерацией OpenAPI-клиента через Kubb и масштабируемой слоистой архитектурой.

## Зачем этот шаблон

Шаблон нужен, чтобы запускать новые веб-проекты с практичными настройками из коробки:

- фундамент на Next.js 16 App Router
- FSD-подобное деление: `app`, `processes`, `widgets`, `shared`
- Tailwind + SCSS для быстрой сборки UI
- готовый React Query provider
- типобезопасный API слой из OpenAPI через Kubb
- пример маршрутов и переиспользуемый app shell

## Технологии

Базовые:

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

UI и стили:

- [Tailwind CSS v4](https://tailwindcss.com/)
- [Sass / SCSS](https://sass-lang.com/)

Data и API:

- [TanStack Query](https://tanstack.com/query/latest)
- [Kubb](https://kubb.dev/) (`@kubb/core`, `@kubb/plugin-*`)

Качество:

- ESLint (flat config, правила Next.js)

## Установка

```bash
npm install
```

## Переменные окружения

Скопируй `.env.example` в `.env` и задай значения.

```bash
cp .env.example .env
```

Переменные:

- `NEXT_PUBLIC_API_URL`: базовый URL API для runtime
- `API_DOCS_URL`: удалённый OpenAPI endpoint (используется при `OPENAPI_PATH=remote`)
- `OPENAPI_PATH`: источник OpenAPI для `kubb generate`

Варианты `OPENAPI_PATH`:

- `./openapi.json` (локальная схема по умолчанию)
- `remote` (схема берётся из `API_DOCS_URL`)

## Скрипты

- `npm run dev`: запуск dev-сервера (`http://localhost:3000`)
- `npm run build`: production-сборка
- `npm run start`: запуск production-сервера
- `npm run lint`: запуск ESLint
- `npm run generate`: генерация API-клиентов/хуков из OpenAPI через Kubb

## Быстрый старт

1. Установи зависимости:

```bash
npm install
```

2. Настрой окружение:

```bash
cp .env.example .env
```

3. Сгенерируй API слой:

```bash
npm run generate
```

4. Запусти приложение:

```bash
npm run dev
```

5. Открой `http://localhost:3000`

## Архитектура

Основные слои:

- `src/app`: route groups, layouts, верхнеуровневые providers
- `src/processes`: app-level providers и orchestration-логика
- `src/widgets`: композитные UI-блоки и page views
- `src/shared`: общая инфраструктура (api/config/ui)

Текущие маршруты:

- `/` -> Home page
- `/about` -> About page
- `/docs` -> Docs page

## API слой и генерация кода

Ручной HTTP-клиент:

- `src/shared/api/client.ts`

Сгенерированные артефакты:

- `src/shared/api/.generated`

Конфигурация Kubb:

- `kubb.config.ts`

Пайплайн генерации:

1. Определение источника OpenAPI (`OPENAPI_PATH` / `API_DOCS_URL`)
2. Генерация TypeScript-моделей
3. Генерация типизированных fetch-клиентов
4. Генерация React Query хуков

## Модель стилизации

- Tailwind utilities подключены глобально через `src/styles/globals.css`
- Общие стили и переменные вынесены в `src/styles/globals.scss`
- Tailwind используем для layout-компонентов, SCSS для глобальных тем/переменных

## Рекомендованный workflow для новых фич

1. Обнови OpenAPI схему (`openapi.json` или remote docs)
2. Запусти `npm run generate`
3. Реализуй UI в `widgets`
4. Выноси app-level orchestration в `processes` при необходимости
5. Оставляй переиспользуемые абстракции в `shared`
6. Проверяй `npm run lint && npm run build`

## Troubleshooting

`Cannot find module '@/shared/api'`:

- Выполни `npm run generate`
- Проверь, что файлы появились в `src/shared/api/.generated`

Ошибки путей в Kubb:

- Проверь `pluginClient.importPath` и `pluginReactQuery.client.importPath`
- Должно быть `@/shared/api/client`

Ошибки источника OpenAPI:

- Для локального режима используй `OPENAPI_PATH=./openapi.json`
- Для remote режима поставь `OPENAPI_PATH=remote` и проверь `API_DOCS_URL`

Tailwind стили не применяются:

- Проверь, что `@import "tailwindcss";` есть в `src/styles/globals.css`

## Перед продакшеном

Перед релизом:

- замени пример OpenAPI схемы на реальный контракт backend
- добавь тесты (unit + e2e)
- добавь CI-проверки (`lint`, `build`, тесты)
- подключи мониторинг ошибок (например Sentry)

## Лицензия

Добавь нужную лицензию проекта (например MIT).
