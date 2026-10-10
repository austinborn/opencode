# Adoption of @opencode-ai/client/promise for Client-Side Asynchronous Operations: Engineers Verify Ground Dependencies Against Project

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Client components and context synchronization engines require consistent coordination of asynchronous operations when interacting with backend services.
- Uncontrolled proliferation of ad-hoc promise patterns across UI components and synchronization layers risks unhandled rejections, race conditions, and divergent error recovery.
- Static analysis identifies widespread adoption of the dedicated internal @opencode-ai/client/promise module across seventeen application modules encompassing UI, context, and session controllers.

## Problem Statement

Decentralized and inconsistent asynchronous call patterns across application views, background synchronizers, and session managers lead to fragmented error handling, difficult cancellation flows, and brittle UI state binding. A standardized client promise module is required to enforce predictable asynchronous lifecycles across all client application components.

## Decision

1. MUST: Engineers MUST verify and ground all dependencies against the project lock artifact to resolve the exact version before implementing or modifying calls to @opencode-ai/client/promise.

## Policy Block

- MUST Engineers MUST verify and ground all dependencies against the project lock artifact to resolve the exact version before implementing or modifying calls to @opencode-ai/client/promise.

In scope:
- Client-side application context providers, synchronization controllers, session managers, and UI components performing asynchronous server communication.
- Workspace packages that interact with server endpoints via client adapters.

Out of scope:
- Synchronous in-memory utility functions that do not perform network, server, or deferred asynchronous operations.
- Server-side daemon processes and standalone CLI tools operating outside the client application bundle.

Exceptions:
- EXC-20-001: Low-level transport adapters require direct raw socket or event stream initialization prior to client promise layer bootstrap.

## Rationale

- Standardizing on @opencode-ai/client/promise establishes a unified contract for asynchronous execution, error interception, and resolution across UI and sync layers.
- Broad adoption across seventeen critical application files demonstrates that centralized promise handling effectively isolates transport-specific asynchronous concerns from UI presentation logic.
- Centralized promise utilities simplify debugging, request tracing, and reactive state reconciliation throughout the application lifecycle.

## Consequences

Positive:
- Uniform asynchronous interface across all application context stores, session managers, and interactive components.
- Consistent error propagation, retry semantics, and status tracking for all client-initiated asynchronous tasks.
- Decoupling of UI rendering logic from underlying server transport mechanics and raw promise implementations.

Negative:
- Introduces a mandatory internal module dependency across client modules that all new asynchronous features must adhere to.
- Requires developers to learn and comply with internal promise handling conventions rather than using unconstrained standard language promises.

## Alternatives

- Direct use of standard unconstrained native promises across all application components (rejected)
  Rejected because: Lacks centralized error recovery, consistent cancellation handling, and uniform lifecycle management across distributed client modules.
  When valid: Small, standalone utility scripts that do not interface with application state or server synchronization.
- Component-level bespoke async wrappers implemented independently within each feature directory (rejected)
  Rejected because: Leads to fragmented error semantics, duplicated retry and debounce logic, and maintenance overhead across features.
  When valid: Prototyping experimental isolated components prior to architecture integration.

## Risks

- Breaking changes in the internal @opencode-ai/client/promise module could cascade across consuming UI and context layers.
  Mitigation: Enforce strict semantic contracts and comprehensive unit and integration test coverage across client promise interfaces.
  Owner: Frontend Architecture Team
- Developers bypassing the module in new components, reintroducing inconsistent async behaviors.
  Mitigation: Automate linting rules and static analysis checks to flag unapproved asynchronous patterns in client modules.
  Owner: Frontend Architecture Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Import asynchronous helper primitives exclusively from @opencode-ai/client/promise when building context synchronization hooks or session actions.
- Ensure all asynchronous handlers integrate cleanly with reactive component cleanup functions to prevent state updates on unmounted views.

## Continuation Context


Verify commands:
- Discover the workspace verification script in the project manifest and execute the primary type validation across all application modules.
- Discover and execute the project linting and static analysis toolchain to verify that asynchronous client calls adhere to the @opencode-ai/client/promise import standard.
- Discover and execute the test runner suite to validate asynchronous promise handling and error propagation.

Accept when:
- All client context and UI components compile without type errors using @opencode-ai/client/promise for asynchronous operations.
- Static analysis passes with zero disallowed raw asynchronous transport imports in application modules.
- All unit and integration tests for session synchronization and client communication pass successfully.

## Enforcement

- Verified by: Automated continuous integration checks executing static analysis and type verification.
- Verified by: Mandatory peer code reviews validating that client asynchronous interactions route through @opencode-ai/client/promise.
- Violation handling: Automated pull request checks will fail if unapproved asynchronous client invocation patterns are detected.
- Violation handling: Code review rejection requiring migration of ad-hoc asynchronous calls to the standard module.
- Exception process: Submit an architectural deviation request detailing the technical necessity of bypassing the module.
- Exception process: Approval required from lead frontend architects before merging exception code.