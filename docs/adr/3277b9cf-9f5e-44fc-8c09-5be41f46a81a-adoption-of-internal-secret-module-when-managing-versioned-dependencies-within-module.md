# Adoption of Internal Secret Module: When Managing Versioned Dependencies Within Module

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Multiple infrastructure specifications across disparate operational domains require access to sensitive credentials and configuration values.
- Ad-hoc consumption of environment variables across independent infrastructure modules creates divergent credential handling and leakage hazards.
- The infrastructure layer standardizes modular abstractions alongside stage and deployment configuration definitions.

## Problem Statement

Decentralized management of credentials across independent infrastructure definitions leads to inconsistent secret retrieval patterns, scattered runtime environment bindings, and heightened risk of misconfiguration or leakage. Without a standardized internal secret module, individual infrastructure specifications independently read environment variables, preventing unified credential validation, rotation, and auditing.

## Decision

1. MUST: When managing versioned dependencies within the module ecosystem, consumers MUST inspect the project lock file to verify and bind to exact resolved dependency versions before implementation.

## Policy Block

- MUST When managing versioned dependencies within the module ecosystem, consumers MUST inspect the project lock file to verify and bind to exact resolved dependency versions before implementation.

In scope:
- All infrastructure specifications, service deployment declarations, and operational resource configurations that consume sensitive credentials.

Out of scope:
- Non-sensitive static configuration attributes and standard deployment stage descriptors.

## Rationale

- Centralizing secret access in a single internal module provides a consistent audit boundary for sensitive configuration across infrastructure domains.
- Consistent adoption across multiple infrastructure scopes demonstrates the architectural choice to treat secrets as a shared internal core service.
- Encapsulating runtime environment variable retrieval within the internal secret module ensures early validation and prevents unhandled undefined credential bindings during deployment.

## Consequences

Positive:
- Establishes a single authoritative boundary for declaring and validating infrastructure credentials.
- Eliminates scattered, redundant runtime environment variable reads across independent infrastructure domains.
- Simplifies credential auditing, secret rotation, and deployment validation across all infrastructure components.

Negative:
- Creates a direct internal module coupling between dependent infrastructure specifications and the centralized secret module.
- Requires updates to the centralized secret module whenever new infrastructure components introduce distinct credential requirements.

## Alternatives

- Direct process environment variable access within each individual infrastructure specification (rejected)
  Rejected because: Decentralized environment variable inspection leads to inconsistent error handling, duplicate credential parsing, and absent auditing across infrastructure domains.
  When valid: Acceptable only in single-file prototypes where cross-module credential consistency is unnecessary.
- Direct third-party secret manager SDK calls scattered across individual infrastructure modules (rejected)
  Rejected because: Direct vendor SDK coupling bypasses standard repository abstractions and couples every infrastructure specification to external provider APIs.
  When valid: Acceptable when infrastructure definitions execute on platforms providing native automatic runtime credential injection at the process boundary.

## Risks

- Circular dependencies between the secret module and downstream infrastructure definitions
  Mitigation: Enforce a strict unidirectional dependency hierarchy where the internal secret module has no reverse dependencies on downstream infrastructure definitions.
  Owner: Infrastructure engineering team
- Missing runtime environment variables causing silent failures or undefined credential values during resource provisioning
  Mitigation: Implement mandatory validation within the secret module that raises clear initialization errors when mandatory credentials are missing.
  Owner: Infrastructure engineering team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Expose strongly typed credential exports from the internal secret module rather than dynamic dictionary lookups.
- Ensure all required runtime credential bindings are validated during initialization before exporting them to consuming infrastructure modules.

## Continuation Context


Verify commands:
- Discover the project static analysis and linting scripts from the repository manifest and execute them to verify no direct environment variable accesses exist in infrastructure specifications.
- Discover and run the project type checking and test suites to confirm that all infrastructure specifications correctly resolve secrets through the internal secret module.

Accept when:
- Static analysis confirms that credential references across all infrastructure specifications route exclusively through the internal secret module.
- All infrastructure validation and test suites pass without unhandled credential resolution errors.

## Enforcement

- Verified by: Automated static analysis checks within continuous integration pipelines detecting unauthorized environment variable reads.
- Verified by: Peer code review and architectural validation required for all changes touching infrastructure definitions.
- Violation handling: Continuous integration pipelines fail when unauthorized credential access patterns are introduced outside the designated secret module.
- Violation handling: Pull requests containing direct environment variable lookups in infrastructure specifications are blocked from merging.
- Exception process: Submit a formal architectural exception request to the infrastructure engineering lead documenting specific technical blockers.
- Exception process: Document temporary credential overrides in an architectural record with an explicit retirement timeline.