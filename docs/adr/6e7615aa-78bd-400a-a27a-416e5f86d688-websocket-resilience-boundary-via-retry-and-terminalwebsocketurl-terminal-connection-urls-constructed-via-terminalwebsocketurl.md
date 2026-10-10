# WebSocket Resilience Boundary via retry and terminalWebSocketURL: Terminal Connection Urls Constructed Via Terminalwebsocketurl

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Interactive terminal interfaces require persistent bidirectional realtime communication channels for streaming input and output.
- Transient network disruptions and server-side socket terminations trigger abnormal close events that disconnect active interactive sessions.
- Uncontrolled socket closures without automated recovery mechanisms force users to manually re-establish sessions and lose terminal context.

## Problem Statement

Interactive terminal sessions rely on continuous WebSocket streaming channels that are vulnerable to transient network interruptions and abnormal disconnections. Without structured resilience boundaries that intercept socket failure codes and orchestrate automated reconnection through retry dispatch, transient network faults degrade the user experience by abruptly terminating active terminal sessions.

## Decision

1. MUST: Terminal connection URLs MUST be constructed via terminalWebSocketURL to ensure uniform parameter propagation across initial connection and retry attempts.

## Policy Block

- MUST Terminal connection URLs MUST be constructed via terminalWebSocketURL to ensure uniform parameter propagation across initial connection and retry attempts.

In scope:
- Realtime streaming transport boundaries connecting interactive terminal interfaces to backend execution environments.
- Socket event handlers processing connection termination and lifecycle state transitions.

Out of scope:
- Stateless request-response API calls governed by standard HTTP client retry policies.
- User-initiated terminal session termination and intentional disconnect actions.

## Rationale

- Intercepting abnormal socket termination codes within the connection boundary allows the client to recover transparently from temporary network interruptions.
- Delegating reconnection logic to a centralized retry mechanism prevents uncontrolled reconnection flooding and standardizes retry timing across the client.
- Constructing connection endpoints via dedicated helper functions ensures that authentication tokens, credentials, and terminal identifiers remain consistent across reconnection attempts.

## Consequences

Positive:
- Improves session continuity by automatically recovering from transient socket disconnections without requiring user intervention.
- Isolates transport resilience logic from visual rendering concerns within interactive components.
- Standardizes error reporting and diagnostic logging when abnormal disconnections occur.

Negative:
- Introduces additional state management complexity to track connection attempts, backoff intervals, and session cursors.
- Risks repeated reconnection attempts during unrecoverable server outages if retry limits or backoff policies are not strictly bounded.

## Alternatives

- Manual user-initiated reconnection on socket closure (rejected)
  Rejected because: Forces the user to manually trigger session restoration on every transient network drop, leading to disrupted workflows.
  When valid: Valid when socket termination is intentionally initiated by the user or when background auto-reconnection is explicitly disabled by user preference.
- Unconditional automatic socket recreation without abnormal close code discrimination (rejected)
  Rejected because: Causes reconnection attempts even after intentional session closures or permanent authentication rejections.
  When valid: Valid only in simplified mock environments where all socket disconnections represent recoverable network failures.

## Risks

- Infinite retry loops during permanent backend service outages exhausting client resources.
  Mitigation: Enforce bounded retry counts and exponential backoff parameters within the retry dispatcher.
  Owner: engineering team
- Reconnection with stale authentication tickets or invalid session cursor offsets leading to unauthorized or corrupted streams.
  Mitigation: Ensure terminal connection URL builders re-evaluate authentication state and seek cursors on every retry invocation.
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
- Ensure that socket close event listeners inspect the status code to differentiate normal closures from abnormal disconnects before instantiating the error passed to the retry dispatcher.
- Synchronize terminal dimensions and cursor seek positions upon successful reconnection to restore full interactive terminal parity.

## Continuation Context


Verify commands:
- Discover the project test runner from repository configuration and run the test suite covering interactive terminal resilience and socket event handling.
- Discover the static analysis and linting scripts from the workspace configuration and execute them against the interactive boundary components.
- Discover the project type checking script and execute it to verify boundary parameter contracts and type safety.

Accept when:
- All unit tests covering WebSocket closure handling and retry dispatch pass without regression.
- Clean socket disconnects terminate without triggering retry execution.
- Static verification and type validation scripts pass with zero errors across the boundary implementation.

## Enforcement

- Verified by: Automated continuous integration pipeline executing unit and integration test suites on pull requests.
- Verified by: Peer code review verifying adherence to socket lifecycle and resilience retry patterns.
- Violation handling: Pull requests bypassing error retry boundaries or introducing unmanaged socket close handlers are blocked from merge.
- Violation handling: Violations discovered in active development must be refactored to route abnormal terminations through the retry mechanism.
- Exception process: Architectural review submission justifying why specific interactive transport boundaries require custom lifecycle management.
- Exception process: Formal sign-off by team leads with documented fallback and failure containment strategies.