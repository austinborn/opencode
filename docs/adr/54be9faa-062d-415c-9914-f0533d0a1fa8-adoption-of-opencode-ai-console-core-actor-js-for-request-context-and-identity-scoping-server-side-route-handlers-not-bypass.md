# Adoption of @opencode-ai/console-core/actor.js for Request Context and Identity Scoping: Server Side Route Handlers Not Bypass

Status: proposed
Date: 2025-02-18
Deciders: Detection Pipeline (automated)

## Context

- Server-side route handlers and data queries must interact with multi-tenant database tables requiring consistent account identification.
- Manual parameter passing of caller identity creates security vulnerabilities and maintenance overhead in asynchronous server operations.
- The application codebase integrates internal shared modules to manage actor identity and execution context across server query boundaries.

## Problem Statement

Decentralized extraction and manual passing of tenant identifiers across server query handlers introduces risks of context mismatch, privilege escalation, and inconsistent tenancy filtering across database access operations.

## Decision

1. MUST_NOT: Server-side route handlers MUST NOT bypass actor context resolution when querying multi-tenant database tables.

## Policy Block

- MUST_NOT Server-side route handlers MUST NOT bypass actor context resolution when querying multi-tenant database tables.

In scope:
- All server queries, data mutation handlers, and route loaders accessing tenant-scoped data stores.
- Internal library modules performing authenticated identity or role resolution.

Out of scope:
- Public unauthenticated endpoints and static asset serving routes.
- Stateless algorithmic utilities that operate independently of caller identity.

Exceptions:
- EXC-001: Handling unauthenticated public webhook callbacks or initial session establishment prior to actor resolution

## Rationale

- Consolidating identity state management into @opencode-ai/console-core/actor.js guarantees that caller context is resolved once and maintained across asynchronous server operations.
- Binding tenant queries to Actor.account() ensures data access operations are constrained to the authenticated organization.
- Using contextual wrappers such as withActor ensures ambient actor availability across nested database transactions without parameter drilling.

## Consequences

Positive:
- Eliminates tenant identifier spoofing by sourcing account ownership directly from validated actor state.
- Standardizes identity propagation across server queries, route handlers, and multi-tenant database operations.
- Centralizes role checks and tenancy filtering logic across the server application layer.

Negative:
- Tight coupling between server-side query procedures and the @opencode-ai/console-core/actor.js runtime context.
- Requires server query executions to be strictly wrapped within contextual actor boundaries before performing data access.

## Alternatives

- Explicit parameter passing of tenant account identifiers across every server function and query (rejected)
  Rejected because: Increases human error by allowing callers to forge or mismatch tenant identifiers in multi-tenant database operations
  When valid: Simple single-tenant scripts or stateless utility functions that do not operate on behalf of an authenticated actor
- Ad-hoc extraction of account cookies and session tokens directly within individual route components (rejected)
  Rejected because: Duplicates authentication parsing logic and creates inconsistent authorization boundaries across route handlers
  When valid: Public entrypoints and unauthenticated webhook callbacks that do not possess actor context

## Risks

- Invoking database queries outside of an established actor context leading to unresolved identity runtime errors.
  Mitigation: Implement automated lint rules and integration tests to ensure all server database queries operate within active actor context.
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
- Wrap server query functions and data mutations in contextual actor boundaries before executing transactional database queries.
- Ensure database queries join on and filter by verified actor account properties derived from the authenticated context.

## Continuation Context


Verify commands:
- Discover the project verification script from the root configuration and execute static analysis across server route modules.
- Inspect the project automation manifests to locate and execute test suites validating actor context propagation.
- Search the repository task runners to run typecheck and lint procedures across context and data-access packages.

Accept when:
- All server-side queries accessing tenant-scoped data invoke withActor and resolve identity via @opencode-ai/console-core/actor.js without reading unvalidated client parameters.
- Static analysis and project test suites confirm no direct tenant database queries bypass actor context resolution.

## Enforcement

- Verified by: Automated pull request checks verifying actor context wrapping around multi-tenant database operations.
- Verified by: Peer code review ensuring direct database queries do not bypass actor account validation.
- Violation handling: Pull requests containing unwrapped server queries or manual tenant identifier lookups will be blocked from merging.
- Violation handling: Identified violations must be refactored to utilize actor context wrappers before deployment.
- Exception process: Exceptions require explicit security architecture review and written documentation of tenant isolation guarantees.
- Exception process: Temporary deviations must be tracked in an architecture register with planned remediation dates.