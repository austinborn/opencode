# Internal invariant Module for Runtime Assertion and Contract Validation: Utility Modules Not Replace Internal Invariant

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- End-to-end visual stability testing utilities require strict runtime contract validation when processing sample collections and viewport coordinates.
- Multiple utility modules including scenario runners, analyzers, and reporters coordinate complex state evaluations that must fail fast when prerequisite conditions are violated.
- The codebase has established an internal invariant module to standardize precondition checking and defensive assertions across testing utilities.
- Unifying invariant checks within a shared internal module prevents duplicated conditional logic and separates internal contract validation from test runner expectation assertions.

## Problem Statement

Visual stability testing utilities process multi-stage data pipelines encompassing scenarios, sample analyzers, and result reporters where unexpected state or missing data structures can lead to silent failures or misleading downstream errors. Without a standardized contract enforcement mechanism across these modules, individual utilities implement inconsistent validation strategies, complicating debugging and obscuring whether a failure stemmed from invalid test harness state or an actual application defect.

## Decision

1. MUST_NOT: Utility modules MUST NOT replace internal invariant contract assertions with test runner expectation matchers when validating internal harness state or data model preconditions.

## Policy Block

- MUST_NOT Utility modules MUST NOT replace internal invariant contract assertions with test runner expectation matchers when validating internal harness state or data model preconditions.

In scope:
- End-to-end testing utilities, analyzers, and reporting modules responsible for visual stability verification.
- Internal data model access and collection processing where invariant contracts must hold.

Out of scope:
- Production application runtime modules outside the testing utility boundary.
- Test runner assertions that validate actual target application behavior rather than internal test harness invariants.

## Rationale

- Centralizing runtime contract validation through the internal invariant module ensures uniform error handling and consistent failure semantics across all visual stability testing components.
- Standardized invariant enforcement allows data access routines to safely assume valid data shapes after query operations without repetitive manual null checks.
- Distinguishing harness invariant violations from test expectation assertions prevents internal test harness bugs from being misclassified as product regressions.

## Consequences

Positive:
- Fails fast at the exact point of contract violation, minimizing cascading failures across downstream analyzers and reporters.
- Eliminates boilerplate condition checking across visual stability utility modules.
- Clarifies error categorization between test utility infrastructure defects and application assertions.

Negative:
- Introduces a direct dependency on the internal invariant utility across all visual stability testing modules.
- Misconfigured invariant checks can abort test runs prematurely if preconditions are specified too strictly.

## Alternatives

- Native ad-hoc condition checking with thrown generic errors (rejected)
  Rejected because: Leads to inconsistent error formats, duplicated branching logic, and unstandardized failure diagnostics across modules.
  When valid: Small isolated scripts with no shared utility architecture or cross-module contract requirements.
- Using test runner assertion framework for internal harness state verification (rejected)
  Rejected because: Conflates test harness infrastructure errors with test target application assertions, muddying test reporting and failure diagnostics.
  When valid: Test definition files asserting expected application behavior against user-facing outcomes.

## Risks

- Overly restrictive invariant checks causing false test failures on benign unexpected states
  Mitigation: Ensure invariants validate only strictly required structural preconditions and document expected input contracts
  Owner: engineering team
- Inconsistent diagnostic messages across invariant invocations hindering debugging
  Mitigation: Establish descriptive message conventions during peer review and testing utility maintenance
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
- Discover the internal invariant module within the testing utilities package and import it directly into utility modules requiring precondition validation.
- Structure invariant calls immediately adjacent to collection lookups or external state acquisitions where structural guarantees are required.

## Continuation Context


Verify commands:
- Discover and run the project test suite command targeting visual stability utilities to verify invariant assertions execute properly.
- Discover and run the repository linter command to ensure invariant imports adhere to module boundary rules.

Accept when:
- Visual stability test utility modules pass all automated test suites with invariant contracts verified.
- Precondition violations in test utilities consistently trigger structured invariant errors with informative diagnostics.

## Enforcement

- Verified by: Continuous integration test execution and automated lint checks.
- Verified by: Peer review during code changes affecting testing utilities and invariant modules.
- Violation handling: Pull requests omitting invariant checks for required preconditions or using ad-hoc error throwing will be blocked until updated.
- Exception process: Document the rationale for bypassing invariant validation in the pull request description and obtain approval from the testing infrastructure leads.