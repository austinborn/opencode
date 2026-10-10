# Effect Library Adoption for Service Command Handlers: Command Handlers Route Execution Through Shared

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- CLI command handlers must coordinate background service lifecycles including starting, stopping, restarting, and querying service status.
- Managing background service operations with ad-hoc asynchronous logic leads to inconsistent error handling and fragmented dependency management across commands.
- The codebase standardizes on the Effect library to structure asynchronous operations, dependency injection, and service lifecycles.

## Problem Statement

CLI command handlers require consistent coordination of daemon lifecycles, error handling, and runtime dependency resolution without relying on fragmented asynchronous side effects.

## Decision

1. SHOULD: Command handlers SHOULD route execution through the shared application runtime rather than bootstrapping custom execution environments.

## Policy Block

- SHOULD Command handlers SHOULD route execution through the shared application runtime rather than bootstrapping custom execution environments.

In scope:
- Command handlers coordinating daemon service operations and operational status checks.
- CLI handlers interfacing with internal runtime and service modules.

Out of scope:
- Pure utility functions that perform synchronous computations without side effects.
- Presentation-only formatting helpers that do not interact with background services or runtimes.

## Rationale

- Adopting effect/Effect provides a disciplined, composable model for handling asynchronous side effects across command handlers.
- Generator-based Effect programs enable seamless dependency resolution of daemon services through yield expressions.
- Centralizing service coordination under Effect ensures uniform failure management and runtime predictability.

## Consequences

Positive:
- Standardizes asynchronous side-effect and service lifecycle management across CLI command handlers.
- Enables uniform error handling and dependency resolution via the runtime environment.
- Isolates external daemon communication and operating system interactions within managed effect boundaries.

Negative:
- Requires developers to learn and navigate functional effect management and generator syntax.
- Introduces additional architectural layer between command invocation and background daemon interaction.

## Alternatives

- Direct imperative asynchronous promises for service lifecycle management (rejected)
  Rejected because: Lacks unified effect orchestration, composable dependency resolution, and structured error handling across concurrent daemon operations
  When valid: Valid in standalone utility scripts that perform isolated one-off asynchronous tasks without service dependencies
- Callback-driven process execution wrappers (rejected)
  Rejected because: Introduces deeply nested control flow and uncoordinated error recovery semantics
  When valid: Valid when integrating with legacy low-level process interfaces that do not support modern effect abstractions

## Risks

- Steep learning curve associated with functional effect systems and generator-based effect comprehension.
  Mitigation: Provide standardized handler templates and runtime integration documentation across the codebase.
  Owner: Engineering Team
- Accidental mixing of unmanaged promises with Effect generator yields leading to unhandled runtime rejections.
  Mitigation: Enforce strict static type checking and lint rules across all command handler modules.
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
- Developers implementing command handlers must structure service interactions as Effect generator programs yielding service instances from the runtime environment.
- Command logic should delegate daemon process control and status queries to the injected daemon service rather than invoking operating system calls directly within the handler.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and type verification task to confirm proper effect/Effect typing across all command handlers.
- Discover and execute the test runner suite to validate that service lifecycle commands properly dispatch through the daemon service.

Accept when:
- All command handlers pass static type analysis with fully resolved effect/Effect types and runtime imports.
- Integration and unit test suites execute successfully with service lifecycle commands yielding expected effects without unhandled errors.

## Enforcement

- Verified by: Automated static type analysis and linting verification in continuous integration workflows.
- Verified by: Peer code reviews inspecting all command handler implementations for adherence to Effect conventions.
- Violation handling: Pull requests that introduce unmanaged side effects or bypass the Effect runtime will fail automated checks.
- Violation handling: Non-compliant handlers must be refactored into Effect generator workflows before integration.
- Exception process: Exceptions require documented architectural justification explaining why Effect workflow wrapping is impractical, followed by review approval.