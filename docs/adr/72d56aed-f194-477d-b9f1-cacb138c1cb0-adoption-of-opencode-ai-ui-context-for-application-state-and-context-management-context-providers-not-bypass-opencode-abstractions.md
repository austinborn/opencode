# Adoption of @opencode-ai/ui/context for Application State and Context Management: Context Providers Not Bypass Opencode Abstractions

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Application components require coordinated access to shared state streams, client connections, and UI service instances across diverse domain features.
- Static evidence across frontend modules demonstrates consistent reliance on @opencode-ai/ui/context to manage scoped context initialization.
- Standardizing on a unified context module ensures consistent reactivity and avoids fragmented state propagation strategies.

## Problem Statement

Uncoordinated state distribution and ad-hoc dependency sharing across frontend modules lead to tight coupling, memory leaks from uncleaned subscriptions, and inconsistent reactive lifecycle management.

## Decision

1. MUST_NOT: Context providers MUST NOT bypass @opencode-ai/ui/context abstractions by exposing raw unmanaged global state objects to components.

## Policy Block

- MUST_NOT Context providers MUST NOT bypass @opencode-ai/ui/context abstractions by exposing raw unmanaged global state objects to components.

In scope:
- Frontend state modules and context providers declaring reactive services and scoped application state.
- UI integration points requiring shared access to client sessions, permissions, and layout definitions.

Out of scope:
- Stateless visual leaf components that rely strictly on direct properties.
- Independent core utility routines that operate without reactive context bindings.

## Rationale

- Adopting @opencode-ai/ui/context provides an organized pattern for scoping reactive state and services to their appropriate component subtrees.
- Centralizing context utilities standardizes lifecycle teardown and cache management across application features.
- Analysis shows pervasive usage across core state files, evidencing an established architectural boundary that decouples state consumers from transport mechanisms.

## Consequences

Positive:
- Enforces consistent context creation and consumption semantics across frontend domains.
- Simplifies component testing and refactoring by isolating state scoping logic behind a structured interface.
- Facilitates centralized lifecycle handling and memory reclamation for active service contexts.

Negative:
- Creates architectural coupling to the shared context module across frontend feature domains.
- Requires new contributors to adhere to the standardized context patterns rather than creating ad-hoc state stores.

## Alternatives

- Ad-hoc global singleton stores without contextual scoping (rejected)
  Rejected because: Global singletons hinder multi-instance isolation, impede testing, and risk state pollution across independent UI lifecycles.
  When valid: Valid only in minimal non-reactive scripts or isolated single-purpose utilities.
- Native property drilling through component hierarchies (rejected)
  Rejected because: Deep property passing across deeply nested UI hierarchies creates maintenance friction and excessive boilerplate.
  When valid: Valid for shallow component hierarchies with direct parent-child relationships.

## Risks

- Over-centralization of context definitions could lead to monolithic dependencies.
  Mitigation: Separate domain contexts into specialized sub-namespaces and maintain clear interface boundaries.
  Owner: Frontend engineering team
- Memory retention if contexts retain state references after unmounting.
  Mitigation: Implement explicit lifecycle cleanup mechanisms within context disposal routines.
  Owner: Frontend engineering team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Discover the workspace package defining the context abstractions to verify the supported context factory interfaces.
- Ensure context providers define explicit fallback states or throw descriptive errors when accessed outside their provider hierarchy.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and linting scripts to verify compliance with context import conventions.
- Discover and execute the automated test suite to confirm context providers initialize and propagate state correctly.

Accept when:
- All frontend context definitions import and utilize the designated context module without unresolved bindings.
- Static analysis and test suites execute with zero failures across the frontend package.

## Enforcement

- Verified by: Automated continuous integration checks executing repository test suites and static analysis.
- Verified by: Peer code review evaluating adherence to context architecture boundaries.
- Violation handling: Pull requests introducing unapproved state management abstractions or direct singleton globals are blocked until aligned.
- Exception process: Exceptions require documented architectural review and consensus from the frontend platform team.