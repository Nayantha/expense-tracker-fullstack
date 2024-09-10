# Expense Tracker

This app is a simple web application that tracks your day-to-day transactions and bank accounts.
The database is set to be MYSQL and can be changed by updating the datasource provider as depicted below.

```prisma
    datasource db {
      provider = ""
    }
```
Add a .env file with the key is "DATABASE_URL" and the relevant url of the database.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
