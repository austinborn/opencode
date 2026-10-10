# Solid Router Server Query RPC Pattern for Primary Datastore Access: Queries That Read Tenant Scoped Workspace

Status: proposed
Date: 2025-05-14
Deciders: Detection Pipeline (automated)

## Context

- Route components and view sections across the web console require access to primary datastores, database transactions, and backend domain entities.
- Exposing raw database clients or unrestricted service calls to the client runtime creates security vulnerabilities and increases browser bundle sizes.
- The @solidjs/router library provides a query primitive combined with the server execution directive to construct type-safe, server-executed data loaders.
- Static analysis across thirteen route and component files shows consistent adoption of the query wrapper with unique string query keys for datastore access.

## Problem Statement

Web route components require access to primary datastores and authenticated domain models without bundling database clients into browser assets or introducing ad-hoc HTTP endpoints for every view requirement. Without a unified server RPC and data loading standard, data fetching across routes risks inconsistent authentication handling, duplicated network requests, and accidental exposure of sensitive backend queries.

## Decision

1. SHOULD: Queries that read tenant-scoped or workspace-scoped datastore entities SHOULD execute inside workspace actor context wrappers to enforce authorization boundaries prior to running datastore operations.

## Policy Block

- SHOULD Queries that read tenant-scoped or workspace-scoped datastore entities SHOULD execute inside workspace actor context wrappers to enforce authorization boundaries prior to running datastore operations.

In scope:
- All frontend route modules, layout components, and client-facing feature sections that require data from primary datastores or backend domain services.
- All data fetching utility modules that expose parameterized server queries to the application routing layer.

Out of scope:
- Background worker processes, command-line interfaces, and offline data migration scripts operating entirely outside the web routing runtime.
- Internal service-to-service communication layers that do not interact with client user interfaces.

## Rationale

- Encapsulating datastore access inside @solidjs/router query declarations with the "use server" directive guarantees that database logic, credentials, and transactions execute strictly within the server environment.
- Assigning unique string query identifiers to each query call enables the router runtime to manage request deduplication, optimistic updates, and cache invalidation across client navigation.
- Standardizing on the query pattern provides a uniform interface for attaching workspace actor context before executing datastore queries.

## Consequences

Positive:
- Prevents leakage of database drivers, connection secrets, and internal schema logic into client application bundles.
- Provides automatic client-side request deduplication and cache integration through keyed query identifiers.
- Enforces consistent authorization and context wrapping prior to primary datastore query execution.

Negative:
- Requires manual maintenance and coordination of unique query key strings to avoid cache collisions across components.
- Couples route data loading semantics directly to the routing library server function conventions.
- Introduces serialization constraints as all datastore query return values must cross the server-client RPC boundary.

## Alternatives

- Expose standalone REST or GraphQL endpoints for all route datastore requirements (rejected)
  Rejected because: Creating standalone HTTP endpoints for every user interface view introduces route sprawl, boilerplate maintenance, and decoupled serialization layers compared to co-located query loaders.
  When valid: When client applications are developed independently of the web application server or require a public API surface for third parties.
- Execute direct database connections and queries inside client-side components (rejected)
  Rejected because: Direct client-side database connections expose credentials, bloat bundle size, and bypass server authentication boundaries.
  When valid: Never valid in browser-facing web application architectures.

## Risks

- Query key naming collisions leading to unintended cache sharing or stale route state across distinct components.
  Mitigation: Establish a hierarchical domain-prefixed naming convention for all query identifier strings.
  Owner: engineering team
- Accidental omission of the server execution directive leading to client compilation failures or runtime database driver errors.
  Mitigation: Configure static analysis rules that verify the presence of the server execution directive inside all query wrapper callbacks.
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
- When creating route data loaders, co-locate the query definition with the route module or in a dedicated domain query module, assigning a domain-scoped string key.
- Ensure all arguments passed to the query function and all returned data structures conform to serializable types supported by the server RPC boundary.

## Continuation Context


Verify commands:
- Discover the project test runner and execute the automated test suite targeting route data loaders and query functions.
- Discover the static analysis tool configured in the repository and run type checking and lint verification across all route modules.
- Discover and run the project build script to verify that server-side database packages are excluded from the client application bundle.

Accept when:
- All automated tests for route data loaders and query functions pass without errors.
- Static analysis confirms every query callback declares the server execution directive and a unique string query key.
- Client bundle inspection confirms zero inclusion of primary datastore drivers or server database utilities.

## Enforcement

- Verified by: Automated continuous integration pipeline running test suites, type checking, and bundle boundary verification.
- Verified by: Peer code review verifying compliance with query key naming conventions and server directive presence.
- Violation handling: Pull requests containing direct datastore calls in client components or unkeyed queries are blocked from merging.
- Violation handling: Lint errors triggered by missing server execution directives must be resolved before deployment.
- Exception process: Exceptions for static non-datastore data fetching must be submitted via an architectural review issue and approved by the core engineering team.