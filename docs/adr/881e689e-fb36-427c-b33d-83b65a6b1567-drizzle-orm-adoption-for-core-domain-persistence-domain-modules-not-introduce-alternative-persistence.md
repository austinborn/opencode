# Drizzle ORM Adoption for Core Domain Persistence: Domain Modules Not Introduce Alternative Persistence

Status: proposed
Date: 2025-05-15
Deciders: Detection Pipeline (automated)

## Context

- Core domain services require consistent, type-safe data access across multiple functional areas including sessions, permissions, and project directory mapping.
- Direct database interaction without static typing risks runtime query failures, schema divergence, and potential SQL injection vulnerabilities.
- Analysis of core domain modules reveals uniform adoption of Drizzle ORM schema tables, query builder constructs, and transactional execution handles.

## Problem Statement

Core domain services require a lightweight, type-safe persistence mechanism that guarantees compile-time schema synchronization without the overhead and complexity of traditional object-relational mapping frameworks. Without a standardized query builder, domain modules risk diverging into disparate data access patterns, introducing runtime type mismatches, and compromising SQL safety.

## Decision

1. MUST_NOT: Domain modules MUST NOT introduce alternative persistence query builders or direct database driver connections that bypass the centralized Drizzle ORM schema definitions.

## Policy Block

- MUST_NOT Domain modules MUST NOT introduce alternative persistence query builders or direct database driver connections that bypass the centralized Drizzle ORM schema definitions.

In scope:
- All relational database interactions within core domain services and state management modules.
- Schema table definitions and migrations governing domain persistence entities.

Out of scope:
- Ephemeral in-memory cache operations that do not persist to relational storage.
- External third-party API clients and network transport protocols.

Exceptions:
- EXC-20-001: A database feature is unsupported by the query builder and raw SQL template expressions cannot represent the query safely

## Rationale

- Drizzle ORM provides static typing and SQL query building while maintaining near-zero runtime overhead and predictable query generation.
- Observed evidence across nine core domain modules demonstrates successful integration of table schemas with domain events and functional error handling.
- Standardizing on Drizzle ORM avoids architectural fragmentation and ensures maintainable, inspectable query operations across all persistence boundaries.

## Consequences

Positive:
- Provides end-to-end type safety from schema table declarations directly to query result sets, reducing runtime type errors.
- Eliminates SQL injection vulnerabilities through automatic parameterization and typed sql template literals.
- Enables clean composability of queries and transactional operations across domain services without heavyweight runtime abstraction layers.

Negative:
- Couples domain service modules directly to query builder API semantics and schema definitions.
- Requires engineers to maintain explicit schema definitions and manage type alignment with database migrations.
- Complex analytical queries or non-standard SQL dialect expressions may require verbose template syntax.

## Alternatives

- Heavyweight Object-Relational Mapping framework with active record or entity lifecycle tracking (rejected)
  Rejected because: Introduces significant runtime overhead, complex entity lifecycle tracking, and impedance mismatch with domain functional effects
  When valid: Complex enterprise domain models with deep bidirectional object graph relationships requiring automated change tracking
- Raw parameterized SQL strings via low-level database driver interfaces (rejected)
  Rejected because: Lacks compile-time schema synchronization, type safety across table updates, and composability for conditional query construction
  When valid: Simple microservices with minimal relational queries or specialized performance-critical bulk operations

## Risks

- Schema drift between database table definitions and physical database schema if migrations are not synchronized
  Mitigation: Enforce automated migration verification and schema type generation in continuous integration pipelines
  Owner: Core Engineering Team
- Unbounded query complexity or performance degradation from sub-optimal query builder compositions
  Mitigation: Require query review, performance profiling for hot paths, and explicit index validation for schema tables
  Owner: Persistence Infrastructure Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Define all relational schemas as modular table exports, co-locating column types, constraints, and relationships within dedicated schema modules.
- Structure domain service functions to accept an optional transaction context, delegating query execution to the active transaction when present to support atomic multi-table operations.

## Continuation Context


Verify commands:
- Discover the workspace dependency manifest and execute the designated type-checking script across all core packages.
- Locate and execute the automated test suite targeting domain persistence modules to verify relational query execution and transaction handling.

Accept when:
- All domain persistence queries compile without type errors against the resolved schema table definitions.
- Automated database integration and unit tests for core domain services execute with zero failures.

## Enforcement

- Verified by: Automated continuous integration workflows executing type verification and unit test suites.
- Verified by: Peer code reviews validating compliance with Drizzle ORM query builder patterns and schema usage.
- Violation handling: Pull requests introducing raw database driver queries, unescaped string concatenations, or unapproved persistence libraries will be blocked during code review and automated checks.
- Violation handling: Non-compliant code must be refactored to utilize Drizzle ORM table schemas and query builder methods before merging.
- Exception process: Exceptions for non-relational storage or specialized bulk database operations require documented architectural justification and written sign-off from the technical lead.