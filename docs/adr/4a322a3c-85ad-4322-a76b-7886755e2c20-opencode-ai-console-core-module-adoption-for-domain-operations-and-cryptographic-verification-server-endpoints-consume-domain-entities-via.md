# @opencode-ai/console-core Module Adoption for Domain Operations and Cryptographic Verification: Server Endpoints Consume Domain Entities Via

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Server-side HTTP route handlers and webhook endpoints require access to core domain operations and security verification utilities.
- Directly embedding domain mutation logic or raw cryptographic algorithms inside endpoint handlers leads to duplicated code, inconsistent authorization checks, and tight coupling between transport protocols and business rules.
- The internal package @opencode-ai/console-core provides dedicated subpath modules for domain entities and cryptographic verification utilities to establish a consistent operational seam across server routes.

## Problem Statement

Server route handlers risk coupling HTTP transport logic with business domain operations and cryptographic routines, leading to inconsistent security verification and duplicated domain mutation logic across endpoints.

## Decision

1. SHOULD: Server endpoints SHOULD consume domain entities via specialized submodule paths within @opencode-ai/console-core corresponding to the domain boundary being acted upon.

## Policy Block

- SHOULD Server endpoints SHOULD consume domain entities via specialized submodule paths within @opencode-ai/console-core corresponding to the domain boundary being acted upon.

In scope:
- Server-side route handlers, action handlers, and webhook receivers performing domain mutations or cryptographic verifications.

Out of scope:
- Client-side user interface components, presentation utilities, and static client asset generation routines.

## Rationale

- Adopting @opencode-ai/console-core isolates core business logic and cryptographic routines from HTTP transport mechanisms, ensuring uniform business rule enforcement.
- Centralizing cryptographic validation in @opencode-ai/console-core/util/crypto.js eliminates divergence in header and token verification across distinct route endpoints.
- Consistently delegating data modifications to domain modules reduces coupling between transport framework interfaces and underlying persistence entities.

## Consequences

Positive:
- Establishes a single source of truth for domain logic mutations across server route endpoints.
- Standardizes security and cryptographic verification procedures across HTTP routes and external webhooks.
- Decouples server routing definitions from domain execution and persistence details.

Negative:
- Creates a structural dependency across route handlers on internal package exports and signature contracts.
- Requires updates to internal submodule contracts when adding or altering domain operations used by route handlers.

## Alternatives

- Inline domain mutations and cryptographic verification directly inside each route handler (rejected)
  Rejected because: Inlining domain logic and cryptographic checks duplicates code across endpoints, risks divergent security implementations, and tightly couples HTTP routes with persistence models.
  When valid: Single-file standalone scripts with no shared domain context or security requirements.
- Route all operations through external RPC service endpoints instead of an internal shared library (rejected)
  Rejected because: Adds network latency and operational overhead for co-located server-side route executions that execute within the same application boundary.
  When valid: Independent microservices partitioned across separate infrastructure domains.

## Risks

- Breaking changes in @opencode-ai/console-core module exports can impact multiple route handlers simultaneously.
  Mitigation: Enforce strict interface contracts and comprehensive test validation in CI for core package exports.
  Owner: engineering team
- Accidental bypass of cryptographic utilities in newly created route endpoints.
  Mitigation: Implement automated linting rules and route review checklists requiring @opencode-ai/console-core/util/crypto.js for protected endpoints.
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
- Import domain actions and cryptographic helpers from their specific submodule specifiers within @opencode-ai/console-core rather than monolithic root imports.
- Ensure all incoming request data undergoes input validation before invoking functions exported by @opencode-ai/console-core.

## Continuation Context


Verify commands:
- Discover and execute the project automated test suite to confirm all route handlers interacting with the core module pass behavioral assertions.
- Discover and run the repository type-checking routine to verify type compatibility with core module subpath exports.
- Discover and run the repository linting script to ensure no inline cryptographic routines or direct persistence access bypass the core library.

Accept when:
- All server route handlers and webhooks import domain operations and cryptographic utilities directly from @opencode-ai/console-core.
- Automated test suites and type-checking routines pass without type or signature mismatches.
- No route handler contains duplicate cryptographic verification algorithms or direct unvalidated persistence mutations.

## Enforcement

- Verified by: Automated continuous integration pipeline executing type checks and unit test suites.
- Verified by: Peer code reviews on all pull requests introducing or modifying server route handlers.
- Violation handling: Pull requests containing inline domain mutations or unvetted cryptographic algorithms will be rejected during code review.
- Violation handling: Continuous integration failures on type checks or tests will block merging.
- Exception process: Exceptions require architectural review and explicit sign-off from the lead engineering team, documented with justification.