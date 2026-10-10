# @octokit/rest for GitHub Data Access and Pull Request Operations: Pull Request Creation Operations Invoke Octorest

Status: proposed
Date: 2025-02-18
Deciders: Detection Pipeline (automated)

## Context

- The codebase requires programmatic interaction with remote repository infrastructure to inspect repository metadata and generate pull requests automatically.
- Direct network calls against remote endpoints introduce maintenance overhead, manual URL formatting, and fragmented authorization headers across callers.
- The @octokit/rest client library provides typed access methods and parameter encapsulation for remote repository access operations.
- A unified data access approach is required to standardize repository query and mutation workflows.

## Problem Statement

Remote repository data access and pull request generation require consistent parameter validation, authorization handling, and predictable error management. Direct ad-hoc network requests disperse API contract knowledge across the application, increasing the likelihood of malformed payloads and inconsistent error responses.

## Decision

1. MUST: Pull request creation operations MUST invoke octoRest.rest.pulls.create supplying validated owner, repo, head, base, title, and body parameters.

## Policy Block

- MUST Pull request creation operations MUST invoke octoRest.rest.pulls.create supplying validated owner, repo, head, base, title, and body parameters.

In scope:
- Modules executing remote repository metadata queries.
- Modules executing pull request creation and management operations.

Out of scope:
- Modules performing non-repository local data persistence.
- Direct raw webhook payload reception that does not dispatch client queries.

## Rationale

- Standardizing on @octokit/rest client methods eliminates manual URL assembly and ensures typed parameter structures for repository operations.
- Encapsulating pull request creation behind dedicated client calls isolates API changes and guarantees schema conformity across invocations.
- Centralized client operations simplify credential injection and error handling compared to disparate raw network requests.

## Consequences

Positive:
- Strongly typed schemas for repository queries and pull request creation operations reduce runtime payload errors.
- Structured response handling simplifies downstream metadata consumption.
- Eliminates duplicate authorization and endpoint construction code across callers.

Negative:
- Couples the data access layer to the external client library interface and lifecycle.
- Increases bundle size compared to minimal low-level network invocation utilities.
- Requires ongoing alignment with client library release cycles and breaking changes.

## Alternatives

- Native fetch requests with manual endpoint formatting and request construction (rejected)
  Rejected because: Lacks compile-time schema validation for request payloads and increases maintenance overhead across endpoints
  When valid: Environments with severe bundle size restrictions where external client dependencies are prohibited
- GraphQL-exclusive data access through @octokit/graphql (rejected)
  Rejected because: Adds query complexity for simple repository metadata fetching and standard pull request creation workflows
  When valid: Scenarios requiring deeply nested, batch-resolved multi-entity queries

## Risks

- External client library breaking changes between major versions could disrupt repository operations.
  Mitigation: Verify resolved dependency versions against project lock artifacts before updating and run integration suites.
  Owner: Engineering Team
- Rate limiting or authentication failures from the remote service may cause unhandled promise rejections.
  Mitigation: Enforce error wrapping and graceful failure logging at client boundary invocation points.
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
- Initialize client instances centrally with authenticated tokens and standard configuration options before dispatching data access requests.
- Catch client exceptions at service boundaries and map them to domain-specific error representations.

## Continuation Context


Verify commands:
- Discover and run the repository type-check script to verify client invocation typing.
- Discover and run the repository test suite to validate repository data access and pull request creation flows.

Accept when:
- All data access operations targeting remote repository resources use typed client methods without type errors.
- The project test suite passes with simulated repository client responses.

## Enforcement

- Verified by: Automated continuous integration pipeline running type checks and test suites.
- Verified by: Peer code review verifying compliance with data access client conventions.
- Violation handling: Pull requests containing raw unencapsulated network calls for covered endpoints must be revised before approval.
- Exception process: Architectural review and documentation required for endpoints not supported by the client library.