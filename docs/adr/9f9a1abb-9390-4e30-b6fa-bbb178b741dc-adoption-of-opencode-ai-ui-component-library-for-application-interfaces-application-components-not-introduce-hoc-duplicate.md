# Adoption of @opencode-ai/ui Component Library for Application Interfaces: Application Components Not Introduce Hoc Duplicate

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Application presentation views require consistent interactive controls, modal dialog workflows, and settings inputs across multiple feature domains.
- Static analysis identifies recurring imports of core presentation primitives from the internal @opencode-ai/ui package across fifteen dialog and settings components.
- A standardized UI library adoption establishes a clean architectural boundary between application orchestration and presentation primitives.

## Problem Statement

Without a unified component and dialog library standard, user interface components risk duplicating interactive controls, introducing divergent styling conventions, and fracturing modal state management across application screens.

## Decision

1. MUST_NOT: Application components MUST NOT introduce ad-hoc duplicate implementations of UI primitives already provided by the @opencode-ai/ui component library.

## Policy Block

- MUST_NOT Application components MUST NOT introduce ad-hoc duplicate implementations of UI primitives already provided by the @opencode-ai/ui component library.

In scope:
- User interface dialogs, settings panels, and context widgets within application presentation packages.
- Storybook fixture definitions and component documentation stories for user interface screens.

Out of scope:
- Headless business logic, data synchronization workers, and non-visual background services.
- Backend server endpoints and command-line execution routines.

Exceptions:
- EXC-001: Platform-specific native integration requirements cannot be satisfied by standard shared web presentation components.

## Rationale

- Empirical evidence across fifteen component files demonstrates a deliberate convention of consuming UI primitives from @opencode-ai/ui subpaths.
- Unifying modal dialogs under @opencode-ai/ui/dialog and @opencode-ai/ui/context/dialog guarantees reliable dialog focus, dismissal, and accessibility handling.
- Reusing modular controls reduces boilerplate code and prevents styling regressions across disparate settings interfaces.

## Consequences

Positive:
- Enforces visual and behavioral consistency across all application modal dialogs and settings panels.
- Centralizes accessibility, dialog focus management, and theming within a single reusable component module.
- Accelerates feature development by providing pre-composed interactive primitives.

Negative:
- Application views depend directly on the release and version stabilization cycle of the internal design library.
- New interface primitives require contribution and review in the shared UI package before consumption in feature views.

## Alternatives

- Ad-hoc inline styles and bespoke dialog implementations per view (rejected)
  Rejected because: Creates visual fragmentation, duplicates modal accessibility and interaction logic, and increases maintenance cost across views.
  When valid: Isolated throwaway proof-of-concept prototypes outside production codebases.
- Direct unabstracted third-party vendor UI library imports across application views (rejected)
  Rejected because: Couples application presentation logic directly to external vendor APIs and restricts custom domain-specific theming.
  When valid: Greenfield projects without requirements for specialized domain styling or shared internal component governance.

## Risks

- Breaking interface updates in shared @opencode-ai/ui primitives can impact multiple dialogs and configuration screens simultaneously.
  Mitigation: Maintain strict semantic versioning and automated component regression test suites across consuming views.
  Owner: frontend engineering team
- Lack of specialized UI primitives in the shared package may tempt developers to introduce uncoordinated local styling workarounds.
  Mitigation: Establish a defined contribution path for teams to propose and merge new shared primitives into the UI package.
  Owner: design system team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Inspect existing view implementations to identify standard compositional patterns for dialog titles, content bodies, and action footers.
- Utilize the design system context primitives to coordinate asynchronous trigger and dismissal lifecycles consistently.

## Continuation Context


Verify commands:
- Discover the workspace static analysis script from the root configuration and execute it to verify that all UI imports resolve to the approved design system namespace.
- Discover and run the project test and story validation suites to confirm modal dialogs and interactive controls render without component contract violations.

Accept when:
- All application dialogs and settings views import interactive elements and modal structures exclusively from the @opencode-ai/ui component library namespace.
- Workspace static analysis and test validation suites pass without unapproved UI component dependencies or import contract violations.

## Enforcement

- Verified by: Automated workspace linting and static import verification rules in continuous integration.
- Verified by: Mandatory design and code review approvals on presentation layer pull requests.
- Violation handling: Automated static verification failures block pull request merge until offending imports are corrected.
- Violation handling: Peer reviewers flag ad-hoc UI implementations and request refactoring to standard @opencode-ai/ui components.
- Exception process: Submit an architectural review request with justification when a platform-specific view cannot utilize standard design system primitives.
- Exception process: Document approved exceptions and scheduled convergence milestones in the component pull request.