# @tanstack/solid-query Asynchronous Mutation and Interaction Pattern: Side Effects Resulting Mutations Including Cache

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Frontend user interface components require consistent state management for asynchronous user interactions, background updates, and remote service calls.
- Decoupled asynchronous operations without a standardized mutation pipeline lead to fragmented loading indicators, unhandled errors, and out-of-sync client caches.
- The codebase establishes a unified interaction pattern across session views, dialogs, and controllers by adopting @tanstack/solid-query mutation hooks.

## Problem Statement

Asynchronous user actions such as submitting prompts, updating projects, and configuring providers require coordinated loading, error, and settlement states across the user interface. Without a standardized interaction pattern, individual components implement inconsistent handling, increasing the likelihood of race conditions, duplicate requests, and unhandled promise failures.

## Decision

1. SHOULD: Side effects resulting from mutations, including cache invalidations and UI notifications, SHOULD be declared directly within mutation lifecycle callbacks.

## Policy Block

- SHOULD Side effects resulting from mutations, including cache invalidations and UI notifications, SHOULD be declared directly within mutation lifecycle callbacks.

In scope:
- Frontend interactive components, dialogs, composer docks, and session views executing asynchronous mutations or service requests.

Out of scope:
- Purely synchronous client-side UI transitions and styling states that do not involve remote service calls or asynchronous persistence.

## Rationale

- Adopting @tanstack/solid-query for asynchronous interactions provides out-of-the-box tracking of pending, error, and success states across user-facing actions.
- Centralizing asynchronous mutations through standard primitives enables predictable cache updates and error notification propagation across components.
- The pattern aligns reactive state updates with asynchronous lifecycles across diverse user interface components.

## Consequences

Positive:
- Standardized interaction lifecycle management across dialogs, controllers, and session views.
- Consistent error handling and automated loading state tracking across user-triggered actions.
- Simplified coordination between remote service calls and local client store caches.

Negative:
- Increases dependency on external query management runtime and its reactive subscription mechanics.
- Requires developers to structure simple async actions around mutation primitives, introducing minor boilerplate for isolated one-off triggers.

## Alternatives

- Ad-hoc asynchronous handler functions with local reactive loading state signals (rejected)
  Rejected because: Results in inconsistent error handling, boilerplate duplication across components, and potential race conditions during concurrent user actions.
  When valid: When building isolated prototypes that require no server synchronization or shared status reporting.
- Global event bus or custom middleware for asynchronous dispatch (rejected)
  Rejected because: Separates mutation lifecycle state from invoking presentation components and creates unnecessary indirection without out-of-the-box cache coordination.
  When valid: When coordinating decoupled cross-window messaging across non-browser process boundaries.

## Risks

- Over-reliance on mutation callbacks for complex multi-step workflows could lead to nested callback structures.
  Mitigation: Encapsulate complex multi-step mutation sequences within custom domain controller hooks that expose clean dispatch interfaces.
  Owner: Frontend Engineering
- Desynchronization between mutation cache updates and fine-grained reactive client store states.
  Mitigation: Establish explicit synchronization patterns in mutation settlement callbacks to ensure client caches reflect settled server state.
  Owner: Frontend Engineering

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Isolate reusable mutation configurations into domain-specific hooks or controllers when mutations are shared across multiple UI components.
- Ensure mutation lifecycle callbacks handle settlement cleanup to avoid leaving UI elements in disabled or pending states during network failures.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and linting scripts from the root repository manifest to verify query and mutation import consistency.
- Discover and run the workspace test runner to validate interaction lifecycle handling across modified UI components.
- Discover and execute type-checking suites across frontend packages to ensure type safety for mutation parameters and return values.

Accept when:
- All frontend interaction mutations compile without type errors against the resolved @tanstack/solid-query package version.
- Asynchronous interaction tests pass without unhandled promise rejections or race condition warnings.
- Static verification scripts pass across all frontend packages without rule violations.

## Enforcement

- Verified by: Automated static analysis checks and workspace test suites executed during continuous integration.
- Verified by: Peer review of pull requests modifying frontend interactive components and asynchronous data flows.
- Violation handling: Pull requests introducing raw unmanaged async service calls in UI components will be blocked by continuous integration linting or review gates.
- Violation handling: Violations must be refactored to utilize @tanstack/solid-query mutation primitives before merging.
- Exception process: Architectural exceptions require written justification submitted via pull request review and approval from frontend engineering leads.