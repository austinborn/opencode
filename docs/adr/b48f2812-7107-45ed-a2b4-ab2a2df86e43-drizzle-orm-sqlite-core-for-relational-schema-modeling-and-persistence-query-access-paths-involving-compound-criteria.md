# Drizzle ORM SQLite Core for Relational Schema Modeling and Persistence: Query Access Paths Involving Compound Criteria

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The codebase maintains multiple domain entities, desktop draft stores, and migration workflows that require deterministic relational storage and strict schema validation over SQLite.
- Static type safety between persistence layers and domain entities is necessary to prevent runtime mismatches, serialization drift, and silent query failures.
- Fourteen distinct modules across core domain models, desktop applications, and database adapter packages standardize on Drizzle ORM SQLite table definitions, typed columns, and foreign key cascades.

## Problem Statement

Managing relational SQLite persistence across multiple packages using raw SQL strings or untyped schema declarations introduces risks of type drift, invalid foreign key relations, and difficult migration tracking. The architecture requires a unified, compile-time type-safe mechanism to declare SQLite schemas, relational indexes, foreign key behaviors, and custom domain type mappings without introducing heavy runtime overhead or sacrificing query expressiveness.

## Decision

1. SHOULD: Query access paths involving compound criteria, ordering timestamps, or uniqueness boundaries SHOULD be declared using table-level index and uniqueIndex builders adjacent to the table schema definition.

## Policy Block

- SHOULD Query access paths involving compound criteria, ordering timestamps, or uniqueness boundaries SHOULD be declared using table-level index and uniqueIndex builders adjacent to the table schema definition.

In scope:
- Relational data schema definitions and persistence models targeting SQLite databases across workspace packages.
- Data migrations and transactional database access routines interacting with SQLite stores.

Out of scope:
- Transient in-memory data structures not backed by SQLite persistence.
- Stateless protocol definitions and external API network contracts that do not map to relational storage.

Exceptions:
- EXC-20-001: Raw SQLite operational pragmas or low-level performance profiling require execution outside standard schema abstraction.

## Rationale

- Adopting Drizzle ORM SQLite core establishes compile-time schema guarantees and type inference directly from database table definitions, eliminating duplicate data transfer object mappings.
- The declarative sqliteTable API enables centralized specification of relational constraints, including cascade deletions and compound indices, directly alongside entity definitions.
- Evidence across fourteen files shows uniform adoption of typed column mappings, JSON mode serialization, and migration structures, creating a predictable persistence architecture across packages.

## Consequences

Positive:
- End-to-end compile-time type safety ensures that schema changes immediately flag incompatible queries and mappings across consuming packages.
- Declarative table structures centralize foreign key cascades, unique constraints, and indices within single source-of-truth definitions.
- Consistent schema representation across domain packages, migrations, and local storage eliminates fragmentation in SQLite data access.

Negative:
- Direct reliance on Drizzle ORM SQLite primitives couples schema definitions to SQLite-specific column types and dialect constraints.
- Breaking changes in upstream ORM APIs require coordinated updates across all schema-defining packages.

## Alternatives

- Raw SQL schema migrations and manual TypeScript interface declarations (rejected)
  Rejected because: Lacks compile-time validation between queries and domain interfaces, creating risk of silent runtime schema drift and inconsistent constraint enforcement.
  When valid: Valid only in minimal scripts or single-file utilities with no relational complexity or shared domain types.
- Heavyweight active-record or class-based ORM solutions (rejected)
  Rejected because: Introduces significant runtime overhead, complex decorator requirements, and impedance mismatches with lightweight functional domain architectures.
  When valid: Valid when targeting enterprise applications with complex object-relational inheritance hierarchies.

## Risks

- Schema definition drift between multiple packages if lockfile dependency versions become desynchronized across workspaces.
  Mitigation: Enforce workspace dependency synchronization and verify package typechecks across all modules during integration pipelines.
  Owner: engineering team
- Unindexed query patterns degrading SQLite read performance as dataset size grows.
  Mitigation: Require explicit table-level index definitions for all frequent query access paths and session lookups during schema review.
  Owner: engineering team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Declare each persistent SQLite table using the declarative sqliteTable helper, assigning primary keys, foreign key references with onDelete rules, and custom domain type bounds.
- Attach compound indices and unique constraints via the secondary configuration argument of sqliteTable using index and uniqueIndex builders to ensure query efficiency.

## Continuation Context


Verify commands:
- echo "Discover and execute typecheck verification script from workspace configuration"
- echo "Discover and execute schema migration integration test suite"
- echo "Discover and execute database persistence test runner across all packages"

Accept when:
- The discovered typecheck script passes across all schema-defining packages with zero type diagnostic errors.
- All discovered database persistence and migration integration test suites complete with all assertions passing.
- All defined SQLite tables export valid schema definitions conforming to Drizzle ORM relational models.

## Enforcement

- Verified by: Automated continuous integration pipeline executing repository type checks and unit test suites.
- Verified by: Peer architecture and code review verifying table schemas adhere to Drizzle ORM declarations.
- Violation handling: Pull requests containing untyped SQL migrations or non-compliant persistence layers fail automated checks and cannot be merged.
- Violation handling: Code review rejections requiring refactoring into declarative Drizzle ORM table models.
- Exception process: Submit an architectural review request outlining technical constraints necessitating alternative SQLite access mechanisms.
- Exception process: Obtain explicit sign-off from the technical lead prior to introducing unmanaged SQL access.