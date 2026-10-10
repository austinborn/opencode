# bun Core Library Adoption: Repository Automation Scripts Build Procedures Platform

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Workflow scripts and automation services across the repository require native platform APIs for file system access, process execution, and network coordination
- Disparate modules previously relied on fragmented combinations of platform utilities and third-party helper abstractions across repository boundaries
- Direct integration with the bun core library interface provides a unified runtime surface across execution scripts and service handlers
- Standardizing on the bun module contract centralizes core input and output operations, process workflows, and execution bindings

## Problem Statement

Managing automation routines, distribution scripts, and platform service coordination through heterogeneous third-party utility packages creates inconsistent runtime behavior, fragmented error handling, and maintenance overhead across repository modules. The repository requires a unified, high-performance core library abstraction for platform operations without introducing redundant external dependencies or divergent platform bindings.

## Decision

1. MUST: Repository automation scripts, build procedures, and platform service components MUST standardize on the bun core library module for runtime execution primitives and platform bindings.

## Policy Block

- MUST Repository automation scripts, build procedures, and platform service components MUST standardize on the bun core library module for runtime execution primitives and platform bindings.

In scope:
- Automation scripts, build workflows, and publication pipelines across repository packages
- Platform service components and entry points coordinating runtime operations and external integration boundaries

Out of scope:
- Client-side browser applications and portable libraries intended for multi-runtime distribution outside the primary platform environment
- Pure algorithmic utility modules that have no platform input, output, or execution dependencies

## Rationale

- Static analysis identifies consistent adoption of the bun core module across distinct functional domains, including build compilation, package publication, and automation service endpoints
- Standardizing on the bun core module eliminates redundant utility abstractions and aligns scripting infrastructure with native high-performance runtime primitives
- Consolidating core platform operations around a single established library interface ensures uniform error handling and consistent lifecycle management across repository boundaries

## Consequences

Positive:
- Eliminates duplicate third-party utility dependencies for platform input, output, and process management
- Provides consistent native runtime APIs across automation workflows and service coordination entry points
- Reduces maintenance complexity by establishing a unified interface convention across workspace packages

Negative:
- Couples repository automation and script execution to the specific interface contracts of the bun module ecosystem
- Requires developers to verify platform compatibility and locked API definitions before consuming newer runtime capabilities
- Limits script portability to runtime environments that support the bun core library bindings

## Alternatives

- Standardize on generic multi-runtime polyfill libraries and heterogeneous third-party wrappers (rejected)
  Rejected because: Introduces unnecessary dependency bloat, fragmented API surfaces, and performance overhead across build and automation pipelines
  When valid: When modules must execute interchangeably across disparate runtime platforms without relying on unified platform bindings
- Rely exclusively on legacy modular utility packages installed per-component (rejected)
  Rejected because: Creates version drift, inconsistent error handling patterns, and divergent maintenance across independent package scripts
  When valid: When maintaining isolated legacy services that cannot be upgraded to modern runtime module standards

## Risks

- Upstream changes to the core library interface could cause breaking changes in build scripts and automation entry points
  Mitigation: Pin dependency resolutions in the authoritative lock artifact and validate API contracts against documentation before updates
  Owner: Platform Engineering
- Inadvertent usage of unsupported runtime features in shared modules intended for broader distribution
  Mitigation: Enforce boundary checks and linting rules in automated continuous integration workflows to restrict module usage to designated script and service scopes
  Owner: Architecture Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Audit existing automation scripts and service handlers to replace redundant external utility imports with native bun module interfaces
- Verify that all script execution environments and continuous integration pipelines supply the necessary platform runtime capable of resolving the bun module interface

## Continuation Context


Verify commands:
- git grep -nE 'from ["\x27]bun["\x27]'
- # Discover the repository manifest and execute the designated test verification suite
- # Discover the lock resolution artifact and verify all resolved dependency versions match the execution environment

Accept when:
- All script and platform service imports of the bun module resolve without runtime or compile-time resolution errors
- Repository verification and automated validation suites pass across all affected packages
- The active execution environment matches the authoritative lock resolution artifact without unresolved dependency mismatches

## Enforcement

- Verified by: Automated continuous integration pipeline checks and test suite runs
- Verified by: Code review verification of module imports and lock artifact updates
- Violation handling: Pull requests introducing redundant third-party wrappers or invalid runtime imports will fail automated checks and require remediation
- Exception process: Formal architecture review and documented approval for modules requiring multi-runtime cross-platform distribution