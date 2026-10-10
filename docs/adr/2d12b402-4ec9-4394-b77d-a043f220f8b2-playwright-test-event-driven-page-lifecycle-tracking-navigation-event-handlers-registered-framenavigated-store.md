# @playwright/test Event-Driven Page Lifecycle Tracking: Navigation Event Handlers Registered Framenavigated Store

Status: proposed
Date: 2025-05-14
Deciders: Detection Pipeline (automated)

## Context

- Performance benchmark fixtures require non-intrusive observability into browser navigation lifecycles to aggregate tracing metrics and diagnostics.
- Directly embedding performance measurement probes inside test assertions creates tight coupling between metric gathering and scenario verification logic.
- The browser automation environment provides asynchronous event dispatching for frame and document navigation transitions.

## Problem Statement

Collecting performance diagnostics during browser automation often results in tightly coupled test scripts when timing probes and assertions are interleaved with user interaction logic. Without an event-driven boundary, tests must resort to active polling or custom timing loops, creating fragile test suites and inaccurate timing measurements during frame navigation.

## Decision

1. MUST: All navigation event handlers registered on the framenavigated event MUST store collected diagnostics in an isolated context mapped to the active page instance.

## Policy Block

- MUST All navigation event handlers registered on the framenavigated event MUST store collected diagnostics in an isolated context mapped to the active page instance.

In scope:
- Automated end-to-end browser performance benchmarks requiring frame navigation timing and runtime diagnostics collection.
- Test harness fixtures managing page lifecycle event subscriptions.

Out of scope:
- Unit tests and functional integration tests that do not involve browser automation.
- Stateless API integration tests operating without a browser page lifecycle.

## Rationale

- Subscribing to navigation lifecycle events directly from the page boundary ensures accurate event timestamps without interfering with scenario execution.
- Storing diagnostics in an external collection indexed by page instance keeps test fixtures modular and assertions independent of observability plumbing.
- Configuring run parameters through runtime environment sources allows dynamic toggles for diagnostic verbosity without altering test code.

## Consequences

Positive:
- Decouples diagnostic metric collection from test assertion logic and scenario execution scripts.
- Captures immediate frame transition timings without requiring polling or artificial test delays.
- Enables non-intrusive performance tracing across page redirects, client-side routings, and document reloads.

Negative:
- Requires strict lifecycle management to deregister event listeners and prevent memory retention across long-running test suites.
- Asynchronous event handlers introduce state synchronization complexity when correlating diagnostics across concurrent page navigations.
- Restricted to automation targets supporting browser frame lifecycle event dispatching.

## Alternatives

- Synchronous post-navigation polling of page metrics via custom evaluation loops (rejected)
  Rejected because: Polling introduces artificial execution overhead, misses transient sub-frame navigations, and fails to capture precise navigation start and completion timestamps.
  When valid: When the target automation environment lacks support for event listener subscriptions on page lifecycle hooks.
- Global interception proxy for all browser network requests and document responses (rejected)
  Rejected because: Imposes significant architectural complexity and network overhead when only client-side navigation timing and frame transition diagnostics are required.
  When valid: When network transport layer packet inspection and full HTTP payload mutation are explicitly mandated.

## Risks

- Dangling event listeners across multiple test executions cause memory leaks and spurious diagnostics reporting.
  Mitigation: Attach listener cleanup callbacks to the test fixture teardown phase to deregister all event subscribers upon completion.
  Owner: engineering team
- Navigations interrupted by network failures or immediate redirects may fire unexpected lifecycle event sequences.
  Mitigation: Guard against missing navigation milestones by combining event listener capture with overall test timeout thresholds.
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
- Ensure diagnostic collections tied to browser page instances are scoped to the active test context and purged upon test fixture teardown.
- Configure navigation event handlers to execute asynchronously without blocking page rendering or subsequent navigation stages.

## Continuation Context


Verify commands:
- Discover the repository test execution script and run the automated end-to-end performance benchmarking suite.
- Discover and execute the repository static analysis and linting scripts to verify compliance with fixture lifecycle cleanup standards.

Accept when:
- All automated test suites for browser performance benchmarking execute and pass without reporting listener memory leaks.
- Diagnostic caches accurately record navigation timing and lifecycle events for all observed page transitions.
- Static analysis and lint suites confirm all page lifecycle event listeners have registered teardown handlers.

## Enforcement

- Verified by: Automated continuous integration checks executing the performance benchmark harness.
- Verified by: Architecture and peer code review verifying that lifecycle listeners adhere to structured registration and teardown standards.
- Violation handling: Pull requests introducing ad-hoc polling or unmanaged navigation listeners will fail peer review and automated compliance checks.
- Violation handling: Violations must be refactored to register standard lifecycle listeners with coordinated diagnostic storage.
- Exception process: Exceptions require documented architectural review outlining why event-driven lifecycle subscriptions are unfeasible for the performance benchmarking suite.
- Exception process: Approved exceptions must define an alternative non-intrusive mechanism to capture navigation timestamps without destabilizing benchmark results.