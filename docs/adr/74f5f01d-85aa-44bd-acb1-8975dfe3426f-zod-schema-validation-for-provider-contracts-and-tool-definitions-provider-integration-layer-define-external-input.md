# Zod Schema Validation for Provider Contracts and Tool Definitions: Provider Integration Layer Define External Input

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Provider communication interfaces and tool execution pipelines receive untyped or semi-structured data from external sources and model responses that require strict boundary verification.
- Static compile-time type definitions do not enforce data validity at runtime, leaving system boundaries susceptible to malformed tool parameters, invalid option flags, and divergent provider responses.
- Core integration modules require a uniform schema validation mechanism that couples runtime validation with static type inference across provider configurations, error objects, and tool specifications.

## Problem Statement

Unvalidated data passing between external provider APIs, language model outputs, and execution tools introduces runtime instability and contract drift across integration boundaries. Without a unified runtime schema definition and validation mechanism, each integration module would have to implement ad-hoc structural checks, increasing parsing divergence and allowing malformed payloads to degrade system reliability.

## Decision

1. MUST: The provider integration layer MUST define all external input boundaries, tool execution parameters, provider options, and response structures using declarative Zod schemas.

## Policy Block

- MUST The provider integration layer MUST define all external input boundaries, tool execution parameters, provider options, and response structures using declarative Zod schemas.

In scope:
- All provider integration modules handling external communication, request formatting, and response parsing.
- All tool definitions specifying input argument schemas, execution actions, and output structures.
- All error adapters and option configuration parsers interfacing with language model endpoints.

Out of scope:
- Internal utility functions that operate strictly within trusted system boundaries and do not ingest external data.
- Performance-critical inner loops where payloads have already undergone boundary verification.

## Rationale

- Declarative schema definition bridges runtime input validation with compile-time type inference, eliminating synchronization discrepancies between contracts and runtime values.
- Centralizing contract validation around Zod across provider modules prevents malformed tool arguments and malformed model responses from causing unhandled runtime failures downstream.
- Standardizing on discriminated unions for tool actions guarantees exhaustive validation for polymorphic payloads across diverse tool execution environments.

## Consequences

Positive:
- Guarantees runtime boundary integrity by intercepting and rejecting malformed payloads before they reach core business logic.
- Synchronizes static type definitions directly with runtime validation schemas, eliminating manual type duplication drift.
- Standardizes error handling across provider adapters through predictable structural validation failure contracts.

Negative:
- Introduces minor CPU overhead during execution for complex recursive schema parsing on high-throughput paths.
- Requires engineers to author and maintain strict schema definitions for every new tool parameter or provider configuration field.

## Alternatives

- Manual runtime type guards and custom assertion functions (rejected)
  Rejected because: Manual type assertions lack automatic static type derivation, are error-prone to maintain across changing external APIs, and duplicate parsing logic across modules.
  When valid: Valid only in constrained environments where external dependencies are strictly prohibited.
- Compile-time only type assertions without runtime validation (rejected)
  Rejected because: Compile-time types are erased at runtime and provide zero protection against malformed external API responses or unexpected tool arguments.
  When valid: Valid strictly for internal module interfaces where all callers are proven to be internal and type-checked.

## Risks

- Parsing overhead may degrade throughput on high-frequency streaming response chunks.
  Mitigation: Apply schema parsing at discrete boundary transitions rather than recursively on micro-chunks, validating consolidated payloads once.
  Owner: Engineering Team
- External provider response changes may cause unexpected validation rejections if schemas are overly restrictive.
  Mitigation: Design provider response schemas with optional and nullish attributes where upstream fields are subject to provider variation.
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
- Construct tool action schemas using discriminated unions on a discriminator property to ensure clear separation and type narrowing across tool operations.
- Export static inferred types derived directly from schema instances to provide strongly typed interfaces throughout dependent modules.

## Continuation Context


Verify commands:
- Discover the project test runner and execute the test suite covering provider and tool validation modules.
- Discover the project static analysis suite and verify that all inferred types and schema definitions pass type checking without errors.

Accept when:
- All unit and integration tests covering provider contract schemas and tool input validation pass without failure.
- Static type analysis completes with zero type errors, confirming schema inference matches downstream consumption signatures.
- Invalid payloads passed to boundary entry points consistently produce structured validation rejection errors.

## Enforcement

- Verified by: Automated continuous integration checks executing repository test and static analysis workflows on all pull requests.
- Verified by: Peer code review verifying that new tool parameters and provider boundaries declare corresponding runtime schemas.
- Violation handling: Pull requests lacking runtime schema validation for boundary data or containing manual duplicate types are blocked from merging.
- Violation handling: Validation test failures in continuous integration trigger build rejection requiring schema alignment before re-testing.
- Exception process: Exceptions for performance-critical inner loops must be submitted with benchmark evidence and require approval from the architecture review board.