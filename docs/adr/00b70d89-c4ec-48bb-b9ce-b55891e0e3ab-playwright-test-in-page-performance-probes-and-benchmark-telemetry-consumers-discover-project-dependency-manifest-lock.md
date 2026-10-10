# @playwright/test In-Page Performance Probes and Benchmark Telemetry: Consumers Discover Project Dependency Manifest Lock

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Automated end-to-end test suites require rigorous verification of user interface responsiveness, navigation milestones, and layout stability.
- Standard DOM state assertions and element visibility checks do not capture transient layout shifts, repaint flutters, or frame-by-frame rendering sequences.
- The testing strategy integrates browser automation page controllers with client-side probe evaluations and browser protocol tracing sessions.

## Problem Statement

Standard end-to-end browser assertions verify final state availability but fail to observe transient performance defects such as layout shifts, layout instability, slow navigation milestones, and excessive repainting during complex interactive workflows.

## Decision

1. MUST: Consumers MUST discover the project dependency manifest and lock resolution artifact to identify the exact resolved version of the browser automation framework before implementation.

## Policy Block

- MUST Consumers MUST discover the project dependency manifest and lock resolution artifact to identify the exact resolved version of the browser automation framework before implementation.

In scope:
- All end-to-end performance benchmark specifications and rendering regression test suites.
- Browser-based navigation timing, layout stability, and repaint verification fixtures.

Out of scope:
- Unit tests verifying isolated functions, data models, or non-browser utilities.
- Component unit tests running in headless mocked DOM environments.

Exceptions:
- EXC-39-001: Smoke tests and unit verification suites verifying isolated pure logic without browser rendering requirements.

## Rationale

- In-browser telemetry probes operating via page evaluation enable direct measurement of client-side performance marks and observer events without external proxy overhead.
- Standardizing performance measurement within the primary browser test framework eliminates fragmented testing stacks and preserves shared fixture infrastructure.
- Multi-frame streak confirmation provides resilient milestone detection that avoids false positives caused by incomplete intermediate DOM render passes.

## Consequences

Positive:
- Deterministic measurement of client rendering milestones, layout shifts, and repaint sequences during simulated user workflows.
- Direct access to low-level browser performance timelines and developer protocol tracing within standard automated test runners.
- Early detection of rendering performance regressions, layout thrashing, and client navigation bottlenecks prior to deployment.

Negative:
- Benchmark tests require additional execution duration to sample frame stability and collect mutation records.
- Probe scripts injected into the browser runtime introduce minimal execution overhead that must be accounted for during micro-benchmarking.
- Tight coupling to internal DOM structure and dataset identifiers increases maintenance overhead when UI components undergo major layout refactoring.

## Alternatives

- Standard end-to-end functional assertions without in-page performance probes (rejected)
  Rejected because: Functional assertions cannot observe sub-frame repaint artifacts, layout shifts, or element stability timing across user navigation.
  When valid: Valid when verifying basic application functional correctness rather than rendering performance or latency regressions.
- Standalone synthetic browser tracing scripts disconnected from test harness fixtures (rejected)
  Rejected because: Decoupled benchmarking scripts drift from primary UI interaction selectors, duplicate fixture setups, and require separate execution harnesses.
  When valid: Valid when conducting ad-hoc external network throttling benchmarks against remote deployed endpoints.

## Risks

- Memory leaks or runaway animation frame loops caused by orphaned in-page probes.
  Mitigation: Ensure all observer instances and animation frame polling routines are disconnected via structured cleanup calls before test completion.
  Owner: Quality Engineering Team
- Test timeouts resulting from milestone targets that never reach stable rendering state.
  Mitigation: Set bounded sampling windows and streak thresholds to avoid open-ended polling during slow or incomplete navigations.
  Owner: Frontend Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Inject client-side probes via isolated evaluation contexts that attach mutation and performance observers prior to triggering user interaction events.
- Always encapsulate probe lifecycle state and provide an explicit stop method to disconnect DOM and performance observers before reading telemetry buffers.
- Coordinate browser protocol tracing sessions with harness lifecycle hooks to ensure trace buffers are cleanly terminated and persisted upon test completion.

## Continuation Context


Verify commands:
- Discover the repository test configuration and run the performance benchmark test suite in verification mode.
- Inspect the project lock artifact to verify that the browser automation framework dependency matches the committed resolution.

Accept when:
- All end-to-end benchmark test suites execute without unhandled probe rejections or browser context timeouts.
- Performance marks, layout shift samples, and mutation records collected via in-page evaluation probes conform to declared telemetry schemas.
- Resolved versions of the browser testing framework match the authoritative lock artifact.

## Enforcement

- Verified by: Automated continuous integration pipeline executing performance benchmark test specifications.
- Verified by: Static analysis validating probe interface typing and browser automation test fixture structure.
- Verified by: Code review inspection of benchmark fixtures, probe cleanup routines, and observation windows.
- Violation handling: Continuous integration execution failure on unhandled probe exceptions or benchmark stability assertion timeouts.
- Violation handling: Pull request blockage when performance telemetry fixtures omit proper observer teardown or CDP session closure.
- Exception process: Exceptions must be submitted via architectural review detailing why standard functional testing suffices in place of performance probe instrumentation.
- Exception process: Temporary waivers require documentation of alternative performance measurement mechanisms and an agreed expiration timeline.