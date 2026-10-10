# Adoption of @opencode-ai/plugin for Tool Extensions: External Service Requests Executed Within Plugin

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Tool integration extensions require a standardized framework interface to register capabilities and interact with external systems.
- The codebase adopts @opencode-ai/plugin across multiple tool definition modules to establish consistent plugin integration points.
- External network interactions within these plugins rely on environment-driven authentication tokens and standardized HTTP request headers.

## Problem Statement

Without a standard plugin module, tool extensions risk implementing divergent interface boundaries, ad-hoc configuration loading mechanisms, and inconsistent remote API communication protocols.

## Decision

1. MUST: External service requests executed within plugin modules MUST source authentication credentials and dynamic parameters through runtime environment configuration.

## Policy Block

- MUST External service requests executed within plugin modules MUST source authentication credentials and dynamic parameters through runtime environment configuration.

In scope:
- Tool extension definitions and capability modules implemented within the repository.
- Network client calls and environment credential handling inside tool plugins.

Out of scope:
- Internal utility functions and shared domain logic decoupled from plugin runtimes.
- Third-party integrations requiring non-HTTP protocols or proprietary binary transports.

Exceptions:
- EXC-20-001: An external service interaction requires complex streaming, binary RPC, or vendor-mandated SDK wrappers that cannot be performed via standard HTTP clients.

## Rationale

- Adopting @opencode-ai/plugin establishes a uniform contract for agent-executable tools, ensuring consistent lifecycle and invocation ergonomics.
- Static analysis confirms consistent usage of @opencode-ai/plugin alongside direct HTTP client boundaries and environment variable extraction across multiple tool implementations.
- Direct HTTP calls with explicit header configuration minimize dependency footprint while maintaining transparent request construction.

## Consequences

Positive:
- Establishes a uniform extension and integration contract across agent tool implementations.
- Minimizes dependency bloat by using standard HTTP transport abstractions rather than redundant client SDKs.
- Enforces consistent separation between runtime environment configuration and remote boundary requests.

Negative:
- Direct HTTP client interactions require manual management of headers, serialization, and error response normalization.
- Tool implementations remain coupled to the lifecycle and extension contracts of @opencode-ai/plugin.

## Alternatives

- Custom standalone tool interface definitions without third-party plugin framework (rejected)
  Rejected because: Leads to divergent tool invocation protocols and incompatibilities with host runtime tooling.
  When valid: When developing isolated standalone utility scripts executed outside the agent runtime environment.
- Adopting specialized client SDK libraries for external service communication (rejected)
  Rejected because: Increases dependency footprint, maintenance overhead, and interface disparity across tool implementations.
  When valid: When remote services mandate proprietary signing protocols or complex streaming mechanisms.

## Risks

- Upstream breaking changes or interface shifts in @opencode-ai/plugin could impact tool module stability.
  Mitigation: Lock resolved dependency versions strictly and validate plugin entry points via integration suites.
  Owner: Integration Engineering Team
- Missing or improperly formatted environment credentials at runtime can cause silent or runtime-failing tool execution.
  Mitigation: Validate required environment variables at tool startup and fail fast with clear diagnostic messages.
  Owner: Integration Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Ensure external API interactions define consistent authorization headers and content type declarations across all plugin implementations.
- Normalize error handling across remote fetch responses to report structured diagnostics back to the agent runtime.

## Continuation Context


Verify commands:
- # Discover and execute the project static analysis and linting suite to check plugin interfaces
- # Discover and run the automated test suite to verify tool execution and environment configuration handling

Accept when:
- All tool plugin modules conform to interface contracts provided by the resolved dependency artifact of @opencode-ai/plugin.
- Repository verification and static analysis workflows pass with zero errors.
- Network client calls handle credentials via runtime configuration without hardcoded values.

## Enforcement

- Verified by: Automated continuous integration checks validating static types and lint rules.
- Verified by: Pull request code reviews focusing on plugin interface conformance and credential isolation.
- Violation handling: Automated build pipelines fail if unapproved plugin structures or hardcoded secrets are detected.
- Violation handling: Pull requests introducing non-standard tool abstractions must be reworked or rejected.
- Exception process: Exceptions require submission of an architectural change proposal detailing why standard plugin interfaces cannot be used.
- Exception process: Formal approval from the architectural review team must be documented prior to merging.