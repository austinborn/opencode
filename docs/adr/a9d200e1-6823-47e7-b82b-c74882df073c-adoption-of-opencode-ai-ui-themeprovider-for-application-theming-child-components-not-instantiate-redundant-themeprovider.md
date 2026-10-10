# Adoption of @opencode-ai/ui ThemeProvider for Application Theming: Child Components Not Instantiate Redundant Themeprovider

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The frontend application requires unified visual theming, layout consistency, and shared contextual state across diverse modal, dialog, and view components.
- Decentralized styling or localized theme definitions introduce visual regressions, inconsistent design token resolution, and high maintenance overhead across application screens.
- The codebase establishes a shared design system module providing centralized theme providers and context structures to govern frontend presentation.

## Problem Statement

Without a centralized theming architecture at the application boundary, interface components risk inconsistent theme token propagation, fragmented dialog and file context state, and duplication of styling logic across client modules.

## Decision

1. MUST_NOT: Child components MUST NOT instantiate redundant ThemeProvider wrappers unless establishing an explicitly isolated, scoped theme sub-tree.

## Policy Block

- MUST_NOT Child components MUST NOT instantiate redundant ThemeProvider wrappers unless establishing an explicitly isolated, scoped theme sub-tree.

In scope:
- Frontend interface components and root layout trees rendering user-facing views.
- Shared UI context consumers including modal, dialog, and file management interfaces.

Out of scope:
- Non-visual background processes, protocol handlers, and headless data access operations.
- Standalone command-line utilities and server-side connection layers.

Exceptions:
- EX-53-001: A component tree requires an explicit inverted or isolated theme variant distinct from the root application theme.

## Rationale

- Wrapping the root hierarchy in ThemeProvider ensures that design tokens and contextual configurations are universally accessible without prop-drilling across deep component trees.
- Co-locating theme distribution with shared context modules from @opencode-ai/ui provides a single point of governance for application styling behavior and modal surfaces.
- Enforcing version locking and documentation verification prevents breaking changes in design system APIs from destabilizing client layout rendering.

## Consequences

Positive:
- Guarantees visual consistency and uniform theme token propagation across all application views and dialog overlays.
- Centralizes theme lifecycle management and dynamic switching logic within a single root provider structure.
- Simplifies integration with shared UI context components across application packages.

Negative:
- Introduces an architectural dependency on the design system provider package across the root component tree.
- Improper provider hierarchy ordering can cause runtime context resolution failures for child components.

## Alternatives

- Direct style token injection via global variables without a root context provider (rejected)
  Rejected because: Lacks reactive theme switching capabilities and cannot propagate dynamic contextual state to complex composite components such as dialogs.
  When valid: Static documents or headless services without dynamic theming requirements or shared modal presentation state.
- Per-component local theme provider encapsulation and localized styling modules (rejected)
  Rejected because: Creates configuration drift, inconsistent visual presentation, and substantial boilerplate duplication across feature modules.
  When valid: Independent micro-frontend applications rendering disparate design systems inside isolated sandboxes.

## Risks

- Unmounted or incorrectly ordered provider hierarchies can cause downstream UI context crashes.
  Mitigation: Enforce root provider structure through automated component tests and structural linting.
  Owner: Frontend Engineering Team
- Upstream design system package updates might alter context contract signatures or theme token keys.
  Mitigation: Strict adherence to lock-version grounding and pre-merge integration test runs against resolved dependency artifacts.
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
- Ensure the ThemeProvider is mounted near the root of the rendering tree before any components consuming design system tokens or context dialogs are instantiated.
- Compose auxiliary UI context providers as immediate descendants of the ThemeProvider to maintain access to theme-aware styling within overlay containers.

## Continuation Context


Verify commands:
- Discover the workspace test execution script from the repository manifest and run the frontend test suite to verify ThemeProvider mounting and context provision.
- Discover the repository static analysis script and execute it to verify that UI components import theme abstractions according to architectural rules.
- Discover the application build script from the project manifest and run it to validate successful asset bundling and context compilation.

Accept when:
- The root application component mounts ThemeProvider and renders child components without missing theme context errors.
- All automated component tests and static analysis verification scripts pass without errors.
- UI context providers for dialogs and files operate within the ThemeProvider boundary with full token resolution.

## Enforcement

- Verified by: Automated continuous integration test suites verifying component rendering within the theme context.
- Verified by: Static analysis rules forbidding unauthorized theme overrides or missing root providers.
- Verified by: Pull request peer review by frontend engineering peers.
- Violation handling: Continuous integration failure for unverified design system dependency updates or missing provider structures.
- Violation handling: Pull request rejection for components bypassing the design system theme context layer.
- Exception process: Submit an architectural review request with justification for isolated theme sub-trees or alternative styling mechanisms.