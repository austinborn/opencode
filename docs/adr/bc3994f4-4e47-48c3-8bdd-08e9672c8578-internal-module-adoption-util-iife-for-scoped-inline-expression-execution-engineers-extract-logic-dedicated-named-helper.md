# Internal Module Adoption: @/util/iife for Scoped Inline Expression Execution: Engineers Extract Logic Dedicated Named Helper

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Subsystems across the codebase require multi-step initialization, guarded parsing, and error normalization before assigning immutable values.
- Developers frequently evaluate expressions involving conditional branching, schema validation, and exception recovery inline within function argument positions and object declarations.
- Directly constructing raw immediately invoked function expressions or introducing mutable outer-scope variables introduces syntactic noise and weakens encapsulation.
- The project adopts the internal path-aliased utility module @/util/iife to standardize scoped inline block execution.

## Problem Statement

Complex inline computations—such as parsing input payloads, mapping error responses, and configuring API client options—frequently require multi-step statements and guarded exception handling. Without a standardized utility, developers either declare mutable variables in enclosing scopes or write awkward anonymous function expressions, impairing code readability and compromising immutability.

## Decision

1. SHOULD: Engineers SHOULD extract logic into a dedicated named helper module when the block executed within @/util/iife exceeds single-responsibility scoping or is reused across multiple call sites.

## Policy Block

- SHOULD Engineers SHOULD extract logic into a dedicated named helper module when the block executed within @/util/iife exceeds single-responsibility scoping or is reused across multiple call sites.

In scope:
- Modules implementing multi-step inline expressions, error normalization, or complex argument construction.
- Components performing guarded input parsing or conditional configuration before binding immutable values.

Out of scope:
- Simple expressions cleanly expressible using native language ternary operators or nullish coalescing.
- Reusable cross-cutting business logic that should be factored into standalone domain functions.

## Rationale

- The detected pattern demonstrates uniform adoption of @/util/iife across three distinct functional domains, substantiating a cross-cutting convention.
- Encapsulating multi-statement evaluations within a dedicated utility maintains functional immutability by eliminating mutable outer-scope variables.
- Standardizing on an explicit utility function improves code clarity compared to anonymous immediate function expressions that obscure intent.

## Consequences

Positive:
- Enforces immutability by eliminating the need for mutable variable declarations during multi-step computations.
- Improves readability and consistency by providing a standardized semantic wrapper for inline block execution.
- Restricts intermediate variables strictly to the evaluation block, preventing accidental scope pollution into enclosing routines.

Negative:
- Introduces an extra function invocation and minimal closure allocation overhead compared to native inline expressions.
- May slightly obscure stack traces if unhandled exceptions escape from within the invoked block.
- Requires team discipline to prevent developers from embedding overly complex logic that belongs in dedicated domain functions.

## Alternatives

- Native Immediately Invoked Function Expressions (rejected)
  Rejected because: Native anonymous function syntax adds syntactic clutter, degrades readability, and lacks consistent semantic signaling across the codebase.
  When valid: Valid in minimal standalone scripts where internal utility modules are not imported.
- Mutable Local Variable Declarations with Procedural Branching (rejected)
  Rejected because: Mutable variables allow unintentional reassignments, widen variable lifetimes, and compromise functional immutability principles.
  When valid: Valid in performance-critical inner loops where function closure allocation introduces measurable overhead.

## Risks

- Overuse of inline execution blocks leading to excessively large closures within single functions.
  Mitigation: Establish code review guidelines and static analysis thresholds recommending extraction of large blocks into named helper functions.
  Owner: Engineering Team
- Inadvertent swallowing or mishandling of asynchronous operations inside synchronous execution blocks.
  Mitigation: Ensure type definitions differentiate synchronous and asynchronous execution variants and enforce correct return types via static checking.
  Owner: Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Import the utility via the designated module path alias and keep the executed callback focused strictly on computing and returning the target value.
- Avoid side effects within the inline block to ensure pure evaluations and predictable testability.

## Continuation Context


Verify commands:
- Discover and run the repository static analysis and linting scripts to verify compliance with import and scoping rules.
- Discover and execute automated test suites covering affected modules to confirm behavioral correctness.

Accept when:
- All inline scoped block executions consume the centralized utility without raw immediate function expressions or unneeded mutable bindings.
- Static type analysis and automated test suites across all affected packages pass without errors.

## Enforcement

- Verified by: Automated static analysis checks verifying imports and abstract syntax tree structures.
- Verified by: Mandatory peer code review during pull request evaluation.
- Violation handling: Pull requests introducing unencapsulated mutable variables or raw immediately invoked function expressions are rejected until refactored.
- Exception process: Exceptions require formal review and written approval from repository maintainers documenting why alternative scoping patterns are necessary.