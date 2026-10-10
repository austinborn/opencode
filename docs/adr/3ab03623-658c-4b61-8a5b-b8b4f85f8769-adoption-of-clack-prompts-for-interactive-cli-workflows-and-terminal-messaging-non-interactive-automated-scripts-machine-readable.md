# Adoption of @clack/prompts for Interactive CLI Workflows and Terminal Messaging: Non Interactive Automated Scripts Machine Readable

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The project CLI surface and developer scripting tools require interactive user input, progress indication, and status messaging in the terminal.
- Static analysis identifies repeated imports and structured logging calls across seven command execution modules and developer environment setup scripts.
- Relying on disparate terminal utilities or unstyled stream writes creates inconsistent user experiences and complicates terminal state management.

## Problem Statement

Without a standardized terminal interaction framework, command-line interfaces risk divergent user prompting patterns, inconsistent output styling, and fragile error reporting across commands and maintenance scripts.

## Decision

1. MAY: Non-interactive automated scripts or machine-readable output formatters MAY bypass interactive prompt abstractions when operating in headless or piped streaming contexts.

## Policy Block

- MAY Non-interactive automated scripts or machine-readable output formatters MAY bypass interactive prompt abstractions when operating in headless or piped streaming contexts.

In scope:
- Interactive CLI command entry points and subcommands requiring user interaction or terminal status reporting
- Developer environment initialization and maintenance scripts interacting with terminal operators

Out of scope:
- Background daemons and service processes that emit structured machine-readable logs to external log collectors
- Non-interactive piping pipelines or headless automation jobs where interactive terminal prompts are disabled

Exceptions:
- EXC-20-001: Execution occurs in a non-interactive automated pipeline or headless continuous integration environment where terminal formatting obscures machine-readable logs

## Rationale

- Evidence across seven command execution and developer scripting modules confirms widespread adoption of @clack/prompts for interactive prompts and status logging.
- Adopting a single unified library establishes standard visual conventions and centralized prompt ergonomics across the CLI interface.
- Consolidating prompt and logging interactions reduces custom stream-handling code and improves maintainability across command handlers.

## Consequences

Positive:
- Establishes uniform terminal visual aesthetics, consistent prompt controls, and standardized status messaging across all command modules.
- Simplifies error, warning, and informational output handling in user-facing flows through structured prompt and logging primitives.
- Reduces boilerplate code required to construct interactive user confirmation and data collection workflows in the terminal.

Negative:
- Introduces runtime dependency coupling to an external terminal abstraction library for all interactive command modules.
- Requires command authors to handle library-specific asynchronous prompt lifecycles and cancellation events consistently.

## Alternatives

- Native standard output and standard error stream writing primitives (rejected)
  Rejected because: Lacks uniform terminal styling, interactive prompt controls, and structured status logging, causing fragmented user experiences across command pathways.
  When valid: Valid in low-level runtime bootstrap contexts before dependency resolution or in headless piped utilities requiring raw stream passthrough.
- Ad-hoc terminal coloring and cursor manipulation helpers combined with raw stream listeners (rejected)
  Rejected because: Distributes terminal presentation logic across disparate styling libraries, increasing maintenance overhead and producing inconsistent visual prompt states.
  When valid: Valid when constructing specialized full-screen terminal graphical interfaces that exceed standard prompt and status logging capabilities.

## Risks

- Interactive prompts may hang or fail silently if executed within headless non-interactive terminal environments without TTY allocation.
  Mitigation: Detect interactive terminal capabilities prior to rendering prompts and provide graceful non-interactive fallbacks or flag-driven inputs.
  Owner: CLI Engineering Team
- Upstream changes in the prompt library API could disrupt interactive command workflows during dependency updates.
  Mitigation: Adhere to lock-version grounding, verify resolved dependency versions before updates, and encapsulate prompt invocations behind standardized internal command helpers.
  Owner: CLI Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Encapsulate user-facing terminal interactions using the prompt library's logging functions for informational, warning, and error states.
- Ensure interactive prompt routines account for terminal interrupt signals and cancellation workflows, returning structured cancellation states.

## Continuation Context


Verify commands:
- Discover and execute the repository project verification script to ensure all interactive command modules compile and adhere to terminal messaging constraints.
- Execute the repository static analysis and linting command configured in the project manifest to detect direct console invocations in command handlers.

Accept when:
- Interactive command handlers and developer scripts route terminal feedback through the adopted interactive prompt library without direct standard console stream calls.
- The project build and verification suite completes with zero exit code and no lint violations regarding terminal logging conventions.

## Enforcement

- Verified by: Continuous integration static analysis checks verifying absence of direct console stream calls in interactive command modules
- Verified by: Peer code review for all new and modified CLI command implementations
- Violation handling: Submissions introducing direct console writes or unapproved terminal formatting libraries will fail static validation checks and require remediation prior to integration.
- Exception process: Submit an architecture review request detailing the necessity for bypassing interactive prompt abstractions, requiring approval from the designated technical lead.