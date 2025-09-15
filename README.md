# Todo Application

A modern, feature-rich todo application built with Next.js and powered by Bun.

## Tech Stack And Libraries Used

- Next.js
- TypeScript
- Tailwind CSS
- Drizzle ORM
- SQLite
- Zod
- React Hook Form
- Docker
- Bun (JavaScript runtime)

## Description

This is a full-featured todo application that allows users to create, update, delete, and organize tasks. The application demonstrates modern web development practices using Next.js framework with Bun as the JavaScript runtime.

## Installation

Make sure you have Bun installed on your system. If not, install it by following the instructions at [bun.sh](https://bun.sh).

```bash
# Clone the repository
git clone https://github.com/yourusername/todo.git
cd todo

# Install dependencies using Bun
bun install
```

## Development

```bash
# Run the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Build and Production

```bash
# Build the application
bun run build

# Start the production server
bun run start
```

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Filter todos by status
- Responsive design
- Data persistence using SQLite and Drizzle ORM

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

## Docker

A Docker configuration is included for containerized deployment.

```bash
# Build and run with Docker
docker build -t todo-app .
docker run -p 3000:3000 todo-app
```

## License
