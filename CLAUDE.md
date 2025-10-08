# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This monorepo is organized with shared configuration at the root and independent projects in subfolders:

### Project Structure
- `project-a/` - First project (customize this description)
- `project-b/` - Second project (customize this description)

Each project maintains its own:
- Dependencies (`package.json`)
- Source code (`src/`)
- Configuration (can extend root configs)

### `/tasks/`
Structured project planning and implementation tracking. Uses sequential numbering:
- `01-plan.md` - Initial implementation plan
- `02-update.md` - Progress updates (when applicable)
- etc.

Each task directory corresponds to specific project initiatives.

## Development Approach

### Runtime & Tooling Baseline
- Use Node.js 22 (pinned via top-level `.nvmrc`) for all local work.
- Lint and format with Biome (`npm run lint`, `npm run format`).
- Run TypeScript checks with `npm run typecheck` (`tsc --noEmit`) before committing.

### Biome Configuration
- Root `biome.json` defines base formatting and linting rules for the entire repository
- Project-specific directories can extend the root config using `"extends": "//"`
- Use `overrides` array to disable formatting/linting for specific files:
  - Generated files
  - Third-party UI components
  - Auto-generated type definitions
- Line endings are standardized to LF (`"lineEnding": "lf"`) across the repository

### Before Committing
- Run `npm run lint` and resolve any reported issues.
- Run `npm run test` when applicable.
- Run `npm run typecheck` to ensure strict TS passes.
- Double-check that no secrets or sensitive context leaks in diffs.

### Git Branch Naming Conventions
- Prefix feature/fix branches with the related issue number, e.g. `1500-fix-navigation-bug`.

### Imports & Aliasing
- Standardize on `src/` as the code root for projects.
- Configure aliasing so `@/` maps to `src/` for both TypeScript and Vite.
  - `tsconfig.json` → `"baseUrl": "."`, `"paths": { "@/*": ["src/*"] }`
  - `vite.config.ts` → `resolve.alias = { '@': '/src' }`
- Prefer `@/` absolute imports over deep relative paths. Use relative imports only for intentionally co-located child modules within a feature folder.

### Project Naming Convention
- Tasks use numbered directories (e.g., `02-feature-name/`)
- Plans within tasks use sequential markdown files (`01-plan.md`, `02-update.md`)
- This enables systematic tracking across multiple concurrent projects

## Key Technologies

### Primary Stack
- TypeScript for implementation
- Node.js runtime environment
- Biome for linting and formatting
