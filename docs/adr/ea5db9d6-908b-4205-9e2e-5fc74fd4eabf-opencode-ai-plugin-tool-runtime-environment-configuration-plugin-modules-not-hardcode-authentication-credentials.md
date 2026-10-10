# @opencode-ai/plugin Tool Runtime Environment Configuration: Plugin Modules Not Hardcode Authentication Credentials

Status: proposed
Date: 2025-05-14
Deciders: Detection Pipeline (automated)

## Context

- Plugin tools built with @opencode-ai/plugin interface with external services to execute platform operations.
- Interacting with external boundaries requires authentication credentials and runtime execution parameters supplied by the execution environment.
- Direct access to process environment variables provides runtime configuration to external client integrations without intermediate configuration middleware.

## Problem Statement

Plugin tools integrating with external service boundaries require runtime configuration and authentication credentials. Without a defined architectural convention for configuration sources within @opencode-ai/plugin implementations, modules risk inconsistent parameter resolution, fragmented environment access patterns, or ungrounded dependency configurations.

## Decision

1. MUST_NOT: Plugin modules MUST_NOT hardcode authentication credentials, secrets, or environment-specific endpoint configurations within tool source code.

## Policy Block

- MUST_NOT Plugin modules MUST_NOT hardcode authentication credentials, secrets, or environment-specific endpoint configurations within tool source code.

In scope:
- Modules defining plugin tools using @opencode-ai/plugin.
- External client integrations and HTTP boundaries within plugin tool definitions requiring environment authentication.

Out of scope:
- Internal utilities and helper functions that do not interact with external service boundaries or execution environment configurations.
- Static configuration constants that do not vary across runtime execution environments.

Exceptions:
- EXC-37-001: Testing or mocking plugin tools in isolated test environments where process environment variables are simulated via test context harnesses.

## Rationale

- Direct process environment variable access within @opencode-ai/plugin tool boundaries provides a lightweight mechanism for runtime parameterization without adding third-party configuration framework overhead.
- Sourcing credentials at invocation time ensures that sensitive tokens remain outside source code repositories while enabling dynamic credential rotation within the host environment.
- Standardizing header composition across plugin tools guarantees consistent authentication and content negotiation across external API integrations.

## Consequences

Positive:
- Eliminates hardcoded secrets and decouples tool logic from environment-specific credentials.
- Provides consistent authentication header propagation across external client boundaries.
- Facilitates credential management through standard process execution environments and container runtimes.

Negative:
- Tools depend directly on process environment state, which can lead to runtime execution failures if required variables are undefined.
- Testing requires explicit environment variable mocking or injection during test harness execution.

## Alternatives

- Centralized configuration management framework with schema validation (rejected)
  Rejected because: Introduces unnecessary architectural complexity and dependency overhead for lightweight plugin tools with focused external integrations.
  When valid: When application configuration spans multiple complex subsystems with interdependent configuration schemas.
- Explicit parameter injection via tool invocation arguments (rejected)
  Rejected because: Exposes sensitive credentials to caller invocation logs and requires every caller to manage and pass authentication credentials.
  When valid: When credentials vary per user request rather than per runtime host deployment.

## Risks

- Missing required process environment variables causing unhandled runtime exceptions during external service requests.
  Mitigation: Enforce pre-flight validation of expected environment variables within plugin tools before initiating network requests.
  Owner: engineering team
- Unintended exposure or logging of process environment secrets through error traces or request inspection.
  Mitigation: Ensure error handling sanitizes authorization headers and environment values before emitting logs.
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
- Construct outbound request headers by combining standard authentication tokens from process environment variables with dynamic request options.
- Validate that all external client calls define explicit error handling for missing authentication credentials.

## Continuation Context


Verify commands:
- Discover the project manifest and execute the designated test suite.
- Discover the project static analysis configuration and execute linting checks across plugin tool files.
- Discover and run static analysis rules to verify process environment variable access compliance.

Accept when:
- All plugin tools successfully resolve required configuration from process environment variables and pass automated test suites.
- Static analysis confirms no hardcoded credentials or unvalidated external client invocations exist in plugin modules.

## Enforcement

- Verified by: Automated test execution in continuous integration pipelines.
- Verified by: Static analysis checks verifying environment variable access patterns.
- Verified by: Peer code review for all new and modified plugin tool implementations.
- Violation handling: Pull request checks fail if hardcoded credentials or improper environment access patterns are detected.
- Violation handling: Violations must be remediated to align with configuration rules prior to merging.
- Exception process: Submit an architectural exception request detailing the necessity of non-standard configuration sourcing.
- Exception process: Obtain approval from the architecture lead and document the exception in the project repository.