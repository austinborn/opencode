# Adopt SolidJS Reactive UI Library for Web Presentation Components: Component Implementations Requiring Reactive Dom Observation

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The web client application requires responsive, interactive presentation components to facilitate user actions such as sharing and copying content.
- Static code analysis identifies consistent adoption of SolidJS and its associated JSX runtime across interactive share components.
- A unified reactive rendering library is necessary to prevent architectural fragmentation and ensure predictable UI state management across web modules.

## Problem Statement

Building interactive web user interfaces without a standardized reactive foundation leads to fragmented state management, inconsistent rendering performance, and conflicting component paradigms across presentation modules.

## Decision

1. SHOULD: Component implementations requiring reactive DOM observation or event listening SHOULD adopt compatible SolidJS primitive modules aligned with the core reactive lifecycle.

## Policy Block

- SHOULD Component implementations requiring reactive DOM observation or event listening SHOULD adopt compatible SolidJS primitive modules aligned with the core reactive lifecycle.

In scope:
- Web client interactive presentation components requiring dynamic rendering and state reactivity.
- Shared user interface modules responsible for user interactions and content export operations.

Out of scope:
- Headless server-side services and command-line interfaces that do not render graphical browser interfaces.
- Static styling definitions and asset configurations operating independently of component lifecycles.

## Rationale

- SolidJS provides fine-grained reactivity that updates DOM nodes directly without the overhead of a virtual DOM diffing engine.
- Codebase evidence across multiple presentation components demonstrates uniform adoption of SolidJS imports and JSX runtime configurations.
- Standardizing on SolidJS ensures predictable component lifecycles, unified reactive primitives, and clean modular boundary management.

## Consequences

Positive:
- High-performance DOM updates with minimal runtime footprint due to reactive signals compiling to direct DOM operations without reconciler overhead.
- Consistent declarative component model and JSX compilation patterns across web client presentation modules.
- Modular extension through dedicated reactive primitives designed specifically for fine-grained lifecycle observation.

Negative:
- Incompatibility with third-party components and hooks that depend strictly on virtual DOM rendering semantics.
- Requires developer discipline regarding reactive tracking semantics, where premature accessor evaluation or property destructuring breaks reactivity.

## Alternatives

- Virtual DOM UI Frameworks (rejected)
  Rejected because: Virtual DOM diffing introduces unnecessary reconciliation runtime overhead and larger bundle sizes compared to fine-grained direct DOM reactivity.
  When valid: Valid when external organizational dependencies require access to a component ecosystem exclusive to virtual DOM architectures.
- Imperative Vanilla DOM Manipulation (rejected)
  Rejected because: Manual DOM manipulation lacks declarative consistency, increasing defect rates and maintenance complexity across multi-part interactive user interfaces.
  When valid: Valid for isolated scripts with minimal interactivity and no requirement for shared reactive state.

## Risks

- Loss of reactivity caused by premature signal evaluation or object destructuring within component function bodies.
  Mitigation: Enforce static analysis rules and review guidelines that verify reactive accessors are preserved and not destructured across component boundaries.
  Owner: Frontend engineering team
- Version divergence between the core reactive framework runtime and supplementary primitive extension packages.
  Mitigation: Follow mandatory lock-version grounding to verify exact resolved versions of companion primitives against the core runtime.
  Owner: Frontend engineering team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Maintain signal accessor invocation within JSX templates and tracking scopes to guarantee automatic reactive subscription registration.
- Colocate component-specific styles alongside presentation components while keeping reactive state logic decoupled from presentation markup.

## Continuation Context


Verify commands:
- Discover and run the repository dependency verification command to validate lock resolution integrity for user interface runtime packages.
- Discover and run the project static analysis and type checking suite to verify SolidJS reactive component compliance across web modules.
- Discover and run the project automated test suite to ensure all reactive UI components mount, render, and update without errors.

Accept when:
- All web presentation components compile and typecheck cleanly against the locked reactive UI framework version.
- Component unit and integration test suites pass with zero runtime reactivity warnings or unhandled exceptions.
- Static analysis rules verify that reactive accessors and JSX runtime imports conform to component architectural standards.

## Enforcement

- Verified by: Automated continuous integration pipelines executing static analysis and type checking.
- Verified by: Peer code reviews verifying reactive signal bindings and component composition standards.
- Violation handling: Pull requests introducing alternative UI view engines or violating fine-grained reactivity conventions are blocked from merging.
- Violation handling: Violations identified in code reviews must be refactored to conform to standard SolidJS component patterns prior to release.
- Exception process: Exceptions require documented architectural evaluation and formal approval from frontend leads before introducing alternative rendering mechanisms.
- Exception process: Any approved exception must be isolated behind an abstraction boundary to prevent leakage into the main presentation layer.