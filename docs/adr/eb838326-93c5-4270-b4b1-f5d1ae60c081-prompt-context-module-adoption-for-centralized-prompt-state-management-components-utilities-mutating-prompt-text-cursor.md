# Prompt Context Module Adoption for Centralized Prompt State Management: Components Utilities Mutating Prompt Text Cursor

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Centralized prompt state and contextual references must remain coordinated across the text editor, attachment selectors, history navigators, and submission pipelines.
- Disparate interface surfaces including session composers, fork dialogs, and request builders require synchronized access to active prompt contents, selection metadata, and attached context items.
- Static analysis reveals consistent adoption of the prompt context module across eleven distinct files within the application workspace to coordinate prompt reading, mutation, and attachment tracking.

## Problem Statement

Without a unified state coordination module, components that handle user input, attachment management, history traversal, session forking, and request payload generation risk desynchronizing prompt contents, context references, and cursor positions across views. The application requires an authoritative context module to govern prompt mutations, ensure reactivity across composer surfaces, and provide consistent context item aggregation.

## Decision

1. MUST: Components and utilities mutating prompt text or cursor positioning MUST invoke the prompt setter interface with explicit content structures and positional offsets rather than maintaining duplicate local text buffers.

## Policy Block

- MUST Components and utilities mutating prompt text or cursor positioning MUST invoke the prompt setter interface with explicit content structures and positional offsets rather than maintaining duplicate local text buffers.

In scope:
- Modules managing prompt input presentation, editing, history navigation, and draft persistence.
- Subsystems preparing prompt parts and contextual items for session request submission.
- Modal interfaces restoring, forking, or transferring active prompt buffers across sessions.

Out of scope:
- Static display components that render finalized session transcripts without text editing capabilities.
- Low-level network transport utilities operating on raw serialized payloads independent of client state.

## Rationale

- Uniform adoption of the prompt context module establishes a single source of truth for prompt buffers and context attachments across all composer components and dialogs.
- Encapsulating cursor tracking, context collection mutations, and prompt setters within a standard module boundary prevents inconsistent state transitions between the input view and background serialization pipelines.
- Standardizing on reactive access methods guarantees that auxiliary workflows such as session forking, edit restoration, and model selection remain synchronized with user input.

## Consequences

Positive:
- Provides a single authoritative boundary for reading and mutating prompt buffers and contextual attachments.
- Eliminates duplicate state synchronization logic between input editors, attachment controllers, and session forking dialogs.
- Simplifies request generation by exposing consistent prompt and context retrieval APIs across composer workflows.

Negative:
- Introduces direct architectural coupling between composer-related components and the prompt context interface.
- Requires components operating outside the immediate composer view hierarchy to establish appropriate context providers or state proxies.

## Alternatives

- Decentralized component-local state with event emitter buses for prompt synchronization (rejected)
  Rejected because: Leads to fragmented state management, race conditions during rapid editing or history navigation, and high synchronization overhead across disparate dialogs.
  When valid: Isolated single-input forms with no shared context items, history traversal, or cross-dialog session forking.
- Generic global application store storing unstructured raw text strings (rejected)
  Rejected because: Fails to encapsulate structured prompt parts, cursor positioning, and context item lifecycle management within domain-specific interfaces.
  When valid: Minimal prototypes lacking structured multimodal parts, attachments, or model-specific prompt configurations.

## Risks

- Tight coupling of utility functions and modal dialogs to prompt context semantics may complicate isolated unit testing.
  Mitigation: Expose mockable contract abstractions and structured test fixtures simulating the prompt context interface in automated test suites.
  Owner: Engineering team
- Uncoordinated simultaneous mutations from concurrent background processes and user typing could trigger state jitter.
  Mitigation: Enforce explicit state transition sequencing through designated prompt context setter patterns and composition boundaries.
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
- Consumers implementing prompt interaction features must integrate with the prompt context provider and consume standard reactive accessors for prompt retrieval and mutation.
- Context items, file attachments, and selection metadata must be registered through the dedicated context collection methods to maintain alignment with request building logic.

## Continuation Context


Verify commands:
- Discover and run the repository type validation script to verify module interface adherence and type compatibility across all prompt context consumers.
- Discover and execute the repository unit and component test suites covering prompt input, context item management, and session forking components.

Accept when:
- Static type analysis succeeds with zero diagnostic errors across all prompt-interacting modules.
- All automated unit and component tests validating prompt mutation, context item registration, and submission state pass cleanly.

## Enforcement

- Verified by: Automated continuous integration pipelines validating static types and unit test suites across all pull requests.
- Verified by: Peer architecture and code reviews verifying prompt interactions route exclusively through the prompt context module.
- Violation handling: Pull requests introducing direct prompt buffer bypasses or uncoordinated state stores are blocked until refactored to consume the prompt context interface.
- Exception process: Proposals to introduce alternative prompt state management pathways require architectural review and explicit sign-off from the lead maintainers.