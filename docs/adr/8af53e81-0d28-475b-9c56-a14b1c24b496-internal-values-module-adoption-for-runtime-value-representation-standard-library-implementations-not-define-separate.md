# Internal Values Module Adoption for Runtime Value Representation: Standard Library Implementations Not Define Separate

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Interpreter execution environments require consistent data representations across diverse standard library capabilities.
- Disparate domain modules such as collections, date handling, regular expressions, and object manipulation interact with runtime evaluation primitives.
- Centralizing common value representations into a dedicated internal values module standardizes runtime boundaries and eliminates fragmented ad-hoc serialization.

## Problem Statement

Without a unified value representation module, standard library components and interpreter models risk implementing conflicting value wrappers, coercion logic, and serialization strategies. This fragmentation leads to cross-module interoperability defects, inconsistent type semantics during evaluation, and redundant conversions across runtime boundaries.

## Decision

1. MUST_NOT: Standard library implementations MUST NOT define separate internal representations for primitive or composite runtime values that bypass the shared values module.

## Policy Block

- MUST_NOT Standard library implementations MUST NOT define separate internal representations for primitive or composite runtime values that bypass the shared values module.

In scope:
- Standard library modules implementing runtime primitives and utility domains.
- Interpreter runtime definitions and execution model abstractions.

Out of scope:
- External host environment integration points that operate strictly outside the interpreter execution context.

## Rationale

- Importing a single internal values module across standard library implementations establishes uniform semantics for runtime values across all supported domains.
- Consolidation of value manipulation logic reduces duplication in type coercion, collection wrapping, and boundary conversions across interpreter components.
- Centralized value definitions simplify future runtime enhancements by providing a single point of modification for evaluation data structures.

## Consequences

Positive:
- Consistent runtime value semantics across all standard library domains.
- Elimination of redundant, ad-hoc value transformations across interpreter subsystems.
- Clear architectural boundaries separating domain-specific library behavior from fundamental runtime representations.

Negative:
- Coupling of standard library utilities to the interface exposed by the values module.
- Modifications to the shared values contract require coordinated verification across all dependent standard library modules.

## Alternatives

- Autonomous Value Representations per Standard Library Module (rejected)
  Rejected because: Creating independent value representations within individual standard library modules creates semantic drift, complicates inter-module data exchange, and duplicates coercion logic.
  When valid: Valid only when standard library modules operate in completely isolated execution runtimes with zero data exchange.
- Direct Native Language Type Exposure Without Wrapper Abstraction (rejected)
  Rejected because: Directly exposing raw host environment primitives without intermediate value abstraction prevents controlled runtime evaluation, sandboxing, and unified type coercion.
  When valid: Valid only in transparent script passthrough runtimes where host environment encapsulation is unnecessary.

## Risks

- Breaking interface changes in the internal values module impacting all standard library components simultaneously.
  Mitigation: Enforce contract stability through automated regression test suites covering all dependent standard library modules prior to values module changes.
  Owner: runtime engineering team
- Performance overhead introduced by universal value wrapping across standard library function calls.
  Mitigation: Profile evaluation paths and optimize internal values module allocation patterns and reference unwrapping.
  Owner: runtime engineering team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Standard library modules must import values module abstractions using internal relative import conventions established in the workspace package.
- When introducing a new standard library capability, map domain data structures to existing values module primitives rather than inventing custom container types.

## Continuation Context


Verify commands:
- Discover the workspace static analysis and type checking scripts from repository configuration and execute them across all standard library packages.
- Discover and run the project automated test suite targeting standard library and interpreter modules to verify runtime value compatibility.

Accept when:
- Static type analysis passes with zero type errors across all standard library and interpreter modules importing the values module.
- All unit and integration test suites covering standard library operations and interpreter value conversions succeed without regression.

## Enforcement

- Verified by: Continuous integration type checking and automated test workflows.
- Verified by: Peer code review verifying adherence to shared values module usage across standard library changes.
- Violation handling: Pull requests introducing independent value models or bypassing the shared values module will fail review and must be refactored.
- Exception process: Exceptions require documented justification and sign-off from the runtime architecture maintainers detailing why the shared values representation is inadequate.