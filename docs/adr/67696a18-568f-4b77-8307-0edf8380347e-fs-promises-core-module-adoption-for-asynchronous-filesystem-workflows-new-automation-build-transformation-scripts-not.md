# fs/promises Core Module Adoption for Asynchronous Filesystem Workflows: New Automation Build Transformation Scripts Not

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Repository automation and build routines frequently interact with the local filesystem to generate assets, inspect directories, and build packages.
- Legacy synchronous filesystem interfaces block runtime event loops, reducing execution throughput during concurrent file operations.
- The codebase establishes a dominant convention across tooling scripts by adopting the asynchronous fs/promises core module for file input and output.
- Low-level bootstrapping entry points maintain isolated synchronous execution while newer scripts consistently standardize on promise-based filesystem APIs.

## Problem Statement

Build scripts and automation pipelines require reliable, high-throughput filesystem access without introducing synchronous I/O bottlenecks or blocking runtime event processing during concurrent multi-file transformations.

## Decision

1. MUST_NOT: New automation, build, and transformation scripts MUST_NOT import or invoke synchronous filesystem blocking APIs unless explicitly operating within a low-level single-process initialization wrapper.

## Policy Block

- MUST_NOT New automation, build, and transformation scripts MUST_NOT import or invoke synchronous filesystem blocking APIs unless explicitly operating within a low-level single-process initialization wrapper.

In scope:
- Build scripts, code generation utilities, and package transformation tasks performing file and directory I/O.
- Repository automation scripts executed during continuous integration and release processes.

Out of scope:
- Low-level single-process bootstrap wrappers that require immediate synchronous signal handling and process forwarding before runtime initialization.

Exceptions:
- EXC-001: A script serves as a direct process launcher or bootstrap wrapper where asynchronous event loop scheduling cannot precede child process detachment.

## Rationale

- Adopting fs/promises standardizes asynchronous control flow using standard async and await syntax across repository tooling.
- Asynchronous filesystem operations enable concurrent read and write batches, improving overall build and generation speed.
- Pairing fs/promises with the path module ensures consistent file resolution across diverse operating environments without platform-specific separator defects.

## Consequences

Positive:
- Non-blocking filesystem operations prevent event loop starvation during intensive build and code-generation pipelines.
- Promise-based APIs provide clean integration with modern asynchronous language features and concurrent execution utilities.
- Standardized path resolution eliminates operating-system-specific filesystem access anomalies.

Negative:
- Asynchronous error propagation requires careful exception handling and rejection tracking to avoid silent failures.
- Increased code verbosity compared to direct sequential synchronous filesystem calls.

## Alternatives

- Synchronous filesystem module APIs for all scripts (rejected)
  Rejected because: Synchronous I/O blocks event loop execution and degrades build pipeline performance during large multi-file transformations.
  When valid: Valid only in immediate bootstrapping wrappers or micro-benchmarking scripts.
- Callback-based filesystem interfaces (rejected)
  Rejected because: Callback interfaces introduce nested control flow and do not compose naturally with modern async and await constructs.
  When valid: Valid when targeting legacy runtimes that do not support promise-based filesystem APIs.

## Risks

- Unhandled promise rejections during asynchronous filesystem operations causing silent script termination.
  Mitigation: Enforce strict async/await try-catch patterns and global unhandled rejection handlers in script runners.
  Owner: Engineering Team
- Concurrency limits exceeded when launching unbounded parallel file read or write operations.
  Mitigation: Apply batching or chunked promise concurrency limiters during mass file processing.
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
- Ensure all asynchronous filesystem operations resolve paths relative to deterministic base directories using path module resolution methods.
- Structure file generation workflows using async functions to allow clean composition and straightforward error propagation.

## Continuation Context


Verify commands:
- Discover the project script runner from the repository manifest and execute the designated static analysis script for filesystem utility modules.
- Execute the repository test suite via the discovered task runner to validate that asynchronous filesystem operations complete without unhandled promise rejections.

Accept when:
- Static analysis validates that all non-bootstrap tooling scripts use asynchronous fs/promises imports without synchronous filesystem calls.
- All build and generation scripts successfully complete with zero unhandled promise rejections or path resolution errors.

## Enforcement

- Verified by: Automated static analysis checks in continuous integration pipelines.
- Verified by: Peer code review for all new tooling, build, and script contributions.
- Violation handling: Pull requests introducing unapproved synchronous filesystem imports in tooling scripts will be blocked from merging.
- Violation handling: Contributors must migrate non-compliant synchronous calls to fs/promises prior to approval.
- Exception process: Exceptions for low-level process bootstrapping must be formally reviewed and approved by the infrastructure lead with documented architectural justification.