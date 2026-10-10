# @playwright/test Integration Testing and Lifecycle Probing: Engineering Team Restrict Use Playwright Test

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Static analysis detected an integration testing pattern signature across multiple session components, synchronization contexts, and performance evaluation modules.
- The detected invocations share a common method name for initiating operations across disparate domain primitives, ranging from user interface interaction listeners to automated browser performance probes.
- Automated end-to-end evaluation scripts utilize @playwright/test to inspect browser performance, frame timings, and layout shifts during streaming operations.
- The majority of observed occurrences represent localized component interactions and connection events rather than a unified cross-cutting integration testing harness.

## Problem Statement

Disparate modules require mechanisms to initiate operational states, performance observation, and service event streams; however, the lack of distinction between local component lifecycle triggers and genuine integration testing instrumentation creates ambiguity across testing strategy boundaries.

## Decision

1. MUST: The engineering team MUST restrict the use of @playwright/test to dedicated end-to-end and integration performance probing environments rather than embedding test harness abstractions inside production application UI components.

## Policy Block

- MUST The engineering team MUST restrict the use of @playwright/test to dedicated end-to-end and integration performance probing environments rather than embedding test harness abstractions inside production application UI components.

In scope:
- Automated browser performance benchmarking scripts and end-to-end integration test suites.
- Synthetic evaluation probes measuring DOM rendering and timeline performance.

Out of scope:
- Interactive production application user interface components and layout resizing listeners.
- Client-server synchronization primitives and domain streaming event handlers.

## Rationale

- Static analysis reveals that lexical matching on operational initiation methods conflates production UI drag-resizing with testing integration hooks.
- Isolating @playwright/test execution to dedicated browser evaluation scripts prevents testing dependencies and harness overhead from leaking into runtime UI bundles.
- Explicit separation between synthetic performance instrumentation and application state prevents false positives during automated quality auditing.

## Consequences

Positive:
- Clear boundary between synthetic integration benchmark instrumentation and runtime application logic.
- Elimination of inadvertent testing harness dependencies in production bundle artifacts.
- Repeatable, high-fidelity browser performance measurement without polluting component lifecycle state.

Negative:
- Performance probes require dedicated maintenance separate from component unit tests.
- Synthetically instrumented browser evaluations introduce operational complexity during automated continuous integration.

## Alternatives

- Unify all operational initiation hooks under a shared testing lifecycle interface (rejected)
  Rejected because: Conflates UI layout resizing and network streaming events with automated test harnesses, introducing artificial coupling across disparate modules.
  When valid: Valid only in monolithic embedded testing frameworks where components expose standardized inspection hooks.
- Rely solely on synthetic unit test mocks instead of browser evaluation probes (rejected)
  Rejected because: Fails to capture real-world browser rendering layout shifts, long tasks, and streaming frame rates observed in browser environments.
  When valid: Valid when testing isolated computational logic without browser DOM rendering concerns.

## Risks

- In-browser performance instrumentation hooks can introduce measurement overhead and distort frame rate sampling.
  Mitigation: Ensure probes detach mutation observers and performance observers immediately upon benchmark completion.
  Owner: engineering team
- Ambiguous lifecycle method names may trigger spurious static analysis warnings in automated quality pipelines.
  Mitigation: Adopt domain-explicit method naming conventions that clearly distinguish test probes from UI resize operations.
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
- Expose performance probe states through isolated window-scoped benchmark objects rather than component props or application stores.
- Structure integration performance probes to sample layout shifts and long tasks during live streaming intervals.

## Continuation Context


Verify commands:
- Discover and run the project test runner for end-to-end integration and performance suites.
- Execute the repository code quality and static analysis scripts to verify test boundary separation.

Accept when:
- All automated integration and performance test suites pass without timing regressions or frame drops.
- Static analysis confirms zero test harness dependencies are present within production component bundles.

## Enforcement

- Verified by: Automated continuous integration pipeline checks
- Verified by: Peer code review during pull request inspection
- Violation handling: Pull requests introducing test runner dependencies into production UI components will be blocked.
- Violation handling: Invocations failing lock version verification must be corrected prior to merging.
- Exception process: Submit an architectural review request to the core architecture team outlining specific benchmarking constraints.