# Effect Adoption for OpenAPI Tool Execution and Schema Representation: Openapi Schema Resolution Parameter Validation Dynamic

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- OpenAPI schema ingestion and dynamic HTTP request invocation require predictable data validation, structured error management, and composable execution workflows.
- The codebase establishes a standardized approach for schema parsing and HTTP client communication using the Effect ecosystem across OpenAPI integration modules.
- Core Effect primitives together with Effect HTTP and Effect JsonSchema sub-modules isolate schema translation, parameter extraction, and remote service invocation.

## Problem Statement

Building OpenAPI client tools requires coordinating schema transformation, parameter validation, and network execution across heterogeneous API specifications without scattering imperative validation logic or relying on uncoordinated HTTP client primitives.

## Decision

1. MUST: OpenAPI schema resolution, parameter validation, and dynamic HTTP request execution MUST use the Effect library and its associated HTTP and JsonSchema modules as the core operational foundation.

## Policy Block

- MUST OpenAPI schema resolution, parameter validation, and dynamic HTTP request execution MUST use the Effect library and its associated HTTP and JsonSchema modules as the core operational foundation.

In scope:
- OpenAPI specification ingestion, schema parsing, and parameter resolution modules.
- Dynamic HTTP request execution pipelines generating tool invocations from OpenAPI descriptions.

Out of scope:
- Static internal utility functions that do not participate in OpenAPI schema transformation or remote HTTP execution.
- Components residing outside OpenAPI execution boundaries that do not interact with OpenAPI specifications.

## Rationale

- Adopting Effect provides structured concurrency, typed error channels, and composable execution pipelines that prevent unhandled asynchronous rejections.
- Using Effect JsonSchema standardizes schema reflection across OpenAPI entities and enables deterministic transformation to tool schemas.
- Consolidating HTTP invocation on Effect HTTP enables uniform request encoding, header composition, and unified network failure classification across all operations.

## Consequences

Positive:
- Unified error handling and structured failure tracking across schema parsing and network invocation.
- Strong composability and type safety for dynamic request construction and streaming response consumption.
- Reduced boilerplate in schema translation by reusing standardized Effect schema abstractions.

Negative:
- Increased cognitive overhead and learning curve for contributors unfamiliar with functional effect systems.
- Potential vulnerability to API surface churn given the evolving nature of Effect HTTP modules.

## Alternatives

- Native Fetch with Custom Promise Pipelines (rejected)
  Rejected because: Lacks built-in structured error channels, typed schema validation integration, and requires extensive ad-hoc error handling boilerplate.
  When valid: Lightweight single-purpose integrations that do not require complex schema translation or dynamic request planning.
- Standard Third-Party HTTP Clients with Imperative Schema Parsers (rejected)
  Rejected because: Couples network transport to untyped imperative validation routines, increasing surface area for uncaught runtime errors during plan generation.
  When valid: Legacy subsystems with existing non-Effect client wrappers.

## Risks

- Adoption of evolving Effect HTTP modules may require updates across calling modules if upstream APIs undergo breaking changes.
  Mitigation: Encapsulate Effect HTTP client operations behind internal OpenAPI runtime boundaries and pin dependency versions strictly via lock resolution artifacts.
  Owner: engineering team
- Steep learning curve for engineers accustomed to imperative asynchronous patterns.
  Mitigation: Provide internal architectural patterns and reference implementations within the OpenAPI subsystem illustrating standard plan construction and execution patterns.
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
- Construct OpenAPI runtime plans by transforming schema parameters through Effect JsonSchema primitives before executing network calls.
- Ensure all network execution passes through Effect HTTP client layers and converts unexpected response structures into domain-level tool errors.

## Continuation Context


Verify commands:
- Discover the project test execution runner from the dependency manifest and run the test suite covering OpenAPI spec parsing and runtime execution.
- Discover the static analysis and type verification script from the project manifest and execute type checking across OpenAPI modules.

Accept when:
- All OpenAPI specification parsing and runtime execution test suites execute successfully without errors.
- Static type analysis passes with zero diagnostic errors across all OpenAPI schema and runtime source files.

## Enforcement

- Verified by: Automated continuous integration pipelines executing type checking and unit test suites.
- Verified by: Peer code review verifying adherence to Effect idioms and absence of unmanaged network invocations.
- Violation handling: Continuous integration builds fail upon type or test mismatches.
- Violation handling: Pull requests bypassing Effect runtime primitives in OpenAPI modules are blocked during code review until refactored.
- Exception process: Exceptions require documented justification submitted to the architecture review team explaining why Effect primitives cannot meet specific performance or protocol constraints.