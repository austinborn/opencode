# Standardization on @opencode-ai/ui Component Library: New Visual Interface Implementations Migrate Successor

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Application frontend interface components require uniform presentation elements, interactive controls, and iconography across multiple views and dialogs.
- Direct consumption of uncoordinated styling or duplicate user interface primitives causes interface drift and inconsistent user interactions.
- The repository establishes a dedicated shared package namespace to provide standardized visual components and dialog structures to consuming modules.

## Problem Statement

Frontend features risk divergent visual styling, inconsistent accessibility semantics, and fragmented interaction patterns when individual components construct ad-hoc primitives rather than consuming a unified presentation library.

## Decision

1. SHOULD: New visual interface implementations SHOULD migrate to successor library namespaces where upgraded components are available in the shared library.

## Policy Block

- SHOULD New visual interface implementations SHOULD migrate to successor library namespaces where upgraded components are available in the shared library.

In scope:
- Frontend presentation components, modal dialogs, and interactive form controls residing within the application package.

Out of scope:
- Non-visual backend services, data synchronizers, and low-level communication protocols that do not render interface elements.

Exceptions:
- EXC-20-001: A specialized low-level interaction requirement cannot be fulfilled by existing shared library primitives.

## Rationale

- Centralizing visual primitives in @opencode-ai/ui enforces interface consistency, shared accessibility handling, and unified icon treatment across all application dialogs and views.
- Subpath module imports allow consumers to bundle only the necessary component code, optimizing resource distribution across interface surfaces.
- Evidence across fifteen UI modules demonstrates widespread reliance on the shared package, establishing it as the authoritative boundary for interface rendering.

## Consequences

Positive:
- Guarantees visual and behavioral consistency across dialogs, menus, and controls throughout the application.
- Reduces code duplication by centralizing shared icon rendering, modal structures, and input primitives.
- Streamlines design token updates and global theme modifications to a single package boundary.

Negative:
- Couples application view implementations to internal component library release cycles.
- Requires coordinated cross-module updates when introducing new primitives or altering existing component contracts.

## Alternatives

- Implement ad-hoc presentation primitives directly within each local component module (rejected)
  Rejected because: Leads to visual fragmentation, divergent accessibility handling, and duplicated styling logic across views
  When valid: Prototyping isolated, single-use experimental views that will not be merged into the core application
- Adopt an unstyled external component package directly within each consumer file (rejected)
  Rejected because: Bypasses centralized design tokens and requires duplicating brand styling in every frontend module
  When valid: Constructing standalone utility tools decoupled from the primary application suite

## Risks

- Breaking changes in shared library primitives can cause regressions across multiple consuming views simultaneously.
  Mitigation: Enforce contract verification in component tests and follow progressive deprecation paths across library iterations.
  Owner: Frontend Engineering Team
- Divergence between successive versions of shared components can lead to visual and functional inconsistencies.
  Mitigation: Track legacy component consumption and establish systematic migration phases for updated namespaces.
  Owner: Frontend Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Discover the shared package directory structure within the repository workspace to identify available primitive exports and namespace conventions.
- Verify component prop interfaces and theme context providers against the shared library definitions prior to integration.

## Continuation Context


Verify commands:
- Discover the workspace static analysis and linting scripts from the root configuration manifest and execute them across the application source tree.
- Discover the interface test runner from project configuration and execute component suite validations to ensure compliant rendering.

Accept when:
- All frontend components import user interface primitives exclusively from designated shared library subpaths without unresolved references.
- Static analysis and component verification test suites execute cleanly across consuming modules.

## Enforcement

- Verified by: Automated static analysis checks in continuous integration pipelines.
- Verified by: Peer code review for all frontend user interface pull requests.
- Violation handling: Automated build checks fail on direct imports of unauthorized alternative UI primitives.
- Violation handling: Code review blocks merge until components conform to shared library standards.
- Exception process: Submit an architectural review request with justification for missing component primitives to the frontend lead.
- Exception process: Track required new primitives as backlog items for inclusion in the shared component package.