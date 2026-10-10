# @opencode-ai/plugin Environment-Based Secret Resolution for Outbound API Requests: Before Implementing Updating Opencode Plugin Integration

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Outbound HTTP requests from tool integrations built with @opencode-ai/plugin require authentication to interact with external APIs such as the GitHub REST API.
- Static analysis across multiple plugin tool modules reveals direct consumption of process environment variables to construct bearer authorization headers for external client requests.
- Tool modules encapsulate both credential extraction and HTTP client invocation using runtime fetch calls rather than delegating secret retrieval to external vault clients or central configuration brokers.

## Problem Statement

Tool integrations in @opencode-ai/plugin require authenticated access to external APIs without introducing heavyweight secret-management infrastructure or exposing credentials in source control. A consistent architectural pattern is required to govern how credentials are ingested, formatted into HTTP authorization headers, and protected across integration entry points.

## Decision

1. MUST: Before implementing or updating @opencode-ai/plugin integration logic, the consumer MUST inspect the repository dependency manifest and lock artifact to determine the exact resolved version of @opencode-ai/plugin and verify all invoked APIs against that exact version documentation.

## Policy Block

- MUST Before implementing or updating @opencode-ai/plugin integration logic, the consumer MUST inspect the repository dependency manifest and lock artifact to determine the exact resolved version of @opencode-ai/plugin and verify all invoked APIs against that exact version documentation.

In scope:
- Tool integration modules built with @opencode-ai/plugin that perform authenticated outbound HTTP requests to external service APIs.
- Runtime execution contexts where API credentials are provided through process environment variables.

Out of scope:
- Tool integrations that do not require external service authentication.
- Local development environments utilizing interactive credential prompts or user session delegation.

## Rationale

- Direct environment variable resolution leverages existing runtime execution container and process configuration mechanisms without requiring dedicated secret retrieval SDKs.
- Constructing bearer authorization headers at the outbound fetch boundary confines credential exposure to the immediate network request construction layer.
- Applying uniform header construction across tool integration boundaries prevents divergent authentication handling across distinct integration modules.

## Consequences

Positive:
- Eliminates hardcoded credentials and prevents secret persistence in version-controlled source files.
- Simplifies tool deployment and container execution by standardizing on process environment variable configuration.
- Avoids external secret store runtime dependencies, reducing latency and operational overhead for tool execution.

Negative:
- Tightly couples tool components to process environment state and specific environment variable naming.
- Duplicates HTTP header construction and request wrapping logic across individual tool integration modules in the absence of a shared client abstraction.
- Increases the risk of credential leakage if child processes or debugging logs capture the environment table.

## Alternatives

- Dedicated External Secret Vault SDK (rejected)
  Rejected because: Introduces significant dependency overhead, network latency, and infrastructure complexity for lightweight tool executions that already run within secured process environments.
  When valid: Valid when tools require dynamic secret rotation, short-lived ephemeral credentials, or granular audit logging across distributed infrastructure.
- Centralized HTTP Client Wrapper Module (deferred)
  Rejected because: While beneficial for standardizing header construction, current repository evidence indicates localized fetch construction across individual tool integration modules without a shared client module.
  When valid: Valid when tool integration volume expands sufficiently to warrant a shared internal HTTP client abstraction.

## Risks

- Missing or undefined environment variables at runtime cause unhandled request failures during external API calls.
  Mitigation: Validate environment variable availability at tool invocation time and raise explicit configuration exceptions before initiating HTTP requests.
  Owner: engineering team
- Accidental logging of request options or process environment dumps exposing sensitive authorization tokens.
  Mitigation: Ensure request logging and error reporting sanitizers mask authorization headers and omit sensitive process environment keys.
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
- Ensure process environment variables supplying API authentication tokens are mapped securely in the host runtime execution environment.
- Merge existing request headers safely by normalizing incoming header instances before appending the authorization header.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and linting scripts to verify compliance with environment variable secrets handling rules.
- Discover and run the test suite to confirm external client requests properly attach bearer authorization headers without exposing raw credentials in failure logs.

Accept when:
- All tool integration modules access credentials exclusively via process environment variables without hardcoded secrets.
- Outbound HTTP requests successfully attach the required authorization and media type headers as validated by project test suites.

## Enforcement

- Verified by: Automated static analysis and credential scanner checks executed during continuous integration evaluation.
- Verified by: Peer code review verifying adherence to secret handling standards and header injection patterns.
- Violation handling: Pull requests containing hardcoded credentials or unvalidated secret reads will be blocked from merging.
- Violation handling: Code review comments will require refactoring to comply with the environment variable authorization pattern.
- Exception process: Exceptions require documented architectural justification and sign-off from the security lead before merging.