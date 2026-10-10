# drizzle-orm/planetscale-serverless Database Driver Adoption: Services Communicating Through Drizzle Orm Planetscale

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Backend persistence logic across core service packages requires a lightweight relational data access layer compatible with stateless serverless execution environments.
- Traditional persistent TCP connection pooling introduces resource exhaustion and latency overhead in auto-scaling, distributed compute architectures.
- Shared persistence modules across stats and console packages require uniform schema definitions, type-safe query formulation, and structured database migrations.

## Problem Statement

Serverless and distributed service runtimes require an efficient relational database interface that operates over stateless HTTP connections without exhausting connection pools, while preserving type safety, structured schema definitions, and migration capabilities across core service domains.

## Decision

1. MUST_NOT: Services communicating through drizzle-orm/planetscale-serverless MUST NOT rely on persistent stateful TCP connection pools or transactions unsupported by the serverless HTTP transport layer.

## Policy Block

- MUST_NOT Services communicating through drizzle-orm/planetscale-serverless MUST NOT rely on persistent stateful TCP connection pools or transactions unsupported by the serverless HTTP transport layer.

In scope:
- Backend core modules and data processing routines establishing relational database connections to PlanetScale datastores.
- Schema definitions, database migrations, and structured persistence operations across core services.

Out of scope:
- In-memory data caches or transient data stores that do not require relational persistence.
- External third-party API clients or non-relational integration endpoints.

## Rationale

- Adopting drizzle-orm/planetscale-serverless enables serverless execution contexts to perform relational operations over HTTP connections via @planetscale/database without maintaining dedicated TCP connection pools.
- Drizzle ORM provides static TypeScript type inference directly from schema definitions without requiring runtime code generation or heavyweight query engine binaries.
- Standardizing database driver access across core modules ensures consistent query interfaces, unified migration handling, and reduced maintenance overhead across packages.

## Consequences

Positive:
- Eliminates connection exhaustion risks in horizontally scaled and serverless worker environments by routing queries via HTTP transport.
- Provides compile-time type safety for SQL queries, schema definitions, and batch operations with minimal runtime overhead.
- Unifies database access and migration patterns across core backend services into a single consistent driver interface.

Negative:
- Couples the persistence layer to PlanetScale HTTP driver semantics and connection interfaces.
- Imposes constraints on specific relational database capabilities that require stateful TCP socket connections or complex interactive transactions.
- Requires strict adherence to lock version resolution to prevent subtle behavioral changes across driver releases.

## Alternatives

- Direct raw MySQL TCP connection driver (rejected)
  Rejected because: Stateful TCP connection pooling introduces connection exhaustion and latency penalties in serverless execution environments.
  When valid: Dedicated persistent server deployments with long-lived processes and stable connection counts.
- Heavyweight object-relational mapping engines requiring query engine binaries (rejected)
  Rejected because: Substantial memory footprints and cold-start latency penalties degrade performance in ephemeral compute runtimes.
  When valid: Monolithic architectures requiring complex enterprise relation graphs and integrated caching abstractions.

## Risks

- Driver API drift across versions altering connection configuration or migration execution behaviors.
  Mitigation: Strictly follow lock resolution procedures and execute project test suites before updating driver dependencies.
  Owner: engineering team
- Latency or payload overhead on large batch operations executed over HTTP transport.
  Mitigation: Chunk large batch insertions into bounded payloads and monitor database execution latency.
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
- Ensure database configuration values are resolved through project configuration providers prior to instantiating the database client.
- Structure schema definitions with modular column definitions to support reusable migrations and query typing across core services.

## Continuation Context


Verify commands:
- Discover and run the repository test suite to verify database client instantiation and query execution against configured environments.
- Execute the repository static analysis and type checking workflow to validate schema types and query parameters.
- Run the project schema validation and migration dry-run script to confirm schema alignment with the target datastore.

Accept when:
- All database client initializations successfully instantiate without configuration errors during test suite execution.
- Static type analysis passes with zero type errors across all schema and query definitions.
- Database migration and batch operation verifications execute successfully in the test environment.

## Enforcement

- Verified by: Continuous integration pipelines executing static type analysis and test suites.
- Verified by: Peer code review evaluating database client instantiation and schema definitions.
- Violation handling: Pull requests introducing unapproved database drivers or bypassing the standard driver configuration must be blocked until remediated.
- Exception process: Submit an architectural review request to the engineering team detailing the specific requirements that necessitate an alternative data access approach.