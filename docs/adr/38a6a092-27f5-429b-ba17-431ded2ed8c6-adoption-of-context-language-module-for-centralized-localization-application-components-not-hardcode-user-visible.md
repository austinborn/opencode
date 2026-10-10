# Adoption of @/context/language Module for Centralized Localization: Application Components Not Hardcode User Visible

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- User-facing interface components across the application workspace require consistent presentation of localized text, dynamic string formatting, and locale-aware state.
- Decentralized string definitions and fragmented localization approaches risk inconsistent user terminology, duplicate translation logic, and heightened maintenance overhead.
- Static analysis identifies the @/context/language module uniformly imported across multiple views, dialogs, and user-notifying action modules.

## Problem Statement

Without a standardized module for language and locale management, user-facing components risk defining hardcoded strings or diverging internationalization mechanisms, complicating global locale switching and consistent interface messaging across application subsystems.

## Decision

1. MUST_NOT: Application components MUST NOT hardcode user-visible interface strings or declare isolated translation structures outside the centralized @/context/language module.

## Policy Block

- MUST_NOT Application components MUST NOT hardcode user-visible interface strings or declare isolated translation structures outside the centralized @/context/language module.

In scope:
- All application workspace components, dialogs, settings views, and user-notifying action modules that display user-visible text or handle locale changes.

Out of scope:
- Low-level utility routines, mathematical algorithms, and internal protocol transports that operate exclusively on machine-readable tokens or binary data.

## Rationale

- Centralizing localization in the @/context/language module establishes a single point of authority for locale transitions, pluralization, and string resolution across all views and dialogs.
- Uniform context consumption across twelve observed interface modules demonstrates established architectural coherence and eliminates divergent translation approaches.
- Decoupling visual presentation elements from translation management improves modularity and simplifies UI component testing.

## Consequences

Positive:
- Guarantees uniform internationalization behavior and language consistency across all user-facing dialogs, views, and notifications.
- Eliminates duplicate string dictionaries and hardcoded interface copy across disparate component hierarchies.
- Enables synchronized locale switching across the entire client application via a single shared context provider.

Negative:
- Introduces an architectural dependency on the language context provider for all user-facing presentational components.
- Requires mocking or stubbing the language context provider when executing isolated component unit tests.

## Alternatives

- Component-Level Hardcoded Strings and Inline Translation Maps (rejected)
  Rejected because: Leads to fragmented copy, inconsistent terminology across views, and substantial maintenance burden during localization updates.
  When valid: Only during isolated rapid prototyping of non-production mockups where internationalization is explicitly out of scope.
- Global Singleton Localization Store Without Context Boundary (rejected)
  Rejected because: Bypasses the reactive context lifecycle of the component hierarchy and impairs test isolation across concurrent render trees.
  When valid: In pure non-reactive command-line scripts lacking hierarchical UI context trees.

## Risks

- Components rendering outside the language context provider hierarchy fail to resolve translation keys at runtime.
  Mitigation: Enforce top-level context provider wrapping in root application views and provide fallback defaults within the context consumer hooks.
  Owner: engineering team
- Performance overhead from unnecessary component re-renders when locale state updates.
  Mitigation: Structure context selectors to isolate string lookups from global locale state mutations so components only re-evaluate when referenced strings change.
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
- Ensure all user-facing components obtain string formatting functions via the established context hook rather than reading raw configuration properties.
- Wrap new UI views and dialog roots within the shared language provider during composition to ensure downstream consumer hooks resolve valid localization data.

## Continuation Context


Verify commands:
- Discover and execute the repository test runner to validate that component localization bindings render expected translated content across test suites.
- Discover and execute the repository static analysis and linting scripts to verify that user-facing modules import localization functionality exclusively from the designated context module.

Accept when:
- Repository test suites pass with zero translation resolution errors across all component and dialog views.
- Repository static analysis verifies that no hardcoded user-visible strings exist in newly authored or modified presentation components.

## Enforcement

- Verified by: Automated continuous integration test suites executing component render checks.
- Verified by: Static analysis rules and peer code review inspecting component imports for adherence to centralized localization patterns.
- Violation handling: Continuous integration pull request checks fail when unlocalized strings or unauthorized localization mechanisms are introduced.
- Violation handling: Code review blocks merge requests containing hardcoded UI copy until strings are migrated into the centralized language context.
- Exception process: Submit an architectural exception request detailing technical justification for non-standard string handling, requiring formal approval from frontend engineering leads and documentation in repository tracking records.