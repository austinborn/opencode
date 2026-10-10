# Adoption of @playwright/test for End-to-End Browser Automation and Testing: Browser Telemetry Visual Stability Probes Injected

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- End-to-end verification of user interface workflows and rendering stability requires coordinated browser lifecycle management and in-page evaluation.
- Complex visual stability assertions demand fine-grained DOM measurement, viewport scroll tracking, and low-level protocol access alongside test assertions.
- Multiple testing utility modules import and rely on @playwright/test for browser sessions, page evaluation, and assertion primitives.

## Problem Statement

Validating user interface layout shifts and visual stability requires executing instrumented probes within real browser viewports and synchronizing frame data with test lifecycle assertions. Without a standardized browser automation framework, testing utilities risk fragmented automation drivers, inconsistent runtime instrumentation, and uncoordinated assertion mechanisms.

## Decision

1. SHOULD: In-browser telemetry and visual stability probes SHOULD be injected using the page.evaluate API to capture runtime frame measurements.

## Policy Block

- SHOULD In-browser telemetry and visual stability probes SHOULD be injected using the page.evaluate API to capture runtime frame measurements.

In scope:
- All end-to-end test suites, browser integration test utilities, and visual stability probes.
- Browser automation scripts requiring low-level protocol sessions or in-page script evaluation.

Out of scope:
- Isolated unit tests executing in non-browser environments.
- Static analysis and build-time code verification tasks.

Exceptions:
- EXC-20-001: A test scenario requires headless synthetic DOM environments that do not require full browser engine rendering.

## Rationale

- Evidence across testing utility modules demonstrates reliance on @playwright/test for both high-level test expectations and low-level CDP session controls.
- Standardizing on @playwright/test provides a unified model for browser lifecycle management, in-page JavaScript execution, and test failure reporting.
- Utilizing built-in browser primitives enables deterministic frame-by-frame measurement of rendering shifts and layout clipping without additional external driver dependencies.

## Consequences

Positive:
- Unified browser automation interface across all end-to-end testing modules.
- Native access to low-level protocol events and in-browser evaluation loops for precision rendering analysis.
- Cohesive test reporting and failure diagnostics integrated with the test runner assertions.

Negative:
- Coupling of end-to-end utility code to the specific execution semantics of the adopted framework.
- Execution overhead associated with launching and orchestrating full browser processes during continuous integration runs.

## Alternatives

- Custom browser automation layer built directly on raw protocol client connections (rejected)
  Rejected because: Reimplementing process lifecycle management, locator strategies, and test assertion harnesses introduces substantial maintenance overhead.
  When valid: Valid when building specialized standalone protocol debugging tools independent of test suites.
- Synthetic DOM simulation environments without real browser rendering (rejected)
  Rejected because: Synthetic DOM libraries cannot compute true computed styles, paint boundaries, or layout shifts across render frames.
  When valid: Valid for lightweight unit testing of logic that has no visual or layout rendering dependencies.

## Risks

- Breaking API changes across framework releases could disrupt in-page probe injection or session protocols.
  Mitigation: Strict lock-file version grounding and centralized abstraction of browser session utilities.
  Owner: Engineering Team
- High resource consumption during parallel execution of browser-driven stability probes.
  Mitigation: Configure test runner worker concurrency and enforce prompt termination of active probe loops upon test completion.
  Owner: Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Encapsulate low-level browser interaction patterns inside dedicated testing utility modules so that test specifications consume high-level probe helpers rather than raw protocol calls.
- Ensure all in-browser probe functions injected via page.evaluate clean up running frame loops and event listeners upon completion.

## Continuation Context


Verify commands:
- Discover the end-to-end test execution target in the workspace configuration and run the browser verification suite.
- Discover and run the project type-checking and linting verification scripts to validate test utility signatures.

Accept when:
- The end-to-end test suite executes successfully across all configured browser targets.
- All visual stability probe modules type-check without errors against the resolved framework types.

## Enforcement

- Verified by: Continuous integration test execution pipelines enforcing test pass criteria.
- Verified by: Automated static analysis and code review checks verifying import consistency.
- Violation handling: Automated build pipeline failure if unauthorized browser automation drivers are introduced or if test suites fail.
- Exception process: Submit an architectural review request detailing the constraints that necessitate an alternative testing harness, subject to testing architecture sign-off.