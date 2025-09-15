# Todo Application

A modern, feature-rich todo application built with Next.js, TypeScript, and Bun.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- PostgreSQL
- Bun (JavaScript runtime)

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete

## Project Structure

```
todo/
├── app/             # Next.js application routes
├── components/      # Reusable React components
├── lib/             # Utilities and database configuration
├── public/          # Static assets
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## Installation

Make sure you have Bun installed. If not, see [bun.sh](https://bun.sh).

```sh
git clone https://github.com/yourusername/todo.git
cd todo
bun install
```

## Development

```sh
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Build and Production

```sh
bun run build
bun run start
```

## License

MIT
