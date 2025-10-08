# Project A

Description of Project A goes here.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
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

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```
# Example variables
API_KEY=your-api-key-here
```
