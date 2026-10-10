# Effect Functional Effect System Adoption for CLI Command Handlers: Command Handlers Not Bypass Effect Runtime

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Command line operations interacting with background daemon services require robust management of asynchronous lifecycles, structured error propagation, and resource cleanup.
- Multiple command handler implementations consistently import and coordinate through the Effect library to encapsulate side-effecting operations.
- Direct invocation of daemon capabilities relies on generator-driven service yields to resolve dependencies and execute service commands within a unified runtime context.

## Problem Statement

Asynchronous CLI command execution that interacts with local system processes and background daemon services often suffers from inconsistent error handling, unhandled promise rejections, and uncontrolled concurrency when using standard asynchronous idioms. The CLI command architecture requires a structured, typed effect system to isolate side-effects, manage daemon service dependencies predictably, and enforce resilient execution boundaries across all handler routines.

## Decision

1. MUST_NOT: Command handlers MUST NOT bypass Effect runtime execution boundaries to invoke daemon control operations through raw asynchronous promises.

## Policy Block

- MUST_NOT Command handlers MUST NOT bypass Effect runtime execution boundaries to invoke daemon control operations through raw asynchronous promises.

In scope:
- Command handlers coordinating daemon service lifecycles, service status inquiries, and system process state.
- Submodules within the CLI interface layer invoking background daemon services.

Out of scope:
- Bootstrap entrypoint scripts executing prior to the availability of the module runtime environment.
- Pure utility functions that perform synchronous computations without side effects.

## Rationale

- The pattern evidence demonstrates consistent adoption of the Effect library across multiple service command handlers to structure asynchronous daemon interactions.
- Adopting a unified functional effect system ensures typed error tracking and deterministic resource lifecycle management during daemon start, restart, and status checks.
- Generator-based service resolution standardizes dependency access across command actions while decoupling handlers from direct instantiation mechanics.

## Consequences

Positive:
- Standardizes error handling and asynchronous flow control across CLI service management commands.
- Enables composable, testable service interactions with explicit dependency injection through effect runtime services.
- Prevents orphaned processes and unhandled asynchronous failures when managing daemon lifecycles.

Negative:
- Introduces cognitive overhead and a steeper learning curve for engineers unfamiliar with functional effect programming paradigms.
- Requires wrapping standard system and promise-based interfaces in Effect abstractions, increasing boilerplate for simple operations.

## Alternatives

- Native Promise and Async/Await Workflows (rejected)
  Rejected because: Native promises lack typed error tracking, interruption semantics, and structured dependency injection required for reliable daemon lifecycle management.
  When valid: Valid in standalone bootstrap scripts where minimal runtime dependencies are required before package resolution.
- EventEmitter-driven Command Handlers (rejected)
  Rejected because: Event emitters decouple execution flow loosely but fail to provide typed propagation of operation completion and failure across complex asynchronous sequences.
  When valid: Valid for long-lived real-time telemetry streams where request-response semantics are not needed.

## Risks

- Team members unfamiliar with Effect syntax may introduce anti-patterns such as improper generator handling or mixing raw promises into effect chains.
  Mitigation: Establish canonical handler references within the repository and provide runtime helper wrappers that standardize effect execution.
  Owner: CLI Core Engineering Team
- Effect runtime version drift across workspace dependencies could lead to incompatible service resolution contexts.
  Mitigation: Enforce strict dependency lock compliance and shared runtime package delegation across all CLI handler modules.
  Owner: Build and Release Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Command handlers should define their primary operation as an Effect returning the expected execution result, delegating actual runtime evaluation to the centralized runtime entry point.
- When bridging standard system events or foreign asynchronous interfaces, wrap the operations in Effect adapters to preserve structured interruption and error channels.

## Continuation Context


Verify commands:
- Discover and run the project type-checking task to confirm that all Effect types and service yields resolve without compilation errors.
- Discover and execute the project test suite covering CLI command handlers to verify that daemon service lifecycles behave as expected under the Effect runtime.
- Discover and run the project static analysis lint script to ensure no forbidden asynchronous patterns bypass the defined effect boundaries.

Accept when:
- All CLI command handlers compile successfully against the resolved Effect library types without type errors.
- Service command test suites pass, demonstrating proper lifecycle transitions during daemon operations.
- Static verification confirms zero violations regarding bypassed effect boundaries in command modules.

## Enforcement

- Verified by: Continuous integration type checks verifying full Effect signature compliance across command modules.
- Verified by: Automated unit and integration test runs exercising command handlers and daemon service mocks.
- Verified by: Peer code review confirming adherence to Effect generator conventions and runtime boundary separation.
- Violation handling: Pull requests containing untyped async/await patterns in command handlers or bypassing runtime execution will fail static review gates.
- Violation handling: Type errors resulting from unresolved Effect dependencies block merge pipelines.
- Exception process: Exceptions for low-level bootstrapping scripts that execute before the runtime environment is established require documented architectural sign-off from the CLI core maintainers.