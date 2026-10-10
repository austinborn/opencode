# Adopt @opencode-ai/core/provider for Model Provider Domain Interfaces: Before Writing Modifying Code That Consumes

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The application interacts with model providers across multiple discrete domains, including server route handlers, session storage, error translation, and agent client protocol integrations.
- Directly coupling disparate application layers to external provider SDKs or disparate inline types introduces fragmented provider handling and inconsistent domain boundaries.
- The codebase establishes a unified internal module, @opencode-ai/core/provider, to encapsulate provider interfaces, types, and behavioral contracts across subsystems.

## Problem Statement

Decentralized or ad-hoc consumption of model provider definitions across server endpoints, agent communication protocols, session message processing, and error handling layers leads to divergent provider contracts, duplicated abstraction logic, and tight coupling to external vendor libraries.

## Decision

1. MUST: Before writing or modifying code that consumes the versioned dependency, developers MUST discover the dependency manifest and authoritative resolution artifact to verify the exact resolved version.

## Policy Block

- MUST Before writing or modifying code that consumes the versioned dependency, developers MUST discover the dependency manifest and authoritative resolution artifact to verify the exact resolved version.

In scope:
- All application services, server routing handlers, session message processors, agent client protocol coordinators, and provider error translators requiring model provider definitions.

Out of scope:
- Subsystems strictly decoupled from model provider concepts, such as pure client user interface presentation components without provider interactions.

## Rationale

- Evidence across multiple subsystem files confirms consistent importation and usage of @opencode-ai/core/provider across server endpoints, session handlers, agent protocols, and error mappers.
- Centralizing provider abstractions within @opencode-ai/core/provider isolates provider-specific evolution and changes from downstream business workflows.
- Standardizing on a dedicated internal module eliminates duplicate provider schemas and establishes a shared contract across functional boundaries.

## Consequences

Positive:
- Provides a single authoritative boundary for model provider types, operations, and metadata across all application packages.
- Simplifies maintenance by decoupling session pipelines, route handlers, and protocols from direct vendor SDK dependencies.
- Enables consistent error propagation and diagnostic inspection for provider interactions.

Negative:
- Changes to @opencode-ai/core/provider contracts require cross-cutting verification across multiple dependent subsystems.
- Introduces an abstraction layer that all provider-adjacent features must conform to.

## Alternatives

- Direct ad-hoc integration with external model provider SDKs in individual modules (rejected)
  Rejected because: Direct integration causes scattered provider configurations, duplicate error handling, and vendor lock-in across disparate modules.
  When valid: Only in standalone prototypes or isolated micro-benchmarks that do not interact with core application workflows.
- Monolithic single-package application structure without dedicated core provider modules (rejected)
  Rejected because: Lacks clear architectural separation between foundational provider contracts and high-level routing or session logic.
  When valid: In minimal single-file proof-of-concept utilities.

## Risks

- Breaking contract changes in @opencode-ai/core/provider could disrupt session management, server routes, and protocol bridges simultaneously.
  Mitigation: Enforce rigorous contract-level automated test suites and semantic versioning or workspace dependency boundaries.
  Owner: Core Platform Engineering
- Developers might bypass the internal provider module when integrating new provider capabilities.
  Mitigation: Implement automated static dependency boundary linting to catch direct external provider imports outside the designated module.
  Owner: Core Platform Engineering

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Import model provider contracts, configurations, and utilities exclusively from @opencode-ai/core/provider when authoring session, routing, or agent logic.
- Ensure provider error adapters map downstream provider failures into normalized error constructs defined by the core provider boundary.

## Continuation Context


Verify commands:
- Discover and execute the project static analysis and linting scripts to verify import boundary compliance across dependent packages.
- Discover and execute the repository test suite to confirm all provider integration points conform to core provider specifications.

Accept when:
- Static analysis validates that model provider access is routed through @opencode-ai/core/provider across all dependent modules.
- Automated unit and integration test suites pass without regressions across route handlers, session pipelines, and protocol adapters.

## Enforcement

- Verified by: Automated static analysis and module boundary checks during continuous integration.
- Verified by: Peer code review on pull requests touching provider-facing modules and core libraries.
- Violation handling: Continuous integration builds fail upon detecting unauthorized direct provider imports outside designated modules.
- Violation handling: Pull requests introducing boundary violations must be revised to import from @opencode-ai/core/provider before merge approval.
- Exception process: Architectural exceptions require formal submission and sign-off by the platform architecture team with documented deprecation or migration timelines.