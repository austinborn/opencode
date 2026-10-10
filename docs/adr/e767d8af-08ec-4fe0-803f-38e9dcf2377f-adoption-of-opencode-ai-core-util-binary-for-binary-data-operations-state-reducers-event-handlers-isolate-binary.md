# Adoption of @opencode-ai/core/util/binary for Binary Data Operations: State Reducers Event Handlers Isolate Binary

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Multiple client synchronization subsystems and session handlers require binary encoding, decoding, and byte-level manipulation to process streaming parts, message payloads, and cache entries.
- Dispersed binary data transformation logic risks divergent encoding strategies and fragmented error handling across client state boundaries.
- The codebase imports @opencode-ai/core/util/binary across synchronization contexts, event reducers, and prompt submission flows to centralize binary operations.
- Surrounding state management and client communication layers interact with shared stores and SDK clients while relying on shared core utilities for underlying data operations.

## Problem Statement

Client state management and synchronization services frequently handle binary payloads and encoded message streams across disparate contexts. Implementing ad-hoc binary transformations across multiple subsystems causes protocol divergence, maintenance overhead, and latent encoding defects. A standardized core utility module is required to centralize binary processing operations across client boundaries.

## Decision

1. SHOULD: State reducers and event handlers SHOULD isolate binary transformations to ingress and egress boundaries to keep core state update functions deterministic and serializable.

## Policy Block

- SHOULD State reducers and event handlers SHOULD isolate binary transformations to ingress and egress boundaries to keep core state update functions deterministic and serializable.

In scope:
- Client state synchronization modules, message event reducers, and session management contexts.
- Components and services executing binary encoding, decoding, or buffer manipulation.

Out of scope:
- Third-party libraries with internal, self-contained binary protocols.
- Modules handling plain text payloads that require no binary encoding or transformations.

## Rationale

- Standardizing on @opencode-ai/core/util/binary ensures identical binary handling behavior across client synchronization services and state reducers.
- Eliminating duplicate binary conversion logic reduces maintenance burden and minimizes the surface area for data corruption during session synchronization.
- Centralized utilities allow performance optimizations and encoding improvements to propagate across all consuming subsystems simultaneously.

## Consequences

Positive:
- Enforces uniform binary encoding and decoding behavior across all application synchronization workflows.
- Reduces code duplication and isolates vulnerability surface in low-level byte manipulation routines.
- Preserves consistent data contracts between local state caches and remote synchronization endpoints.

Negative:
- Introduces direct module dependency coupling between client state contexts and the internal core package.
- Breaking changes in the utility module API necessitate synchronized updates across multiple client subsystems.

## Alternatives

- Inline native platform binary operations per subsystem (rejected)
  Rejected because: Leads to fragmented buffer handling logic, divergent edge-case management, and increased risk of serialization bugs across state handlers.
  When valid: Valid only in isolated scripts that have zero shared dependencies with the application state tree.
- Adopting a third-party open-source binary utility library (rejected)
  Rejected because: Adds redundant external dependencies and bundle overhead when the internal core package already provides the required primitives.
  When valid: Valid if internal utilities lack essential protocol specifications that an established external standard library provides.

## Risks

- API drift or breaking changes in the core binary module breaking client synchronization workflows.
  Mitigation: Enforce lock-version grounding, verify dependency resolution artifacts, and maintain comprehensive regression test suites for binary processing.
  Owner: engineering team
- Unintended memory overhead from improper buffer allocation within high-frequency event reducers.
  Mitigation: Profile memory allocation patterns in synchronization reducers and enforce automated linting against inefficient buffer clones.
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
- Locate the workspace core package exports in the repository structure and verify exported function signatures before updating binary serialization logic.
- Ensure binary transformations remain deterministic and isolated to boundary ingestion or egress points within stateful workflows.

## Continuation Context


Verify commands:
- Discover the project test runner configuration and execute the unit and integration test suites covering synchronization modules.
- Discover the static analysis and linting scripts from the repository configuration and verify that all import statements conform to internal module conventions.

Accept when:
- All synchronization unit and integration test suites pass without binary serialization or decoding errors.
- Static analysis confirms zero redundant binary buffer implementations outside of the approved core utility module.

## Enforcement

- Verified by: Automated continuous integration checks executing static analysis and test validation.
- Verified by: Peer code review verifying adherence to centralized core utility imports and absence of ad-hoc buffer logic.
- Violation handling: Continuous integration builds will reject code that implements custom binary manipulation or unapproved external dependencies.
- Violation handling: Code review comments will require replacing custom serialization routines with functions from the approved core utility module.
- Exception process: Submit an architectural review request with written justification explaining why the centralized utility cannot satisfy the specialized binary requirements.
- Exception process: Document the approved exception in the consuming module and file an issue to extend the core utility for future reconciliation.