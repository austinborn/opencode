# Standardize Model Provider Implementation on @ai-sdk/provider-utils: Response Converters Schema Transformations Route Through

Status: proposed
Date: 2025-02-18
Deciders: Detection Pipeline (automated)

## Context

- Provider implementations and tool wrappers require consistent utilities for input validation, error parsing, and message structuring across language model integrations.
- Provider interfaces frequently encounter divergent upstream payload formats and error structures requiring standardized translation layers.
- Thirteen distinct modules across provider responses, chat language models, and tool definitions adopt @ai-sdk/provider-utils as a common foundation.

## Problem Statement

Without a unified provider utility foundation, custom model integrations and tool response handlers risk duplicating parsing logic, error normalization routines, and request serialization across language model adapters. Inconsistent handling of provider errors and input transforms leads to interface drift and fragile maintenance across provider implementations.

## Decision

1. SHOULD: Response converters and schema transformations SHOULD route through standard provider utility helpers to ensure uniform handling of provider-specific message payloads.

## Policy Block

- SHOULD Response converters and schema transformations SHOULD route through standard provider utility helpers to ensure uniform handling of provider-specific message payloads.

In scope:
- Implementation of provider language model adapters, chat models, and response generators.
- Tool definitions, parameter schemas, and execution converters interacting with provider APIs.
- Error handling and parsing utilities across the provider integration boundary.

Out of scope:
- Client-side user interface components consuming finalized model completions.
- Standalone domain business logic decoupled from language model provider communications.

## Rationale

- The pattern is substantiated by thirteen distinct provider modules uniformly importing @ai-sdk/provider-utils for shared operations.
- Centralizing on a single provider utility package prevents divergent error translation logic and eliminates duplicate request parsing across tool handlers.
- Aligning with the provider ecosystem standardizes payload structures across streaming, chat, and tool execution pipelines.

## Consequences

Positive:
- Uniform request transformation and response validation behavior across all provider model bindings.
- Reduced boilerplate and duplicate error mapping code within individual tool and response modules.
- Simplified maintenance when adapting to upstream provider specification updates.

Negative:
- Tight coupling to the provider utility package API surface and its upstream breaking change cycles.
- Potential constraints if non-standard provider edge cases diverge from standard utility abstractions.

## Alternatives

- Author bespoke internal parsing and error transformation utilities for each provider module (rejected)
  Rejected because: Increases maintenance burden, leads to divergent error structures across tools, and duplicates utility logic already provided by the ecosystem.
  When valid: Valid only if external dependencies are strictly prohibited or proprietary protocols require non-standard wire framing.
- Rely solely on generic validation primitives without dedicated provider utility abstractions (rejected)
  Rejected because: Generic schema validation alone does not address provider response stream framing, standardized error envelopes, or provider-specific protocol conversions.
  When valid: Valid in lightweight standalone scripts where complete provider plumbing is unnecessary.

## Risks

- Upstream breaking changes in @ai-sdk/provider-utils could disrupt multiple provider modules simultaneously.
  Mitigation: Lock resolved dependency versions, verify changelogs during updates, and maintain automated test suites covering provider conversion contracts.
  Owner: Engineering Team
- Provider-specific non-standard features may not be immediately supported by standard utility abstractions.
  Mitigation: Design provider response layers with extensibility hooks that allow clean extension when standard utilities require augmentation.
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
- Check the resolved version in the project lock artifact to ensure compatibility before importing helper functions from the provider utilities module.
- Structure tool parameter schemas and provider error translators to utilize the standardized interfaces exposed by the provider utility library.

## Continuation Context


Verify commands:
- Discover and run the project test runner to execute the provider test suites across all model adapters.
- Discover and run the static analysis script to ensure all provider and tool modules adhere to dependency conventions.
- Discover and run the type-checking script to verify interface compatibility against the resolved dependency version.

Accept when:
- All provider adapter and tool integration test suites pass without runtime errors.
- Static analysis validates that provider utilities are consistently imported and no duplicate parsing logic exists.
- Type checks pass cleanly with no type signature mismatches against the provider utility declarations.

## Enforcement

- Verified by: Automated continuous integration pipelines executing type checks, unit tests, and linting rules.
- Verified by: Peer code review for any change modifying provider adapters or tool integration boundaries.
- Violation handling: Pull requests introducing duplicate utility implementations or bypassing standard provider utilities will be blocked by review and continuous integration checks.
- Exception process: Deviations require an architecture review proposal detailing technical constraints that prevent the use of standard provider utilities, accompanied by technical lead approval.