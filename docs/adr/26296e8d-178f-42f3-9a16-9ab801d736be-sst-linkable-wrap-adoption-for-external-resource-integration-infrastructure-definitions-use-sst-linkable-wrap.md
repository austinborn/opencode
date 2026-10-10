# sst.Linkable.wrap Adoption for External Resource Integration: Infrastructure Definitions Use Sst Linkable Wrap

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Infrastructure definitions require third-party or custom provider resources to share generated outputs with runtime application components.
- The framework provides sst.Linkable.wrap to adapt non-native resources into standardized linkable entities.

## Problem Statement

External provider resources do not automatically expose standardized linkage bindings to application runtimes, requiring an explicit wrapping mechanism to expose generated attributes consistently.

## Decision

1. MUST: Infrastructure definitions MUST use sst.Linkable.wrap when exposing outputs from unmanaged or third-party resources such as random.RandomPassword to the application resource linkage system.

## Policy Block

- MUST Infrastructure definitions MUST use sst.Linkable.wrap when exposing outputs from unmanaged or third-party resources such as random.RandomPassword to the application resource linkage system.

In scope:
- Infrastructure declarations integrating third-party or provider-specific resources into application linkage.

Out of scope:
- Native framework constructs that inherently support resource linking without explicit wrapping.

## Rationale

- Using sst.Linkable.wrap standardizes output exposure across custom and external provider resources.
- The wrapping pattern centralizes attribute mappings so changes in upstream resource structures remain isolated from downstream application consumers.

## Consequences

Positive:
- Provides a uniform access interface for external resource outputs across the application stack.
- Eliminates ad-hoc runtime secret fetching by integrating outputs directly into the resource linking model.

Negative:
- Couples consumer linkage contracts to third-party resource property names.
- Increases abstraction overhead for simple infrastructure components.

## Alternatives

- Direct unlinked resource instantiation without sst.Linkable.wrap (rejected)
  Rejected because: Prevents runtime consumers from accessing generated outputs through structured resource linking context.
  When valid: When resources operate purely as standalone infrastructure without any application-tier references.
- Manual environment variable projection (rejected)
  Rejected because: Bypasses unified link contracts and increases error surface in environment orchestration.
  When valid: When targeting legacy runtime environments incompatible with framework linking mechanisms.

## Risks

- Property schema mismatch when underlying resource output attributes change.
  Mitigation: Enforce type checks and infrastructure compilation validation during automated builds.
  Owner: engineering team
- Unintentional exposure of sensitive values through Linkable property definitions.
  Mitigation: Conduct architectural reviews on all resource wrapping definitions containing sensitive attributes.
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
- Discover the established infrastructure module conventions within the project repository before introducing new sst.Linkable definitions.
- Verify that mapped property values correspond to the runtime expectations of consumer components.

## Continuation Context


Verify commands:
- echo "Discover and execute the project verification script from the repository manifest"
- echo "Discover and run the project type checking and infrastructure validation suite"

Accept when:
- The project verification script executes and confirms valid configuration of all linkable resource definitions.
- Infrastructure resource declarations compile without type or schema errors against the framework contracts.

## Enforcement

- Verified by: Automated static analysis and type validation checks during continuous integration.
- Verified by: Peer review of infrastructure pull requests.
- Violation handling: Pull requests containing unapproved raw resource exports without standard wrapping fail automated review checks.
- Exception process: Submit an architectural review request detailing why standard resource wrapping cannot accommodate the infrastructure resource.