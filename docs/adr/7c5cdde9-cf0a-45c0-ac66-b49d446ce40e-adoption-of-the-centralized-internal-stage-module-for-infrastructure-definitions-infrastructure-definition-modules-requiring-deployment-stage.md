# Adoption of the Centralized Internal Stage Module for Infrastructure Definitions: Infrastructure Definition Modules Requiring Deployment Stage

Status: proposed
Date: 2025-02-18
Deciders: Detection Pipeline (automated)

## Context

- Multiple infrastructure definition modules coordinate deployment resources across distinct application subsystems.
- Static analysis identifies widespread relative imports targeting a shared internal stage module across infrastructure definitions.
- Decentralized environment handling creates configuration divergence across infrastructure boundaries when deploying across development, preview, and production environments.

## Problem Statement

Inconsistent stage resolution across disparate infrastructure definition modules leads to configuration divergence, misaligned environment assumptions, and uncoordinated stack deployments. Infrastructure components require an authoritative, centralized internal module to govern stage identification uniformly across all stacks.

## Decision

1. MUST: All infrastructure definition modules requiring deployment stage resolution or environment-specific configuration MUST import and utilize the centralized internal stage module as the authoritative source of stage context.

## Policy Block

- MUST All infrastructure definition modules requiring deployment stage resolution or environment-specific configuration MUST import and utilize the centralized internal stage module as the authoritative source of stage context.

In scope:
- All infrastructure definition modules declaring environment-specific deployment resources and stacks.
- All internal modules coordinating service deployments and stage boundaries.

Out of scope:
- Application domain logic and business service implementations operating outside the infrastructure definition layer.
- Pure utility routines that do not evaluate environment or stage context.

## Rationale

- Static analysis demonstrates pervasive adoption of the shared stage module across every inspected infrastructure component.
- Centralizing stage resolution into a dedicated first-party module ensures predictable configuration propagation across all deployment stacks.
- A shared contract prevents independent modules from making contradictory assumptions about deployment environments.

## Consequences

Positive:
- Guarantees uniform environment boundary semantics and stage naming across all infrastructure stacks.
- Eliminates configuration drift and divergent stage parsing logic across distributed infrastructure modules.
- Simplifies auditing and governance of environment configurations through a single internal source of truth.

Negative:
- Introduces an internal dependency coupling across infrastructure stacks to the shared stage contract.
- Modifications to stage resolution logic or export signatures require regression verification across all dependent infrastructure definitions.

## Alternatives

- Decentralized stage resolution via direct environment parsing in each infrastructure component (rejected)
  Rejected because: Parsing runtime environment variables within disparate modules leads to configuration divergence, inconsistent default fallbacks, and untracked drift across infrastructure stacks.
  When valid: Single-purpose proof-of-concept scripts operating completely outside coordinated multi-stack infrastructure.
- Centralized internal stage module shared across infrastructure definitions (accepted)
  Rejected because: None; selected as the architectural standard to guarantee uniform stage isolation.
  When valid: Multi-component infrastructure codebases requiring cohesive stage and environment boundaries across stacks.

## Risks

- Breaking changes to the shared stage module interface could disrupt multiple infrastructure stacks simultaneously.
  Mitigation: Enforce backward-compatible API contracts within the shared stage module and validate all downstream stacks during pull request verification.
  Owner: Infrastructure Engineering Team
- Over-reliance on shared stage exports may encourage unconstrained global configuration coupling across unrelated stacks.
  Mitigation: Design the stage module interface to expose strict types and read-only attributes preventing unintended state pollution.
  Owner: Infrastructure Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Ensure the shared stage module exposes an immutable contract for stage names and stage-scoped contextual metadata.
- Structure infrastructure components to accept resolved stage context parameters rather than attempting autonomous environment queries.

## Continuation Context


Verify commands:
- Discover the repository test runner from the project manifest and execute tests targeting infrastructure configuration modules to confirm stage resolution validity.
- Discover and execute the repository static analysis or linting tool to verify that all infrastructure definitions import stage context exclusively from the centralized stage module.

Accept when:
- All infrastructure definition modules resolve stage parameters exclusively through the shared stage module interface.
- Static analysis verifies zero unauthorized stage resolution or ad-hoc environment parsing across infrastructure definitions.
- All automated configuration and deployment test suites pass without regression under stage-resolved parameterization.

## Enforcement

- Verified by: Automated static analysis checks in continuous integration verifying import patterns within infrastructure definitions.
- Verified by: Peer architecture review on pull requests touching infrastructure definition files.
- Violation handling: Pull requests introducing independent stage parsing logic outside the shared module are blocked by automated analysis.
- Violation handling: Violations flagged during review must refactor configuration resolution to the authoritative stage module before merge.
- Exception process: Submit an architectural waiver request documenting why a component cannot bind to the centralized stage module.
- Exception process: Obtain formal approval from infrastructure architects prior to committing detached configuration logic.
- Exception process: Track approved exceptions in the architecture governance ledger with an explicit migration sunset date.