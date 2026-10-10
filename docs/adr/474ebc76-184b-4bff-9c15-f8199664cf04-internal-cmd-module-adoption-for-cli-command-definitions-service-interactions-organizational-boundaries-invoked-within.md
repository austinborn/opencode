# Internal cmd Module Adoption for CLI Command Definitions: Service Interactions Organizational Boundaries Invoked Within

Status: proposed
Date: 2025-05-14
Deciders: Detection Pipeline (automated)

## Context

- Command-line interface commands require structured lifecycle execution, consistent option resolution, and separation from user interface rendering.
- Dispersed command scripts without a unified module abstraction introduce divergence in parameter handling, error formatting, and execution hooks.
- The codebase establishes the internal cmd module across command handlers to define a cohesive architectural boundary for command registration and orchestration.

## Problem Statement

Without a standardized core module for command handling, individual command handlers risk implementing fragmented parameter access, disparate UI rendering flows, and divergent middleware execution lifecycles across the CLI interface.

## Decision

1. SHOULD: Service interactions and organizational boundaries invoked within command handlers SHOULD execute through structured middleware wrappers coordinated by the core command architecture.

## Policy Block

- SHOULD Service interactions and organizational boundaries invoked within command handlers SHOULD execute through structured middleware wrappers coordinated by the core command architecture.

In scope:
- All command definition modules and subcommands implemented in the command-line interface package.
- Shared execution hooks and dispatch handlers for command line operations.

Out of scope:
- Pure utility libraries and shared data schemas that do not expose command-line entry points.
- Terminal user interface presentation components that operate downstream of command dispatch.

## Rationale

- Centering command definition on the internal cmd module ensures consistent dispatch, error propagation, and argument handling across all commands.
- Evidence demonstrates uniform reliance on the cmd module across command modules, confirming its role as the authoritative command boundary.
- Decoupling command definitions from direct presentation logic promotes modular testing and clean architectural boundaries.

## Consequences

Positive:
- Enforces uniform lifecycle, validation, and execution behavior across all command implementations.
- Maintains clean architectural boundaries separating command coordination from presentation and domain services.
- Simplifies onboarding and reduces boilerplate when adding new commands to the CLI package.

Negative:
- Couples all command handlers to the internal cmd module contracts.
- Modifications to the core cmd module interface require coordinated updates across consuming command implementations.
- Introduces an indirection layer compared to writing uncoordinated script functions.

## Alternatives

- Standalone scripts per command with independent argument parsers (rejected)
  Rejected because: Leads to fragmented error handling, inconsistent lifecycle execution, and duplicated setup logic across commands.
  When valid: Valid only for isolated one-off maintenance scripts outside the primary CLI package.
- Direct external command routing framework adoption without an internal abstraction layer (rejected)
  Rejected because: Tightly binds application commands directly to third-party framework semantics, hindering internal lifecycle hooks and cross-cutting middleware integration.
  When valid: Valid when building single-purpose CLIs with no internal middleware or custom service orchestration requirements.

## Risks

- Breaking changes in the internal cmd module interface could disrupt multiple command definitions simultaneously.
  Mitigation: Enforce contract testing and backward-compatible evolution for shared command interfaces.
  Owner: engineering team
- Inconsistent adoption where new commands bypass the cmd module and implement ad-hoc entry points.
  Mitigation: Enforce linting and architectural review gates across CLI command pull requests.
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
- Commands should define execution logic by implementing the standard contract exposed by the internal cmd module.
- Presentation, logging, and error messaging should delegate to UI boundary modules rather than inline console outputs.

## Continuation Context


Verify commands:
- Discover the project's test runner script from the repository manifest and execute command-module unit and integration suites.
- Discover and run the project's linter and type-checker to verify module boundary compliance across command handlers.

Accept when:
- All command implementation modules successfully import and register via the internal cmd module.
- Project verification suites and static type checks pass without module boundary or contract violations.

## Enforcement

- Verified by: Continuous integration static analysis checks verifying module import patterns across command files.
- Verified by: Pull request architectural code reviews ensuring new command handlers comply with the internal cmd module interface.
- Violation handling: Pull requests with command implementations that bypass the internal cmd module are blocked from merging.
- Violation handling: Deviations require refactoring to conform to the standard command module contracts.
- Exception process: Exceptions require documented justification and approval from the technical lead.
- Exception process: Approved exceptions must be tracked in the project documentation repository.