# @playwright/test CDP Session Real-Time Tracing and Lifecycle Integration: Performance Profiling Test Suites Manage Low

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Performance benchmarking requires granular inspection of browser internal metrics during automated execution flows.
- Standard black-box assertions do not capture low-level browser trace streams or real-time navigation lifecycle intervals.
- The test suite establishes dedicated real-time integration boundaries using low-level protocol sessions and page lifecycle events to capture profiling artifacts.

## Problem Statement

Automated performance evaluation requires precise, deterministic trace telemetry from the browser runtime without injecting invasive instrumentation into the application under test, necessitating structured integration with low-level browser debugging protocols and lifecycle events during test runs.

## Decision

1. MUST: Performance profiling test suites MUST manage low-level browser instrumentation boundaries through @playwright/test CDPSession and Page event-driven subscriptions rather than injecting external profiling agents into application code.

## Policy Block

- MUST Performance profiling test suites MUST manage low-level browser instrumentation boundaries through @playwright/test CDPSession and Page event-driven subscriptions rather than injecting external profiling agents into application code.

In scope:
- Performance benchmarking and trace capture suites integrating with real-time browser runtime protocols.
- Test infrastructure managing browser sessions and real-time page navigation lifecycle subscriptions.

Out of scope:
- Standard unit tests and functional integration tests that do not record browser traces or intercept protocol events.
- Production runtime application code outside automated test suites.

## Rationale

- Direct protocol integration via @playwright/test CDPSession APIs allows exact demarcation of trace boundaries around critical execution phases.
- Subscribing directly to page navigation events allows tracking real-time client transitions without polling or modifying application binaries.
- Associating diagnostic telemetry with isolated page instances avoids cross-test state pollution and trace corruption.

## Consequences

Positive:
- Direct access to low-level browser performance traces and real-time execution timelines.
- Fine-grained control over tracing boundaries and telemetry capture intervals.
- Decoupled collection of diagnostics keyed to active browser pages without mutating application code.

Negative:
- Tight architectural coupling to browser debugging protocol capabilities and message formats.
- Increased test suite execution complexity requiring explicit session lifecycle management and asynchronous cleanup.
- Potential timing sensitivities in event handlers during high-frequency browser navigation events.

## Alternatives

- High-level browser trace recording without protocol-level session management (rejected)
  Rejected because: Fails to expose lower-level browser runtime boundaries and granular tracing control required for deterministic performance profiling.
  When valid: Valid for standard functional end-to-end testing where low-level profiling telemetry is not required.
- Synthetic external network and process monitors (rejected)
  Rejected because: Lacks in-process correlation with client-side navigation lifecycles and page execution contexts.
  When valid: Valid when monitoring infrastructure-level metrics across decoupled operating systems.

## Risks

- Unclosed protocol sessions or unhandled tracing promises can cause test runner timeouts or orphan browser processes.
  Mitigation: Wrap all protocol session interactions in try-finally blocks or test fixtures that guarantee session closure and trace flushing.
  Owner: engineering team
- Protocol command syntax or payload schemas may change between browser engine releases.
  Mitigation: Verify protocol command compatibility against the resolved testing framework version per the Discovery Policy.
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
- Encapsulate protocol session management within dedicated fixture helpers to ensure guaranteed disposal in teardown phases.
- Bind page lifecycle event handlers prior to executing navigation actions and unbind or clean up references when disposing of page contexts.

## Continuation Context


Verify commands:
- Discover the repository test runner script and execute the performance benchmark test suite.
- Inspect generated trace artifacts to verify that real-time performance traces are created and properly formatted.

Accept when:
- Performance benchmark suites execute and collect browser traces without hanging or leaking active sessions.
- All real-time lifecycle event listeners and protocol sessions terminate cleanly upon test completion.

## Enforcement

- Verified by: Automated continuous integration pipeline running performance benchmark suites.
- Verified by: Peer review of test suite configurations and telemetry session lifecycles.
- Violation handling: Pull requests introducing unmanaged protocol sessions or leaking page event listeners will be blocked during code review and automated checks.
- Violation handling: Tests failing to release debugging sessions will fail automated hygiene verification.
- Exception process: Submit an architectural exception request detailing why low-level protocol-based tracing cannot be used for the target benchmark scenario.
- Exception process: Obtain approval from the testing infrastructure leads prior to merging alternate telemetry mechanisms.