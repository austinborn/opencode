# Adoption of @opencode-ai/core/util/glob for Configuration File Discovery: Configuration Loaders Requiring Filesystem Pattern Matching

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The workspace maintains multiple configuration subsystems responsible for discovering and loading configurations across agent, plugin, and command domains.
- Filesystem pattern matching is required across configuration loaders to locate user-defined and system-defined configuration artifacts.
- Consolidating pattern matching operations into a centralized internal utility module prevents divergence in wildcard handling, ignore rules, and cross-platform path resolution.

## Problem Statement

Configuration loaders across disparate domains require a consistent, reliable mechanism to discover files matching configuration patterns on disk. Divergent implementations or direct usage of differing third-party libraries across subsystems lead to inconsistent pattern evaluation, platform-specific path discrepancies, and duplicated discovery logic.

## Decision

1. MUST: Configuration loaders requiring filesystem pattern matching MUST resolve matching files using the @opencode-ai/core/util/glob module rather than ad-hoc filesystem traversal or external globbing libraries.

## Policy Block

- MUST Configuration loaders requiring filesystem pattern matching MUST resolve matching files using the @opencode-ai/core/util/glob module rather than ad-hoc filesystem traversal or external globbing libraries.

In scope:
- Configuration loaders and discovery modules locating configuration artifacts across the workspace.
- Subsystem entry point resolvers requiring filesystem pattern matching.

Out of scope:
- Runtime file operations not related to configuration discovery or subsystem registration.
- External plugins or standalone scripts operating outside the workspace build and dependency graph.

## Rationale

- Adopting @opencode-ai/core/util/glob as the standard file matching mechanism ensures uniform pattern semantics across agent, plugin, and command configuration subsystems.
- Centralizing filesystem traversal logic into a shared core package isolates platform-specific path handling and reduces third-party dependency surface area across packages.
- The pattern is consistently evidenced across multiple configuration loading modules in the codebase.

## Consequences

Positive:
- Standardizes filesystem discovery semantics and pattern syntax across all configuration loader domains.
- Eliminates duplicate globbing logic and disparate third-party dependencies across the workspace.
- Simplifies maintenance by centralizing file matching optimizations and bug fixes in a single shared module.

Negative:
- Creates a centralized internal dependency where contract alterations propagate across agent, plugin, and command loaders.
- Requires new configuration subsystems to conform to the shared utility interface rather than choosing arbitrary file resolution mechanisms.

## Alternatives

- Direct third-party glob library imports within each configuration loader module (rejected)
  Rejected because: Introduces fragmented dependency versions, inconsistent path resolution behaviors, and maintenance overhead across configuration subsystems.
  When valid: When prototyping isolated standalone utilities outside the primary workspace architecture.
- Native recursive directory traversal using platform runtime primitives (rejected)
  Rejected because: Requires reimplementing pattern matching, ignore rules, and symlink handling redundantly across each configuration loader.
  When valid: In environments where zero external or shared module dependencies are strictly enforced.

## Risks

- Breaking changes to @opencode-ai/core/util/glob signatures affect all configuration loaders simultaneously.
  Mitigation: Enforce strict workspace type checking and automated regression test coverage across all consuming configuration subsystems.
  Owner: engineering team
- Performance bottlenecks when executing glob operations over deeply nested directory structures.
  Mitigation: Constrain glob search paths to targeted configuration root directories and avoid broad unindexed wildcard scans.
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
- Inspect the workspace package hierarchy to locate the internal utility module export definition for globbing operations before introducing new discovery queries.
- Ensure pattern matching arguments passed to the utility match expected schema boundaries and handle empty match results gracefully without throwing unhandled exceptions.

## Continuation Context


Verify commands:
- Discover the project test script from the package configuration manifest and execute unit and integration suites covering configuration loading modules.
- Identify the workspace lint and dependency boundary check task to ensure all configuration modules import file matching routines solely from the approved internal utility module.
- Execute the project type-checking command across workspace packages to verify that all invocations of the globbing utility conform to exported type signatures.

Accept when:
- All configuration loaders resolve file discovery patterns exclusively through the internal @opencode-ai/core/util/glob module without external globbing dependencies.
- Automated test suites for agent, plugin, and command configuration subsystems pass with zero regressions.
- Static analysis and type validation report zero errors across workspace modules consuming the pattern matching utility.

## Enforcement

- Verified by: Automated static analysis and linting rules that detect and flag disallowed third-party glob imports in configuration packages.
- Verified by: Peer code review verification during pull request evaluations for configuration loading logic.
- Violation handling: Pull requests containing unauthorized filesystem matching libraries or bypasses of the core utility module will fail continuous integration checks and require refactoring.
- Exception process: Architectural exceptions require formal review and approval by the platform engineering team with documented justification for why the core utility cannot satisfy the requirement.