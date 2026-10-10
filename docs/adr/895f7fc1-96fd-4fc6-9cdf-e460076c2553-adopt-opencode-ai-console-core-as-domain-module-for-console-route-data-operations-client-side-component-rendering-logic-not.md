# Adopt @opencode-ai/console-core as Domain Module for Console Route Data Operations: Client Side Component Rendering Logic Not

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Console application routes across workspace settings, billing, members, and provider integrations require access to persistent domain models and business workflows.
- Directly coupling route presentation components to database schemas introduces risks of inconsistent validation and tenant boundary bypasses.
- The codebase establishes an internal shared package, @opencode-ai/console-core, to encapsulate domain entities, database queries, and business rules across application boundaries.
- Route handlers consume domain capabilities from @opencode-ai/console-core within server-side execution scopes and actor context wrappers.

## Problem Statement

Application route components require access to complex domain operations—including billing transactions, workspace membership updates, provider credentials, and model configurations—without fragmenting business logic or bypassing workspace isolation across disparate routes.

## Decision

1. MUST_NOT: Client-side component rendering logic MUST_NOT invoke @opencode-ai/console-core database transactions directly outside server-side execution boundaries.

## Policy Block

- MUST_NOT Client-side component rendering logic MUST_NOT invoke @opencode-ai/console-core database transactions directly outside server-side execution boundaries.

In scope:
- Server-side data loaders and query functions defined in application routes
- Workspace management, billing, member administration, and resource configuration workflows
- Server actions and mutation handlers modifying workspace domain state

Out of scope:
- Purely client-side UI rendering utilities, visual components, and style definitions
- Static assets and client-only browser state handlers that do not interact with domain data

Exceptions:
- EXC-20-001: A route component requires ephemeral client-only formatting without accessing persistent domain records

## Rationale

- Centralizing domain operations within @opencode-ai/console-core provides a single source of truth for business logic, schema interactions, and security checks across all workspace route handlers.
- Importing domain capabilities via discrete subpaths maintains modular boundaries and prevents bloated monolithic bundles while keeping domain logic decoupled from UI rendering.
- Pairing @opencode-ai/console-core domain services with actor context wrappers guarantees consistent multi-tenant workspace isolation across all server data operations.

## Consequences

Positive:
- Ensures consistent business logic and validation across all workspace management routes.
- Decouples presentation layer route components from database schemas and query building.
- Enforces multi-tenant data access control by channeling persistence operations through centralized domain services.

Negative:
- Introduces an internal package dependency coupling route modules to core domain export contracts.
- Requires developers to coordinate schema and domain service modifications across package boundaries.
- Adds an indirection layer for straightforward read operations relative to inline queries.

## Alternatives

- Direct inline database queries within individual route components (rejected)
  Rejected because: Scatters query definitions and business validation across presentation files, leading to duplicated logic, inconsistent authorization checks, and fragile schema evolution
  When valid: Small standalone prototypes with no shared domain entities or multi-tenant authorization requirements
- Monolithic single-entry barrel export from the core package (rejected)
  Rejected because: Impaired tree-shaking and module boundary separation, bundling unrelated domain dependencies into routes that only require specific operations
  When valid: Small libraries with tightly unified domain logic and minimal export volume

## Risks

- Breaking changes in @opencode-ai/console-core interfaces could disrupt multiple consuming routes simultaneously
  Mitigation: Enforce strict TypeScript interfaces and comprehensive contract tests across workspace package boundaries prior to publishing updates
  Owner: Core Infrastructure Team
- Developers might inadvertently bypass actor context wrapping when invoking domain services in server queries
  Mitigation: Implement static analysis checks and automated integration tests that assert actor context presence on all domain invocations
  Owner: Application Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- When adding new workspace features, expose operations as discrete domain modules within @opencode-ai/console-core and import them explicitly in consuming route files.
- Ensure all asynchronous domain operations are wrapped inside server-side query blocks and executed within tenant actor contexts.

## Continuation Context


Verify commands:
- Discover the workspace dependency resolution artifact and run the project typecheck command to verify module export contracts.
- Discover and run the project test suite covering workspace route data loaders and domain integration points.
- Discover and execute the repository import linting script to ensure no direct database connections exist in route components.

Accept when:
- All route data queries and mutations resolve domain operations through @opencode-ai/console-core without unresolved module errors.
- Automated typecheck and test validation scripts pass across all workspace routes without domain contract violations.
- No route or presentation module establishes direct database connections outside the core module boundary.

## Enforcement

- Verified by: Continuous integration typecheck and build validation scripts.
- Verified by: Static analysis import boundary rules checking architectural layer violations.
- Verified by: Mandatory peer code review for changes affecting domain interfaces.
- Violation handling: Continuous integration blocks pull requests introducing direct database calls in route components or breaking core module exports.
- Violation handling: Violations must be remediated by refactoring data access into @opencode-ai/console-core domain services.
- Exception process: Submit an architectural deviation request detailing why the core module cannot support the operational pattern.
- Exception process: Obtain sign-off from the core architecture lead before merging temporary inline logic.