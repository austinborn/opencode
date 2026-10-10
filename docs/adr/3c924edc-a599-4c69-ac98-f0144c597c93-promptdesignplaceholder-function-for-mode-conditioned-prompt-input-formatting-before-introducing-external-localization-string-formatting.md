# promptDesignPlaceholder Function for Mode-Conditioned Prompt Input Formatting: Before Introducing External Localization String Formatting

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The prompt input boundary requires dynamic placeholder text resolution depending on the active operational mode.
- Shell mode bypasses internationalization formatting to retain raw user-provided or environment-specific placeholder strings.
- Non-shell modes require localized template strings injected with control token parameters such as slash and at symbols.
- The observed implementation is confined to a single helper function without multi-file adoption across the wider repository.

## Problem Statement

Prompt input components require distinct placeholder text strategies depending on operational mode, risking inconsistent string presentation or leaking localization formatting concerns into presentation components if handled directly within rendering markup.

## Decision

1. MUST: Before introducing external localization or string formatting dependencies, consumers MUST inspect the project lock resolution artifact to identify exact resolved package versions and adhere strictly to documented interfaces for those versions.

## Policy Block

- MUST Before introducing external localization or string formatting dependencies, consumers MUST inspect the project lock resolution artifact to identify exact resolved package versions and adhere strictly to documented interfaces for those versions.

In scope:
- Placeholder string resolution for prompt input components supporting multi-mode operation.

Out of scope:
- General text rendering and static label display components outside prompt input interactions.
- Backend string templating or server-side localization rendering pipelines.

Exceptions:
- EXC-24-001: A component requires entirely static placeholders that never vary across operational modes or locales.

## Rationale

- Decoupling mode evaluation from rendering markup prevents presentation components from accumulating conditional branching logic.
- Delegating template string formatting to the localization function preserves consistent token interpolation across translation catalogs.
- Bypassing translation for shell mode prevents localization catalogs from corrupting raw terminal commands and path inputs.

## Consequences

Positive:
- Separates operational mode evaluation from visual rendering tree concerns.
- Centralizes localized placeholder token formatting for standard prompt input modes.
- Allows shell mode to preserve raw command and path placeholders without locale translation overhead.

Negative:
- Introduces an extra transformation call boundary for simple placeholder rendering.
- Limits single-file pattern adoption without a broader project-wide boundary abstraction.

## Alternatives

- Inline conditional ternary expressions within prompt input presentation components (rejected)
  Rejected because: Couples presentation markup directly to localization keys and mode branching logic, reducing testability and maintainability.
  When valid: Trivial single-mode input fields with static text placeholders.
- Comprehensive middleware interceptor pipeline for UI component property resolution (rejected)
  Rejected because: Excessive architectural abstraction for resolving single component input placeholder strings.
  When valid: Complex multi-stage input form fields requiring cross-cutting authorization, validation, and dynamic translation pipelines.

## Risks

- Localization token parameters or translation key paths fall out of synchronization with translation schemas
  Mitigation: Ensure compile-time type verification covers localization key paths and parameter objects
  Owner: Engineering team
- New operational modes added to input components bypass proper placeholder resolution
  Mitigation: Enforce exhaustive mode type checking within placeholder transformation functions
  Owner: Engineering team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Ensure the placeholder input interface defines strict union types for operational mode values to leverage static exhaustiveness checks.
- Supply translation functions and token parameters via typed interfaces matching the project-wide localization contract.

## Continuation Context


Verify commands:
- Discover the repository test execution script and run the unit test suite covering input component placeholder transformations.
- Discover the repository type verification script and run static type checking to validate placeholder input parameter types.

Accept when:
- Unit tests verify that shell mode returns the unaltered placeholder string and non-shell mode returns formatted localized strings.
- Static type analysis confirms zero type errors across placeholder input signatures and translation parameter contracts.

## Enforcement

- Verified by: Automated unit test execution during continuous integration pipelines.
- Verified by: Static type checking and peer code review of input component changes.
- Violation handling: Pull requests containing inline mode evaluation for prompt placeholders will be rejected during code review.
- Violation handling: Continuous integration test failures for placeholder transformation contracts block merging.
- Exception process: Exceptions must be submitted via architectural review with justification for static single-mode placeholder usage.