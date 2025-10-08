# Repository Guidelines

## Project Structure & Module Organization
This monorepo organizes work through top-level project folders plus shared configuration.
- `project-a/`: first project implementation; maintains its own TypeScript entry point under `src/`.
- `project-b/`: second project implementation; maintains its own TypeScript entry point under `src/`.
- `tasks/`: numbered planning folders (ex: `02-feature-name/01-plan.md`) capture execution steps; update these before pushing major changes.

## Build, Test, and Development Commands
Use Node.js 22 (see `.nvmrc`) across all projects.
- `npm install`: install project dependencies.
- `npm run dev`: execute development server or entry point.
- `npm run lint`: run Biome lint checks (`biome lint src`).
- `npm run format`: apply Biome formatting (`biome format --write src`).
- `npm run typecheck`: run `tsc --noEmit` for strict type validation.
- `npm run test`: execute tests when configured.

## Before Committing
- Run `npm run lint` and resolve any diagnostics.
- Run `npm run test` to ensure suites pass when applicable.
- Run `npm run typecheck` for strict TypeScript validation.
- Confirm no secrets or sensitive data are present in diffs.

## Git Branch Naming Conventions
- Issue-focused work: prefix branches with the GitHub issue number, e.g. `1500-fix-navigation-bug`.

## Coding Style & Naming Conventions
Use TypeScript with strict mode enabled. Format and lint via Biome (configured for 2-space indent, single quotes, trailing commas, LF line endings). Favor named exports; reserve default exports for CLI entry points. Name directories and files using `kebab-case`. Document required env vars in project README files.

### Biome Configuration
- Root `biome.json` defines base formatting and linting rules for the entire repository
- Project-specific directories can extend the root config using `"extends": "//"`
- Use `overrides` array to disable formatting/linting for specific files:
  - Generated files
  - Third-party UI components
  - Auto-generated type definitions
- Line endings are standardized to LF (`"lineEnding": "lf"`) across the repository

### Imports & Path Aliases
- Code lives under `src/` for all projects.
- Configure TypeScript and Vite to resolve `@/` to `src/`:
  - `tsconfig.json`: `"baseUrl": "."`, `"paths": { "@/*": ["src/*"] }`
  - `vite.config.ts`: `resolve.alias = { '@': '/src' }`
- Prefer alias-based absolute imports from `@/` instead of deep relative paths.
  - Good: `import { Button } from '@/components/button'`
  - Avoid: `import { Button } from '../../../components/button'`
- Use relative imports only for intentionally co-located child modules within the same feature folder.

## Testing Guidelines
Use appropriate testing framework for each project. Mirror source structure under `tests/` with filenames ending in `.test.ts`. Target good coverage and validate behavior. Record coverage goals in the corresponding task plan.

## Commit & Pull Request Guidelines
Write clear, sentence-case summaries using imperative subjects (e.g., `Add new feature`). Reference related task folders in the body. PRs should include: goal overview, test evidence, configuration changes, and follow-up work.

## Security & Configuration Tips
Store API keys only in `.env.local`; never commit secrets. Provide `.env.example` placeholders with descriptive comments.
