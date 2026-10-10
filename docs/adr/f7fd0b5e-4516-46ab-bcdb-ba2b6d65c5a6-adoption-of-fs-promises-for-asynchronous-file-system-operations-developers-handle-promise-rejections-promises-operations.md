# Adoption of fs/promises for Asynchronous File System Operations: Developers Handle Promise Rejections Promises Operations

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Build automation and repository maintenance scripts require extensive file system interaction including directory reading, file inspection, and metadata generation.
- Legacy callback-based APIs and blocking synchronous file system interfaces introduce concurrency bottlenecks and inconsistent error handling structures.
- Multiple script modules across the codebase have converged on the promise-based core module fs/promises to standardize asynchronous I/O operations.

## Problem Statement

File operations within build, maintenance, and asset generation scripts require consistent asynchronous handling to avoid event loop blocking and maintain standardized promise-based error propagation. Inconsistent use of synchronous or callback-based file system interfaces degrades maintainability and complicates integration with modern asynchronous control flows.

## Decision

1. MUST: Developers MUST handle promise rejections from fs/promises operations using structured error boundaries and standardized diagnostic logging.

## Policy Block

- MUST Developers MUST handle promise rejections from fs/promises operations using structured error boundaries and standardized diagnostic logging.

In scope:
- Script automation, build routines, sitemap generation, and repository maintenance utilities performing file system I/O.

Out of scope:
- Runtime application code that does not interact directly with the local file system.
- Performance-critical bootstrapping tasks requiring strictly synchronous sequential execution prior to runtime initialization.

Exceptions:
- EXC-20-001: A script executes during an early initialization phase where an asynchronous event loop is unavailable.

## Rationale

- Evidence from static analysis demonstrates recurring adoption of fs/promises across script modules, validating a team preference for promise-based file system APIs.
- Using fs/promises aligns file handling with standard language asynchronous primitives, improving code readability and enabling unified async/await semantics.
- Asynchronous file reading and writing reduces thread blocking during build and generation tasks that manipulate numerous workspace assets.

## Consequences

Positive:
- Uniform promise-based syntax simplifies error handling and asynchronous flow composition across all automation scripts.
- Eliminates blocking synchronous calls, allowing concurrent file processing operations during build and generation tasks.
- Standardizes core module usage, reducing architectural divergence across disparate utility scripts.

Negative:
- Requires developers to manage async/await syntax and promise rejection handling across all file system touchpoints.
- May introduce race conditions if concurrent file writes target overlapping paths without coordinating mutexes or transactional writes.

## Alternatives

- Synchronous file system APIs (rejected)
  Rejected because: Synchronous calls block thread execution, prevent concurrent operations, and diverge from modern async/await script patterns.
  When valid: Valid only in single-threaded bootstrap sequences prior to asynchronous runtime availability.
- Callback-based file system APIs (rejected)
  Rejected because: Callback-based functions lead to callback nesting, awkward error handling, and incompatibility with async/await idioms.
  When valid: Valid only when maintaining legacy integrations that cannot consume promises.

## Risks

- Uncaught promise rejections from unhandled file system errors causing silent script termination.
  Mitigation: Enforce structured error handling and standard diagnostic logging around every fs/promises operation.
  Owner: engineering team
- Concurrent file operations causing read/write race conditions on shared workspace files.
  Mitigation: Coordinate asynchronous operations with sequential batching or atomic write patterns when operating on shared outputs.
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
- Import file manipulation functions directly from fs/promises to utilize native promise resolution rather than wrapping callback APIs.
- Combine asynchronous directory scanning with promise aggregation utilities to process independent files concurrently.

## Continuation Context


Verify commands:
- Discover the project static analysis runner from the repository manifest and execute linting checks to verify module import conformance.
- Discover the automated test suite runner from the repository configuration and execute script test suites to ensure proper asynchronous completion.

Accept when:
- Static analysis validates that file system operations in automation scripts exclusively use the specified promise-based core module.
- All automated test runs and build script executions complete without unhandled promise rejections or blocked operations.

## Enforcement

- Verified by: Automated static analysis checks in the continuous integration pipeline.
- Verified by: Peer review during pull request evaluations.
- Violation handling: Pull requests containing synchronous or legacy callback file system calls without an approved exception will fail continuous integration checks.
- Exception process: Submit an architectural exception request documenting why asynchronous execution is unfeasible, requiring sign-off from the technical lead.