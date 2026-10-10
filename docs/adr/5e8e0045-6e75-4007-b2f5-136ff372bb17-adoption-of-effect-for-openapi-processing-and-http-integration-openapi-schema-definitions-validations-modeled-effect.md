# Adoption of Effect for OpenAPI Processing and HTTP Integration: Openapi Schema Definitions Validations Modeled Effect

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- OpenAPI tooling requires structured HTTP invocation primitives, schema parsing mechanisms, and functional effect coordination.
- The codebase couples OpenAPI type definitions, specification parsing, and runtime invocation to the Effect functional programming library ecosystem.
- Schema modeling and validation rely on Effect schema parsing modules to normalize JSON schema definitions from remote API specifications.
- HTTP communication layers use unstable HTTP subpaths provided by the Effect ecosystem to manage network operations.

## Problem Statement

OpenAPI specification ingestion and execution require deterministic error handling, structured schema parsing, and composable HTTP execution primitives. Standard imperative networking and dynamic validation approaches introduce runtime type drift and unhandled edge-case failures across disparate API endpoints.

## Decision

1. MUST: OpenAPI schema definitions and validations MUST be modeled using Effect JsonSchema modules rather than external schema conversion runtimes.

## Policy Block

- MUST OpenAPI schema definitions and validations MUST be modeled using Effect JsonSchema modules rather than external schema conversion runtimes.

In scope:
- OpenAPI specification ingestion, type definitions, and HTTP runtime execution modules.
- Schema parsing and validation components interfacing with external API tool contracts.

Out of scope:
- Components and subsystems independent of OpenAPI specifications and external HTTP tool integrations.
- Internal utilities that do not manage network execution or structured external data contracts.

## Rationale

- Static evidence demonstrates cross-module adoption of Effect core, JsonSchema, and HTTP modules across OpenAPI specification parsing, type definitions, and execution layers.
- Effect establishes unified typed failure channels and compositional execution flows, eliminating fragmented async handling across dynamic API integrations.
- Consolidating schema processing under Effect JsonSchema ensures alignment between compile-time type representations and runtime OpenAPI contract validations.

## Consequences

Positive:
- Provides deterministic, typed error handling and functional composition across OpenAPI tool execution pipelines.
- Unifies schema parsing, validation, and serialization under a single functional framework.
- Eliminates divergent HTTP client implementations across OpenAPI integration modules.

Negative:
- Imposes a steep learning curve requiring familiarity with functional programming and Effect paradigms.
- Introduces upstream breaking change risk due to coupling with unstable subpath exports of the library.
- Increases dependency footprint across modules consuming OpenAPI tool capabilities.

## Alternatives

- Standard Fetch API with imperative promise chaining (rejected)
  Rejected because: Lacks typed error channels, unified cancellation, and composable schema validation primitives required for complex API integrations.
  When valid: Valid in minimal environments where external dependencies must be strictly avoided and HTTP interactions are trivial.
- Third-party HTTP client libraries coupled with standalone schema validators (rejected)
  Rejected because: Fragments schema validation, network execution, and error handling across independent library lifecycles rather than a unified effect runtime.
  When valid: Valid when existing infrastructure already standardizes on alternative validation ecosystems.

## Risks

- Reliance on unstable subpath exports can lead to breaking changes during minor dependency updates.
  Mitigation: Isolate unstable subpath imports within internal adapter modules and enforce strict lock-version verification before updating dependencies.
  Owner: engineering team
- Steep learning curve of the functional effect system may slow developer onboarding and introduce misuse of primitives.
  Mitigation: Establish internal architectural documentation, code patterns, and pair programming during implementation.
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
- Derive schema models using the functional schema constructors provided by the adopted ecosystem and avoid manual type assertions.
- Ensure all HTTP calls initiated through the OpenAPI tool pipeline are wrapped in appropriate Effect runtime context handlers.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and type-checking scripts to verify Effect import consistency and type correctness across OpenAPI modules.
- Discover and run the repository automated test suites covering OpenAPI schema parsing and HTTP runtime execution.

Accept when:
- Static type analysis passes without errors across all OpenAPI type and runtime integration modules.
- All automated integration and unit test suites covering OpenAPI tool execution pass successfully.

## Enforcement

- Verified by: Automated continuous integration checks validating static types and running test suites.
- Verified by: Peer code review verifying adherence to Effect conventions and boundary encapsulation.
- Violation handling: Pull requests introducing unhandled promises, raw fetch calls, or unapproved schema libraries in OpenAPI modules are blocked from merging.
- Violation handling: Code review comments identify violations and require refactoring to conform to Effect architectural patterns.
- Exception process: Engineers must submit an architectural exception request detailing why standard Effect primitives cannot fulfill the integration requirements, approved by the engineering team.