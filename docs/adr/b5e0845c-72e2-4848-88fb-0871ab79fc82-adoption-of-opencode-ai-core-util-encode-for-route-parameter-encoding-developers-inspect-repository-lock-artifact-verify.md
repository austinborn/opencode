# Adoption of @opencode-ai/core/util/encode for Route Parameter Encoding: Developers Inspect Repository Lock Artifact Verify

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Multiple performance and stability test fixtures construct session navigation URLs requiring directory path segments.
- Filesystem paths contain characters and separators that are invalid or ambiguous when placed directly into URL route segments.
- The repository provides a shared internal module with base64Encode to standardize string encoding across packages.
- Adopting this shared encoding utility across performance testing harnesses ensures fixture navigation adheres to application routing requirements.

## Problem Statement

Navigating to session routes in automated performance fixtures requires encoding directory path parameters into URL-safe formats. Without a standardized encoding module, disparate fixtures risk implementing inconsistent or incompatible encoding mechanisms, causing route mismatch and navigation failures across test suites.

## Decision

1. MUST: Developers MUST inspect the repository lock artifact to verify the exact resolved version of the internal core utilities package before using its encoding functions.

## Policy Block

- MUST Developers MUST inspect the repository lock artifact to verify the exact resolved version of the internal core utilities package before using its encoding functions.

In scope:
- Constructing route paths containing directory parameters in test fixtures and harnesses
- Modules requiring URL-safe base64 encoding of filesystem paths for application navigation

Out of scope:
- General binary payload transformations unrelated to routing parameter encoding
- Standard URL query string serialization handled by platform query parameter APIs

## Rationale

- Centralizing route encoding in @opencode-ai/core/util/encode prevents divergence between application routing rules and test navigation fixtures.
- Reusing base64Encode avoids duplicating encoding logic across multiple performance and stability test suites.
- Utilizing an internal core library module establishes a consistent contract for parameter serialization across application packages.

## Consequences

Positive:
- Guarantees consistent session URL parameter formation across all performance and timeline test fixtures.
- Eliminates duplicate encoding implementations across the performance testing codebase.
- Ensures route navigation safety for directory parameters containing special characters or path separators.

Negative:
- Introduces a direct module dependency on the internal core utilities package for test harness fixtures.
- Requires test fixture updates if the underlying encoding function export signature changes in the core package.

## Alternatives

- Native platform encoding functions implemented ad-hoc within each fixture (rejected)
  Rejected because: Leads to duplicated encoding logic and potential encoding discrepancies across different test suites and environments.
  When valid: When isolated single-file scripts operate completely independently without access to workspace dependencies.
- Unencoded raw directory paths embedded directly into session route URLs (rejected)
  Rejected because: Directory separators and special filesystem characters break route matching and cause navigation failures.
  When valid: When route parameters are guaranteed to contain only alphanumeric identifiers without path separators.

## Risks

- Breaking API changes in the core encoding module could break navigation in performance test harnesses.
  Mitigation: Enforce interface contract stability through workspace type checking and automated regression verification.
  Owner: engineering team
- Inconsistent encoding formats if developers mistakenly use alternative ad-hoc encoding utilities.
  Mitigation: Establish static analysis rules to flag non-standard encoding utility usage in navigation URL construction.
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
- Verify that the submodule export for encoding utilities is declared within the internal core package boundary before referencing it in test modules.
- Encapsulate repetitive session navigation URL formatting within shared test helpers to avoid duplicated template string assembly across individual fixtures.

## Continuation Context


Verify commands:
- Discover and run the repository type-check script to verify correct import paths and function call signatures for the encoding utility.
- Discover and execute the performance test execution suite to validate that session routes with encoded directory parameters resolve properly.

Accept when:
- All imports of base64Encode resolve against the internal core utilities package without type or resolution errors.
- Automated session route navigation in performance test suites succeeds without route mismatch or URL resolution failures.

## Enforcement

- Verified by: Static analysis rules verifying module import boundaries and authorized encoding utilities
- Verified by: Automated code review during pull request inspection
- Verified by: Continuous integration test execution validating fixture navigation
- Violation handling: Pull requests introducing ad-hoc encoding routines or raw directory route parameters are blocked from merging.
- Violation handling: Violations flagged by static analysis must be resolved before proceeding with deployment.
- Exception process: Exceptions require documented technical justification and formal review by the architecture review group.