# @playwright/test In-Browser Visual Stability Telemetry: End Visual Stability Instrumentation Adopt Playwright

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Automated end-to-end testing required continuous observation of UI layout shifts and element visibility during dynamic scroll interactions rather than point-in-time visual diffing.
- The test suite imports `@playwright/test` to orchestrate browser automation and evaluate client-side runtime behavior.
- A specialized telemetry probe executes within browser page contexts to record element bounding boxes, cascading opacities, and scroll viewport coordinates across animation frames.
- Telemetry collection and invariant validation are divided across dedicated internal modules covering regions, probes, invariants, and scenarios.

## Problem Statement

Point-in-time visual snapshot tests cannot detect transient layout shifts, jank, or cumulative visual regressions that occur across interaction frames during dynamic view transitions and scrolling. The testing architecture requires a mechanism to continuously sample painted element geometries, ancestor clipping boundaries, and visibility states inside the active browser page without contaminating production application code or relying on external screen recording tools.

## Decision

1. MUST: End-to-end visual stability instrumentation MUST adopt `@playwright/test` using `page.evaluate` to inject an in-browser sampling probe rather than relying solely on static post-render screenshot comparisons.

## Policy Block

- MUST End-to-end visual stability instrumentation MUST adopt `@playwright/test` using `page.evaluate` to inject an in-browser sampling probe rather than relying solely on static post-render screenshot comparisons.

In scope:
- End-to-end test suites executing dynamic UI interaction and visual stability validation.
- In-browser telemetry probes executing via browser automation page evaluation APIs.

Out of scope:
- Unit and integration tests operating in headless mock DOM environments without real browser layout engines.
- Static pixel-diff screenshot snapshot tests comparing pre-rendered image files.

## Rationale

- The IR evidence demonstrates `@playwright/test` page evaluation being used across multiple modules to coordinate continuous in-browser frame sampling and visual invariant verification.
- Injecting a lightweight probe via `page.evaluate` allows direct measurement of layout bounding rects, clipping ancestors, and opacity multipliers at runtime without modifying application production code.
- Modularizing the instrumentation into distinct probe, region, and invariant definitions prevents tight coupling between browser evaluation mechanics and domain-specific test scenarios.

## Consequences

Positive:
- Enables precise detection of transient visual shifts, clipping errors, and opacity regressions during complex animations and scroll interactions.
- Keeps telemetry measurement logic isolated within test execution contexts rather than bundling monitoring code into production distributions.
- Provides deterministic sample streams with timeline markers correlating user actions directly to layout geometry changes.

Negative:
- Increases test duration due to frame-by-frame sampling and in-browser computational overhead during test execution.
- Introduces browser evaluation serialization overhead when transferring complex observation arrays back to the test runner process.
- Couples probe logic to browser DOM APIs and CSS computed style behavior, requiring maintenance across browser engine updates.

## Alternatives

- Relying exclusively on post-interaction pixel-diff screenshots (rejected)
  Rejected because: Static screenshots miss transient layout jank, mid-animation layout shifts, and intermediate visibility anomalies occurring between discrete actions.
  When valid: When verifying static landing pages or non-animated document layouts where interaction dynamics are absent.
- Bundling visual telemetry code directly into production application bundles (rejected)
  Rejected because: Injecting testing probes into production runtime creates memory overhead, risks bundle bloat, and exposes internal inspection globals in production environments.
  When valid: When building dedicated client-side real user monitoring features intended for production performance analytics.

## Risks

- In-browser sampling loops using animation frame callbacks may throttle or drop frames under heavy test harness CPU loads, causing sparse sample streams.
  Mitigation: Record monotonic timestamps alongside each sample and verify minimum sample counts before validating invariants.
  Owner: engineering team
- Changes in browser CSS layout calculation or overflow clipping semantics may alter calculated painted boundaries across test environments.
  Mitigation: Standardize headless browser runtime versions and centralize clipping box derivation algorithms within shared test utilities.
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
- Define region selectors and target element configurations independently from the probe execution script to facilitate reuse across different test scenarios.
- Ensure the probe cleanup handler terminates the animation frame recursion upon test scenario completion or failure to avoid browser memory leaks.

## Continuation Context


Verify commands:
- git grep -F "@playwright/test"
- git grep -E "page\\.evaluate\\(.*__visualStabilityProbe"

Accept when:
- All end-to-end visual stability test suites execute and validate layout invariants against recorded probe samples without unhandled probe errors.
- Probe lifecycle methods properly initialize, sample, and terminate across all configured interaction scenarios.

## Enforcement

- Verified by: Automated continuous integration pipeline running end-to-end test suites across pull requests.
- Verified by: Code review ensuring new visual stability tests consume modular probe utilities instead of ad-hoc DOM queries.
- Violation handling: Pull requests containing ungrounded coordinate assertions or ad-hoc browser evaluation scripts fail automated checks and require refactoring to use standardized probe utilities.
- Exception process: Exceptions for specialized testing harnesses that cannot run in-browser page evaluations require architectural review and documentation in test scenario plans.