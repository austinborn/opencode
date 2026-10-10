# Adoption of @opencode-ai/ui/v2/dialog-v2 for Modal Dialog Components: Components Implementing Modal Overlays Dialog Windows

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The application presents multiple modal user interactions across diverse functional surfaces, including settings, model configuration, directory selection, and command execution.
- Prior iterations risked inconsistent overlay styling, fragmented keyboard dismiss interactions, and diverging accessibility properties across distinct feature implementations.
- The codebase contains an internal design system providing standardized UI primitives, including specialized modal dialog components.

## Problem Statement

Without a standardized modal dialog primitive, application components risk diverging in visual presentation, backdrop styling, focus trapping, and keyboard dismiss semantics across independent views and feature areas.

## Decision

1. MUST: Components implementing modal overlays, dialog windows, or prompt surfaces MUST import and use @opencode-ai/ui/v2/dialog-v2 as their foundational dialog primitive.

## Policy Block

- MUST Components implementing modal overlays, dialog windows, or prompt surfaces MUST import and use @opencode-ai/ui/v2/dialog-v2 as their foundational dialog primitive.

In scope:
- All application view components presenting modal overlays, configuration prompts, selection panels, and command palettes.
- All new and refactored modal dialog viewports developed within the application workspace.

Out of scope:
- Inline non-modal viewports, page layout containers, and embedded panes that do not present as modal overlays.
- External web component integrations that manage their own internal modal states independently.

Exceptions:
- EXC-20-001: A specialized overlay requires low-level platform window integration that cannot be hosted within standard browser overlay containers.

## Rationale

- Intermediate representation evidence confirms seven distinct modal dialog components uniformly adopt @opencode-ai/ui/v2/dialog-v2, demonstrating an established architectural standard across application views.
- Standardizing on the design system dialog primitive centralizes focus management, accessibility compliance, and overlay behavior within a single tested implementation.
- Pairing the dialog primitive with companion design system controls promotes design consistency and accelerates feature development across user interfaces.

## Consequences

Positive:
- Enforces uniform visual presentation, backdrop styling, and keyboard dismiss behaviors across all modal surfaces.
- Eliminates boilerplate modal logic and simplifies dialog implementation across feature views.
- Centralizes accessibility handling and focus trapping within a single maintained module.

Negative:
- Couples modal dialog components directly to the API contract and release cadence of the internal design system module.
- Requires migration effort to refactor existing or legacy modal dialogs to conform to the v2 component interface.

## Alternatives

- Implement bespoke modal overlay wrappers independently within each feature component (rejected)
  Rejected because: Introduces visual fragmentation, inconsistent focus trapping, diverging dismiss behaviors, and redundant accessibility logic across views
  When valid: Prototyping isolated proof-of-concept components in non-production environments
- Adopt a third-party headless modal library directly in application dialogs (rejected)
  Rejected because: Bypasses the unified design system component hierarchy and design tokens established in the internal UI package
  When valid: Developing a standalone tool outside the main application codebase that does not share design system packages

## Risks

- Breaking interface changes in upstream design system updates could impact all consuming dialog components simultaneously.
  Mitigation: Enforce strict lock-version verification and automated regression testing across modal components.
  Owner: engineering team
- Developers may attempt to build ad-hoc modal dialogs using raw elements or divergent libraries.
  Mitigation: Establish static analysis import rules to detect and reject unapproved custom modal implementations.
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
- When implementing modal interactions, compose dialog views using the designated primitive alongside companion design system layout and form controls.
- Coordinate open and closed states through the shared dialog context to maintain predictable modal lifecycles across invocation points.

## Continuation Context


Verify commands:
- echo "Discover and execute project static analysis checks to verify @opencode-ai/ui/v2/dialog-v2 imports across dialog components"
- echo "Discover and execute project test runner to validate modal dialog lifecycle and interaction behaviors"

Accept when:
- All modal dialog components import and use @opencode-ai/ui/v2/dialog-v2 as their foundational overlay primitive.
- Project static analysis and component verification test suites execute successfully without import or structural violations.

## Enforcement

- Verified by: Automated static analysis checks within continuous integration pipelines verifying module imports for modal views.
- Verified by: Peer code review approval required on pull requests introducing or modifying modal dialog viewports.
- Violation handling: Pull requests introducing non-standard modal implementations without an approved exception are blocked from merging.
- Violation handling: Static analysis failures for prohibited or unmanaged modal components fail continuous integration build verification.
- Exception process: Submit an architectural review request detailing the functional limitations preventing adoption of the standard dialog primitive.
- Exception process: Approved exceptions must be tracked with a remediation issue and expiration date in the project tracking system.