# Drizzle ORM for Transactional Data Access via Database.use: Multi Table Queries Data Mutations Utilize

Status: proposed
Date: 2025-02-18
Deciders: Detection Pipeline (automated)

## Context

- Relational data persistence across operational scripts requires consistent connection pooling, lifecycle management, and transactional boundary enforcement.
- Direct database connections across distinct operational automation scripts introduce risks of connection leaks, uncoordinated transactions, and schema drift.
- The codebase standardizes data access by integrating Drizzle ORM through a centralized Database.use transaction runner across operational tasks.

## Problem Statement

Operational automation and maintenance scripts frequently interact directly with relational databases. Without a centralized transaction wrapper and unified schema modeling library, scripts risk leaking connections, executing unescaped SQL, bypassing transaction boundaries, and deviating from centralized schema definitions during operational changes.

## Decision

1. SHOULD: Multi-table queries and data mutations SHOULD utilize fluent query builder methods provided by Drizzle ORM rather than manual SQL strings.

## Policy Block

- SHOULD Multi-table queries and data mutations SHOULD utilize fluent query builder methods provided by Drizzle ORM rather than manual SQL strings.

In scope:
- All operational scripts, batch processing tasks, and backend services performing relational database queries or mutations.

Out of scope:
- Stateless in-memory computations and non-relational external API integrations that do not interact with the primary relational database.

## Rationale

- Evidence across ten operational automation scripts demonstrates consistent adoption of Drizzle ORM through Database.use for querying, updating, and inserting relational records.
- Encapsulating Drizzle ORM calls within Database.use ensures that database connection lifecycles, transaction rollbacks on failure, and schema typings remain centralized and uniform across all scripts.
- Utilizing a type-safe query builder prevents SQL injection vulnerabilities and catches schema mismatches during static type checking before runtime execution.

## Consequences

Positive:
- Guarantees transaction scoping and connection cleanup across all operational maintenance scripts.
- Provides compile-time type checking for SQL queries and schema models, preventing runtime schema mismatches.
- Standardizes database access syntax across diverse operational workflows.

Negative:
- Couples standalone operational scripts to the central database infrastructure and schema definitions.
- Requires operational script authors to adhere to the Database.use transaction wrapper even for simple ad-hoc lookups.

## Alternatives

- Direct unmanaged database client connections per script (rejected)
  Rejected because: Creating standalone database connections per script increases the risk of connection leaks, unhandled transaction aborts, and duplicated connection configuration.
  When valid: Only in isolated migration scripts that run prior to the availability of the core database runtime.
- Raw SQL query execution with manual client pooling (rejected)
  Rejected because: Raw SQL strings lack static schema validation and introduce potential SQL injection vulnerabilities and schema drift.
  When valid: When interfacing with database engine features entirely unsupported by the query builder.

## Risks

- Developers might bypass Database.use during quick scripting tasks and open unmanaged database connections.
  Mitigation: Enforce static analysis rules and code review policies prohibiting direct database client imports outside the core database module.
  Owner: Engineering Team
- Long-running batch scripts executed within a single transaction callback may hold database connection locks excessively.
  Mitigation: Structure batch tasks to process records in chunked, discrete transaction blocks via Database.use.
  Owner: Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Locate the core database module in the repository to import the Database.use runner and associated relational schema definitions.
- When composing database operations within the transactional callback, chain Drizzle ORM query builder methods on the provided transaction handle.

## Continuation Context


Verify commands:
- # Discover and run project static analysis and typecheck suites from the repository manifest
- # Discover and execute the database test suite to verify transaction and query behaviors

Accept when:
- All relational database interactions execute inside the Database.use transaction boundary without establishing unmanaged connections.
- All database queries and mutations compile successfully against the defined schema models without static type errors.
- Repository verification and test suites pass without database connection leaks or query syntax errors.

## Enforcement

- Verified by: Continuous integration static analysis and type verification suites.
- Verified by: Peer code review for all pull requests modifying or adding operational scripts.
- Violation handling: Pull requests containing unmanaged database connections or direct raw SQL queries outside Database.use will fail automated checks and be rejected during review.
- Exception process: Architectural exceptions require review and documented approval by the database engineering team.