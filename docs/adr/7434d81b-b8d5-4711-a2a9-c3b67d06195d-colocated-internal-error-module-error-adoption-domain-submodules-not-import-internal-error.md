# Colocated Internal Error Module (./error) Adoption: Domain Submodules Not Import Internal Error

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Submodules across core domain logic, route utilities, and client protocol agents require structured domain-specific failure models.
- Centralized monolithic error catalogs create tight coupling and cyclic dependency risks across distinct workspace boundaries.
- Static analysis identifies a recurring structural pattern where domain modules import colocated internal error definitions rather than traversing boundary layers.

## Problem Statement

Managing application errors through a monolithic global error catalog causes tight coupling between unrelated domains and increases the risk of circular dependencies across package boundaries. Conversely, ad-hoc untyped errors eliminate compile-time exhaustiveness and hinder precise error recovery. The project requires a consistent module boundary pattern that allows each functional domain to declare, maintain, and encapsulate its specific failure modes locally.

## Decision

1. MUST_NOT: Domain submodules MUST NOT import internal error definitions across separate package boundaries or unrelated functional domains.

## Policy Block

- MUST_NOT Domain submodules MUST NOT import internal error definitions across separate package boundaries or unrelated functional domains.

In scope:
- All internal functional domains, route utility modules, protocol handlers, and session services declaring custom failure states.

Out of scope:
- Generic platform-wide primitives and third-party library boundaries that provide native standardized exception types.

Exceptions:
- EXC-001: A cross-cutting transport gateway maps localized domain errors to standardized external protocol status codes.

## Rationale

- Colocating error definitions within each functional domain isolates failure domains and prevents circular dependency chains across packages.
- Internal error modules enable strict encapsulation of implementation details while exposing typed failure interfaces to immediate consumers.
- Empirical evidence across session management, route throttling utilities, and protocol agent modules demonstrates consistent reliance on local error module boundaries.

## Consequences

Positive:
- Domain-specific failure variants remain encapsulated within their respective feature namespaces.
- Circular import dependencies between distinct functional domains are eliminated.
- Compile-time exhaustiveness checks and domain-specific error handling become localized and maintainable.

Negative:
- Similar boilerplate error structures may be duplicated across distinct domain packages.
- Cross-boundary integration layers must explicitly translate or map local errors when crossing public interface boundaries.

## Alternatives

- Centralized Global Error Registry (rejected)
  Rejected because: Introduces tight cross-package coupling and increases the likelihood of circular dependency graphs as new features are added.
  When valid: Small monolithic codebases with minimal domain boundaries.
- Untyped Runtime Exceptions (rejected)
  Rejected because: Eliminates type-system exhaustiveness guarantees and obscures expected failure modes from consuming callers.
  When valid: Prototyping scripts or throwaway spike implementations.
- Shared Workspace Error Package (deferred)
  Rejected because: Prematurely couples diverse functional domains before common cross-cutting error contracts have stabilized.
  When valid: Standardized protocol error responses shared across distributed microservices.

## Risks

- Drift in error handling conventions across independent colocated error modules.
  Mitigation: Establish shared structural type conventions and linting rules across domain boundaries.
  Owner: Engineering Team
- Boilerplate accumulation across multiple submodule directories.
  Mitigation: Provide reusable generic base schemas or abstract type templates in shared internal utilities where appropriate.
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
- Establish domain-specific error types alongside domain logic and expose typed constructors for immediate callers.
- Ensure all exported errors implement standard error interfaces to allow seamless logging and observability tracing.

## Continuation Context


Verify commands:
- Discover the workspace static analysis and type verification script from the repository manifest and execute it to ensure error type exhaustiveness.
- Locate and run the dependency graph validation script defined in the project configuration to verify no cyclic imports exist between error modules.

Accept when:
- All domain error definitions reside in colocated internal error modules without cross-boundary circular dependencies.
- Static type analysis passes with zero type errors across all consuming modules.
- Module boundaries correctly encapsulate private error variants and expose only necessary domain failure interfaces.

## Enforcement

- Verified by: Automated dependency graph analysis and static type checking in continuous integration.
- Verified by: Peer code review verifying that domain error definitions remain colocated and encapsulated.
- Violation handling: Pull requests introducing circular error dependencies or importing non-public error modules will fail static analysis.
- Violation handling: Violations identified during code review must refactor shared error definitions into local domain modules.
- Exception process: Submit an architectural review request outlining the need for cross-domain error sharing, accompanied by technical justification.