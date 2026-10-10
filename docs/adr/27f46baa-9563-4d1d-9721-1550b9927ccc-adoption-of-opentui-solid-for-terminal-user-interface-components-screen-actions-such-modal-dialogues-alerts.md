# Adoption of @opentui/solid for Terminal User Interface Components: Screen Actions Such Modal Dialogues Alerts

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Terminal user interfaces require consistent state synchronization, screen navigation, and keyboard event handling across varied terminal environments.
- The codebase incorporates @opentui/solid alongside supporting keymap modules to manage declarative terminal view rendering and screen command bindings.
- Direct terminal stream manipulation and fragmented input handling create maintenance burdens and inconsistent user experiences across terminal screens.

## Problem Statement

Building terminal-based user interfaces without a standardized reactive framework leads to fragmented event handling, complex manual screen repaints, and tightly coupled terminal I/O logic. A standardized UI component and keymap architecture is needed to ensure predictable rendering, structured navigation bindings, and maintainable terminal interactions.

## Decision

1. SHOULD: Screen actions such as modal dialogues, alerts, and navigation commands SHOULD be isolated into discrete screen command definitions.

## Policy Block

- SHOULD Screen actions such as modal dialogues, alerts, and navigation commands SHOULD be isolated into discrete screen command definitions.

In scope:
- Interactive terminal user interface components and plugins.
- Terminal screen navigation and keybinding definitions.

Out of scope:
- Non-interactive command-line utilities and batch processing routines.
- Backend services and non-terminal plugin infrastructure.

## Rationale

- Adopting @opentui/solid provides a reactive component model tailored for terminal presentation, eliminating manual buffer redrawing.
- Standardizing on @opentui/keymap/solid centralizes screen keybinding registration, ensuring consistent shortcut handling across modal, alert, and screen navigation contexts.
- Evidence in the codebase demonstrates integration between screen command definitions and @opentui libraries, establishing an architectural boundary for terminal UI plugins.

## Consequences

Positive:
- Declarative terminal view rendering simplifies UI state management across screens, alerts, and modals.
- Centralized keymap handling provides structured command routing for navigation and user input actions.
- Component-based terminal architecture promotes view modularity and automated component testing.

Negative:
- Introduces runtime and compile-time dependency coupling to the @opentui library ecosystem.
- Requires engineers authoring terminal views to master the specific reactive patterns and keymap registration conventions of @opentui/solid.

## Alternatives

- Direct terminal escape sequence rendering and manual input stream handling (rejected)
  Rejected because: Manual terminal orchestration increases codebase complexity, lacks reactive state synchronization, and introduces terminal rendering inconsistencies.
  When valid: When developing low-overhead diagnostics or minimal utilities where external dependencies are strictly prohibited.
- Imperative terminal widget toolkit integration (rejected)
  Rejected because: Imperative widget lifecycles require manual screen repainting and event propagation that do not integrate cleanly with reactive component models.
  When valid: When integrating with legacy terminal frameworks that do not support reactive rendering paradigms.

## Risks

- Specialized terminal rendering dependencies may introduce ecosystem lock-in or maintenance risks if upstream packages evolve breaking changes.
  Mitigation: Encapsulate terminal view components behind project plugin boundaries and adhere to lock-version grounding.
  Owner: engineering team
- Mismatched terminal keybindings may conflict with host terminal emulator key interceptors.
  Mitigation: Verify keybinding bindings through structured command mapping and test across target terminal configurations.
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
- Terminal screen components should be organized into modular views corresponding to distinct user workflows such as navigation, alerts, and modal dialogs.
- Keybindings should be declared declaratively alongside their respective view handlers to keep navigation bindings synchronized with component lifecycle.

## Continuation Context


Verify commands:
- Discover and execute the project test runner script defined in repository configuration.
- Discover and execute the project static analysis and linting verification script.

Accept when:
- All terminal interface component test suites execute successfully without rendering errors.
- Static analysis verifies that all keymap registrations map to recognized screen command handlers.

## Enforcement

- Verified by: Automated static analysis checks verifying module imports and component structure against designated boundaries.
- Verified by: Peer code review for all terminal user interface components and plugin contributions.
- Violation handling: Pull requests introducing direct terminal output manipulation or bypassing @opentui/solid without an approved exception will be blocked from merging.
- Exception process: Submit an architecture review request detailing the constraints that prevent using @opentui/solid and obtain approval from the project leads.