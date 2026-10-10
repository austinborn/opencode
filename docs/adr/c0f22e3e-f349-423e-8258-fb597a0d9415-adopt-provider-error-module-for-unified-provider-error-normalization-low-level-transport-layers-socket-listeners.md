# Adopt @/provider/error Module for Unified Provider Error Normalization: Low Level Transport Layers Socket Listeners

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Provider integration components and real-time streaming transports interact with heterogeneous upstream AI services that emit diverse error responses and network anomalies.
- Uncoordinated error representation across disparate transport layers and session pipelines leads to fragmented error recovery logic and unpredictable failure propagation.
- The codebase establishes a centralized internal error contract through @/provider/error to decouple transport-specific event handling from session orchestration.

## Problem Statement

Downstream session pipelines and client consumers require predictable, structured error metadata when upstream AI model providers or real-time transports encounter failures. Without a unified provider error module, individual transport implementations and connection pools would surface disparate error formats, leaking transport details and complicating failure recovery across the system.

## Decision

1. MUST: Low-level transport layers, socket listeners, and stream controllers MUST catch network or protocol errors and transform them into standardized provider error structures defined by the @/provider/error module before propagating failures to upstream callers.

## Policy Block

- MUST Low-level transport layers, socket listeners, and stream controllers MUST catch network or protocol errors and transform them into standardized provider error structures defined by the @/provider/error module before propagating failures to upstream callers.

In scope:
- All provider integration plugins, transport pooling mechanisms, and session LLM coordination layers that communicate with external model providers.

Out of scope:
- Internal application modules that do not interface directly with external model providers or real-time transport streams.

## Rationale

- Centralizing error normalization within @/provider/error ensures uniform extraction of response status codes, header details, and payload messages across diverse network transports.
- Encapsulating transport-level socket and connection pool errors protects upstream session controllers from vendor-specific transport quirks.
- Shared error primitives provide consistent telemetry and diagnostic logging across all provider integration boundaries.

## Consequences

Positive:
- Downstream session handlers receive consistent, typed error structures regardless of the underlying transport protocol or provider implementation.
- Failure inspection, telemetry logging, and status code propagation are standardized across all provider integration modules.
- Connection pools and streaming sockets isolate raw transport failures without leaking connection state to consumer interfaces.

Negative:
- All new provider integrations must implement adapter mapping logic to conform to the internal @/provider/error schema.
- Changes to the @/provider/error contract require coordinated validation across all dependent provider plugins and session modules.

## Alternatives

- Directly propagate raw transport errors and third-party SDK exception classes to session consumers. (rejected)
  Rejected because: Exposes internal transport mechanics, leaks provider-specific exceptions into session state, and prevents uniform error recovery.
  When valid: In simple single-provider prototypes where multi-transport abstraction is unnecessary.
- Implement independent, provider-specific error wrappers within each integration plugin. (rejected)
  Rejected because: Creates fragmented error contracts, duplicate translation logic, and inconsistent error properties across different model providers.
  When valid: When provider integrations share zero architectural commonality and have completely disjoint lifecycle models.

## Risks

- Transport errors may omit essential diagnostic context if provider error normalization drops raw payload details.
  Mitigation: Require provider error structures to capture wrapped error attributes including status, body, and headers.
  Owner: engineering team
- Asynchronous transport failures in connection pools could escape standard controller error handling.
  Mitigation: Enforce event-driven error listeners on all socket and pool instances that direct failures to lifecycle controllers.
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
- Ensure all transport listeners map incoming socket and request failures through the standard provider error adapter before emitting events to controllers.
- Validate that downstream error consumers inspect structured error fields rather than performing string parsing on error messages.

## Continuation Context


Verify commands:
- Discover the workspace verification script from the project manifest and execute the test suite covering provider error modules.
- Discover the project typecheck and lint scripts from the manifest and run static validation across all integration modules.

Accept when:
- All provider integration test suites pass, confirming correct error wrapping and status code propagation across transport layers.
- Static type verification passes across provider plugins and session modules without unresolved error references.

## Enforcement

- Verified by: Automated continuous integration checks executing repository test suites and static analysis.
- Verified by: Peer code review verifying adherence to internal error module contracts in provider implementations.
- Violation handling: Pull requests emitting unnormalized transport errors or bypassing the internal provider error module will be blocked.
- Violation handling: Violations identified during code review must be refactored to wrap errors using the standardized module.
- Exception process: Exceptions require documented justification demonstrating why standard error normalization is technically infeasible.
- Exception process: Temporary exemptions must be approved by the core engineering team and tracked with a remediation issue.