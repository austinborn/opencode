# Drizzle ORM SQLite Core Schema Modeling: Table Definitions Not Declare Primitive Untyped

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Persistent domain entities require structured relational schema definitions that enforce data integrity and relational constraints.
- Manual synchronization between database column definitions and application domain types frequently introduces runtime type discrepancies.
- The core data storage modules define database tables programmatically using functional column builders and domain type bindings.

## Problem Statement

Persisting structured domain models in relational storage risks type divergence between database column types and application entity definitions, leading to runtime data corruption when schema changes are not validated at compile time.

## Decision

1. MUST_NOT: Table definitions MUST_NOT declare primitive untyped columns when corresponding domain-specific entity types or value interfaces exist.

## Policy Block

- MUST_NOT Table definitions MUST_NOT declare primitive untyped columns when corresponding domain-specific entity types or value interfaces exist.

In scope:
- All relational database table definitions and schema declarations within the core persistent data layer.
- Domain entities requiring persistent storage with relational constraints and typed attributes.

Out of scope:
- Ephemeral in-memory caches and transient data structures not backed by relational persistence.
- External third-party API integration payloads that do not map to persisted database entities.

## Rationale

- Programmatic schema definitions via drizzle-orm/sqlite-core allow column structures to inherit domain types directly using the .$type modifier.
- Defining foreign keys and column options declaratively in TypeScript ensures constraint enforcement and refactoring safety across domain boundaries.
- Standardizing column declarations across multiple domains creates a consistent data modeling pattern throughout the storage layer.

## Consequences

Positive:
- Single source of truth for database table definitions and domain-level static types.
- Compile-time validation of relational foreign key references and column property constraints.
- Elimination of runtime type drift between persisted storage structures and application domain models.

Negative:
- Schema definitions are coupled to the specific schema definition library syntax and column builder APIs.
- Complex column transforms and JSON mode mappings require disciplined domain validation before persistence to prevent schema desynchronization.

## Alternatives

- Raw SQL schema definition files coupled with separate manual TypeScript interfaces (rejected)
  Rejected because: Decoupling schema definitions from language types creates synchronization drift and requires dual maintenance of database definitions and interface models.
  When valid: When managing legacy databases with external schema management tools that do not support code-first schema definitions.
- Decorator-based class object-relational mapping frameworks (rejected)
  Rejected because: Class-based decorators introduce runtime reflection overhead and complex inheritance hierarchies compared to direct functional column builders.
  When valid: When an existing system architecture relies heavily on active record patterns and class lifecycle event hooks.

## Risks

- Breaking changes in upstream schema builder APIs across library version upgrades.
  Mitigation: Enforce strict lockfile inspection and run comprehensive automated type check and test suites during dependency updates.
  Owner: Database engineering team
- Runtime data mismatch in JSON-mode columns if unvalidated objects are serialized into storage.
  Mitigation: Validate payload structures through runtime domain schemas prior to persisting values into JSON-mode text columns.
  Owner: Domain model maintainers

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Reusable column definitions such as timestamp sets should be encapsulated in shared schema helper objects and spread across table configurations.
- Foreign key relationships between tables should employ lazy reference callbacks to avoid circular module initialization issues during schema load.

## Continuation Context


Verify commands:
- Discover the repository package manifest and execute the designated type-checking script to confirm schema definition type compatibility.
- Discover the project test configuration and execute the database migration and integration verification test suites.

Accept when:
- The static type checking process confirms zero type errors across all database schema declarations and domain type bindings.
- All database schema migration and integration test suites pass without constraint or syntax failures.

## Enforcement

- Verified by: Automated static analysis and type checking during continuous integration pipelines.
- Verified by: Peer review of storage layer schema definitions and migration scripts.
- Violation handling: Continuous integration builds fail upon detecting raw untyped schemas or missing domain type bindings.
- Violation handling: Pull requests violating schema conventions are blocked until brought into compliance.
- Exception process: Submit an architectural request detailing why functional schema builders cannot satisfy the specific persistence requirements.
- Exception process: Obtain approval from the database architecture maintainers prior to merging schema modifications.