# @opencode-ai/plugin External Client Integration Pattern: External Client Dispatchers Declare Explicit Accept

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Tool extensions within the codebase utilize @opencode-ai/plugin to integrate with external platform services.
- External HTTP requests require standardized authorization headers and media type specifications to communicate reliably with remote endpoints.
- Static analysis identifies a uniform client boundary implementation across tool definitions that dispatches HTTP requests while merging custom headers with default credentials.

## Problem Statement

Without a formalized architectural standard for external HTTP client boundaries in @opencode-ai/plugin tool modules, individual tool integrations risk duplicating header construction, mismanaging credential injection from runtime environments, and creating inconsistent request handling for external API interactions.

## Decision

1. MUST: External client dispatchers MUST declare explicit Accept and Content-Type request headers according to target API specifications.

## Policy Block

- MUST External client dispatchers MUST declare explicit Accept and Content-Type request headers according to target API specifications.

In scope:
- All tool and plugin modules implementing external API integrations with @opencode-ai/plugin.
- Client boundaries dispatching HTTP requests to remote platform services.

Out of scope:
- Internal in-process function invocations that do not traverse network boundaries.
- Mock client fixtures used exclusively in isolated unit tests.

Exceptions:
- EXC-26-001: External endpoints require non-Bearer authentication schemes or unauthenticated public access.

## Rationale

- Consolidating external client header construction ensures uniform security credential injection from the runtime environment across all @opencode-ai/plugin integrations.
- Explicit header normalization guarantees compatibility between standard Header objects and plain configuration records.
- Eliminating external SDK dependencies for direct endpoint requests minimizes bundle overhead and version drift across tool implementations.

## Consequences

Positive:
- Uniform request configuration and header normalization across all plugin tool integrations.
- Secure, consistent retrieval of authorization credentials from runtime environment variables.
- Minimal external dependency footprint by relying on standardized client boundary dispatch functions.

Negative:
- Requires manual maintenance of request payload structures and endpoint URL paths without third-party generated client SDKs.
- Lacks built-in connection pooling, automated request retries, or rate limit backoff unless explicitly implemented in boundary helpers.

## Alternatives

- Adopting a heavy third-party platform client SDK (rejected)
  Rejected because: Introduces significant dependency footprint and potential version synchronization conflicts for narrow endpoint integration requirements.
  When valid: When tool integrations require comprehensive coverage of broad platform API surfaces and automated pagination across numerous service resources.
- Ad-hoc inline fetch calls in each tool function without header normalization (rejected)
  Rejected because: Duplicates credential retrieval logic and risks inconsistent header formatting across tool definitions.
  When valid: Never valid in production tool modules.

## Risks

- Missing or undefined environment variables at runtime leading to unauthenticated request failures.
  Mitigation: Validate the presence of required environment tokens before dispatching boundary requests and raise informative configuration errors.
  Owner: Engineering Team
- Upstream API rate limiting causing tool execution timeouts due to absence of automated backoff.
  Mitigation: Implement response status checking and exponential backoff handling within the client boundary dispatcher.
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
- Construct client boundary helper functions that accept relative endpoint paths and standard request options, pre-populating authorization and media type headers.
- Handle request header merging by converting incoming Header instances with object entry transformation prior to spreading defaults.

## Continuation Context


Verify commands:
- Discover and execute the project validation script from the dependency manifest to verify external client boundary compliance.
- Run the repository test harness to confirm request header normalization and credential injection across client invocations.

Accept when:
- All external client boundary invocations consistently inject required authorization headers and normalize header instances prior to dispatch.
- Repository test suites and validation scripts pass with zero unresolved external client boundary violations.

## Enforcement

- Verified by: Automated static analysis verifying external request dispatch conventions.
- Verified by: Repository test suites validating credential injection and header normalization.
- Verified by: Peer code review for all new and modified plugin tool modules.
- Violation handling: Code reviews containing inline, non-standard external client calls or hardcoded credentials will be blocked.
- Violation handling: Flagged violations must refactor external calls to conform to the standardized client boundary pattern.
- Exception process: Submit an architectural review request detailing the endpoint requirements that necessitate non-standard client behavior.