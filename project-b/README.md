# Project B

A TypeScript CLI/script project using tsx for execution.

## Setup

```bash
npm install
```

Copy `.env.example` to `.env.local` and configure environment variables.

## Development

Run the script with tsx:

```bash
npm run dev
```

With arguments:

```bash
npm run dev -- --name=Cameron
```

Or directly with tsx:

```bash
npx tsx src/index.ts --name=Cameron
```

## Biome Configuration

This project extends the root `biome.json` configuration:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.5/schema.json",
  "extends": "//",
  "root": false,
  "overrides": []
}
```

**Key points:**
- `"extends": "//"` - Uses the monorepo root Biome config (the `//` syntax references the root)
- `"root": false` - Required when extending; tells Biome this is not the root config
- `overrides` - Add project-specific overrides here, such as:
  - Disabling linting/formatting for third-party UI components
  - Disabling checks for generated files (migrations, type definitions)
  - Custom rules for specific file patterns

**Common overrides pattern:**
```json
{
  "includes": ["src/components/ui/**"],
  "linter": { "enabled": false },
  "formatter": { "enabled": false }
}
```

## Project Structure

```
project-b/
├── src/
│   └── index.ts        # Main entry point with CLI arg parsing
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration with @/ alias
├── biome.json         # Extends root Biome config
└── .env.example       # Environment variable template
```

## Key Features

- **tsx execution**: No build step required, runs TypeScript directly
- **CLI argument parsing**: Built-in support for `--flag=value` style args
- **Environment variables**: Loaded via dotenv from `.env.local`
- **Path aliases**: Use `@/` imports for clean module references
- **Type-safe**: Strict TypeScript with full type checking

## Environment Variables

See `.env.example` for available configuration options.
