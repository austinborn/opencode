# Internal Module Adoption: @opencode-ai/console-core/drizzle for Transactional Persistence: Relational Queries Within Database Use Callbacks

Status: proposed
Date: 2025-05-19
Deciders: Detection Pipeline (automated)

## Context

- Multiple route files and server handlers within the application execute read and write operations against relational datastores.
- The shared internal module @opencode-ai/console-core/drizzle provides a Database.use wrapper to encapsulate transaction management and query execution.
- Table definitions are centralized in dedicated schema modules to enforce relational typing across queries.

## Problem Statement

Direct and fragmented database interactions in route handlers risk connection leaks, inconsistent transaction boundaries, and unaligned data schemas across server endpoints. Without a standardized persistence module and transaction abstraction, endpoints independently manage client lifecycles and diverge in query patterns.

## Decision

1. MUST: Relational queries within Database.use callbacks MUST construct operations using the typed schema definitions exported by core schema modules rather than untyped raw string queries.

## Policy Block

- MUST Relational queries within Database.use callbacks MUST construct operations using the typed schema definitions exported by core schema modules rather than untyped raw string queries.

In scope:
- Server-side route loaders, actions, and API endpoints executing database reads or mutations.
- Internal modules within the application package interacting with relational database entities.

Out of scope:
- Client-only presentation components executing entirely in the browser runtime without direct database access.
- Non-relational external HTTP or remote service integrations.

## Rationale

- Routing all relational queries through Database.use guarantees that connection acquisition, transaction commits, and rollbacks are centrally handled.
- Coupling query construction with typed schemas exported from core modules prevents runtime column mismatches and enforces compile-time type safety.
- Centralizing database driver logic within the core workspace module avoids distributing low-level connection pooling configurations across individual route files.

## Consequences

Positive:
- Consistent transaction lifecycle management prevents connection leaks and uncommitted transactional states.
- Type-safe query construction eliminates manual SQL string formatting errors and schema drift.
- Centralized database abstraction simplifies auditing and monitoring of database operations across application endpoints.

Negative:
- Route handlers become strictly coupled to the internal core database wrapper and transaction interface.
- Complex multi-step transactions require all logic to execute within the synchronous or asynchronous scope of the Database.use callback.

## Alternatives

- Direct database driver instantiation per route handler (rejected)
  Rejected because: Creating independent driver connections in individual routes causes connection pool exhaustion and fragments transaction boundaries.
  When valid: Standalone diagnostic scripts operating outside the main application runtime.
- Raw unmanaged SQL query strings (rejected)
  Rejected because: Untyped queries lack compile-time schema validation and increase vulnerability to injection or schema drift.
  When valid: Database migration scripts requiring specific procedural DDL operations not supported by the query builder.

## Risks

- Uncaught exceptions within Database.use callbacks might leave transactions in indeterminate states if error handling is incomplete.
  Mitigation: Ensure Database.use incorporates automated rollback handling on thrown exceptions before propagating errors.
  Owner: Core Infrastructure Team
- Long-running asynchronous computations within Database.use callbacks can hold database connections open unnecessarily.
  Mitigation: Execute pre-processing and post-processing outside the Database.use transaction callback, limiting transaction scope strictly to database queries.
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
- Construct all read and write queries using transaction instance methods passed to the Database.use callback.
- Import shared relational table models directly from core schema modules rather than recreating table structures locally.

## Continuation Context


Verify commands:
- Discover the project test runner from the root manifest and run test suites covering database route handlers.
- Discover and run the project type checker to verify that query schemas and Database.use callback parameters pass static type inspection.
- Discover and run the project linting suite to ensure no unmanaged database imports exist outside core persistence boundaries.

Accept when:
- All server-side database operations execute within Database.use callback scopes.
- Static type checking completes with zero diagnostic errors across database query operations.
- Automated tests covering route data retrieval and mutations pass successfully.

## Enforcement

- Verified by: Continuous integration type checking and static analysis routines.
- Verified by: Peer code review auditing database access patterns in route modules.
- Violation handling: Pull requests containing direct database client calls outside Database.use are blocked by static checks.
- Violation handling: Violations identified during code review must be refactored to use the centralized database transaction module.
- Exception process: Exceptions require documented architecture review and approval by the platform engineering lead.
- Exception process: Approved exceptions must document the technical constraints preventing the use of Database.use.