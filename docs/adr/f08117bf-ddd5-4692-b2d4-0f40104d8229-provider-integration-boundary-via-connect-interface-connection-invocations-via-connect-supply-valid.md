# Provider Integration Boundary via connect Interface: Connection Invocations Via Connect Supply Valid

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Client dialog components require asynchronous connection establishment when selecting and configuring external integration providers.
- Direct invocation of the connect interface coordinates integration lifecycle events between the presentation layer and background integration synchronization services.
- Provider state persistence and cache access are synchronized concurrently with connection requests across provider selection flows.

## Problem Statement

Provider connection workflows require reliable triggering of asynchronous integration handshakes from user interface components while maintaining consistent cache state and avoiding fragmented integration boundary invocations across different dialogs.

## Decision

1. MUST: Connection invocations via connect MUST supply valid target provider or model identifiers to ensure deterministic integration boundary dispatch.

## Policy Block

- MUST Connection invocations via connect MUST supply valid target provider or model identifiers to ensure deterministic integration boundary dispatch.

In scope:
- User interface dialogs and workflow components responsible for selecting, configuring, or activating provider integrations
- Integration boundary routines managing model and provider connectivity

Out of scope:
- Stateless presentation components displaying static provider metadata without connection actions
- Server-side background batch processing routines operating outside interactive integration sessions

## Rationale

- Uniform reliance on the connect interface establishes a predictable boundary for tracking provider connectivity and message dispatch across the application.
- Evidence across provider and model selection dialogs indicates consistent coupling of user selection actions to the connect integration routine.
- Centralizing connection triggers prevents divergent integration handshake implementations and simplifies lifecycle error handling.

## Consequences

Positive:
- Consistent connection lifecycle handling across all model and provider configuration dialogs.
- Clear boundary separation between user interface interaction and backend integration synchronization.
- Simplified tracking and observability of provider connection events across the client application.

Negative:
- Tight coupling of presentation dialogs to the specific connect interface signature and runtime prerequisites.
- Potential latency in user interface state transitions pending connection response resolution.

## Alternatives

- Direct unmediated transport socket connections initiated within individual presentation components (rejected)
  Rejected because: Bypassing the standardized connect boundary introduces duplicated transport logic, inconsistent cache synchronization, and uncoordinated state transitions across dialogs.
  When valid: Valid only in standalone exploratory harnesses without application state coordination.
- Declarative global store subscriptions without explicit component-level connect triggers (rejected)
  Rejected because: Implicit connection triggering complicates error reporting and user feedback during interactive dialog selection workflows.
  When valid: Valid for background auto-reconnect routines that require no immediate user feedback.

## Risks

- Failure or delay in connect execution may leave dialog components in an indeterminate pending state.
  Mitigation: Implement explicit timeout thresholds and propagate error states back to dialog presentation controls.
  Owner: engineering team
- Mismatched integration identifier payloads passed to connect can trigger invalid upstream provider sessions.
  Mitigation: Enforce strict schema validation on provider and model parameters prior to invoking the connect boundary.
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
- Ensure all integration dialog handlers verify prerequisite configuration fields before triggering the connect interface.
- Coordinate provider cache state updates with the outcome of connect invocations to preserve UI consistency.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and test validation suites through the repository script runner.
- Execute integration boundary verification tests defined in repository configuration.

Accept when:
- All provider connection dialogs invoke the connect interface without protocol deviations.
- Repository verification and type check suites execute with zero failures.

## Enforcement

- Verified by: Automated continuous integration checks inspecting interface compliance and test coverage.
- Verified by: Mandatory peer code review for changes affecting provider integration dialogs and connection boundaries.
- Violation handling: Pull requests bypassing the connect boundary will be blocked from merging until aligned with integration interface requirements.
- Exception process: Architectural exceptions require written justification submitted to and approved by the core engineering team.