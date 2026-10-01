# Inference proxy seam for migrated workspace routing: Provider Connection Byok Routing Inference Traffic

Status: proposed
Date: 2026-10-01
Deciders: AI (signal conversion)

## Context

- The console architecture is transitioning backend inference routing to decouple migrated accounts from legacy routing paths without requiring an immediate, high-risk full platform cutover.
- A database migration introduces the `migrated_at` timestamp column to the workspace schema, enabling workspace-level migration state tracking.
- The `inference-proxy.ts` module serves as an intermediary seam designed to redirect model discovery, provider connection BYOK (Bring Your Own Key) routing, and Go inference traffic based on whether a workspace has been migrated.

## Problem Statement

Direct handling of inference and provider discovery in Console route handlers prevented incremental workspace-by-workspace migration and lacked an abstraction to bifurcate traffic based on workspace migration status.

## Decision

1. MUST: Provider connection BYOK routing and Go inference traffic for migrated workspaces MUST be dispatched via the `inference-proxy` abstraction.

## Policy Block

- MUST Provider connection BYOK routing and Go inference traffic for migrated workspaces MUST be dispatched via the `inference-proxy` abstraction.

In scope:
- Workspace-scoped inference endpoints in `packages/console/app`
- Provider discovery and BYOK routing handlers
- Model listing and Go inference request paths

Out of scope:
- Non-workspace-scoped administrative routes
- Database migration execution code

Exceptions:
- ex-1: Endpoints execute strictly outside the context of a workspace and do not have access to a workspace `migrated_at` state.

## Rationale

- Establishing an intermediary proxy seam allows individual workspaces to be migrated incrementally without breaking legacy traffic.
- Centralizes model discovery, provider connections, and Go inference dispatching logic in a single operational layer.
- Provides a unified location to monitor migration progress and eventually sunset legacy pathways.

## Consequences

Positive:
- Decouples migrated accounts from legacy routing paths without requiring immediate full platform cutover.
- Isolates routing decisions based on workspace migration state within a single shared abstraction seam.

Negative:
- Introduces an additional routing hop and indirection in the inference request path.
- Requires tracking and planning to sunset the proxy seam once 100% of workspaces have migrated.

## Alternatives

- Direct handling of inference and BYOK endpoints directly through Console route handlers without migration-state proxying (rejected)
  Rejected because: Precludes gradual per-workspace migration and prevents decoupling migrated accounts from legacy routing paths without performing an immediate full platform cutover.
- Immediate full platform cutover across all workspaces simultaneously (rejected)
  Rejected because: Carries high operational risk by forcing all workspaces onto new inference paths without the ability to validate or rollback incrementally via workspace `migrated_at` state.

## Risks

- The proxy layer may remain as permanent technical debt after 100% of workspaces are migrated.
  Mitigation: Establish migration tracking metrics using `migrated_at` to trigger sunsetting of the intermediary routing once complete.
  Owner: Architecture Review

## Implementation Notes

- Verify that `packages/console/core/src/schema/workspace.sql.ts` properly exposes the `migrated_at` column.
- Ensure `packages/console/app/src/lib/inference-proxy.ts` encapsulates all branching logic based on the migration timestamp.
- Route handlers under `packages/console/app/src/routes/zen` should remain thin delegates to `inference-proxy`.

## Continuation Context


Verify commands:
- Discover and execute test suites targeting inference-proxy and workspace route handlers
- Discover and run static code analysis to ensure direct provider client imports are absent from Zen route handlers

Accept when:
- Inference and provider discovery calls route to migrated destinations when `migrated_at` is set
- Inference and provider discovery calls maintain legacy routing when `migrated_at` is null
- All automated tests for inference proxying pass

## Enforcement

- Verified by: Code review of route handlers in `packages/console/app/src/routes/zen`
- Verified by: Automated test suites asserting that route handlers delegate to `inference-proxy`
- Violation handling: Pull requests with direct provider client calls in workspace route handlers will be blocked
- Violation handling: Unproxied routing paths must be refactored to pass through `inference-proxy`
- Exception process: Submit an exception request detailing why the endpoint cannot be workspace-scoped or routed via the proxy
- Exception process: Approval from Architecture Review is required

## References

- file:packages/console/core/migrations/20260901161032_workspace_migrated_at/migration.sql
- file:packages/console/core/migrations/20260901161032_workspace_migrated_at/snapshot.json
- file:packages/console/core/src/schema/workspace.sql.ts
- file:packages/console/app/src/lib/inference-proxy.ts
- file:packages/console/app/src/middleware.ts
- file:packages/console/app/src/routes/zen/util/handler.ts
- file:packages/console/app/src/routes/zen/v1/models.ts
- commit:5341a5e442679f96fe152aac91c31509f4dd5430
- commit:df6aecdbc50f08679e3ae81fa2b84ac89ec4ff14
- commit:50efc055de282e0e54a87ccebb8e2054cc45efd2
- commit:ef2792511deb406f3b064e05a7cc1a01979260ee
- commit:d2efd81fb3e153a51165b8589c4658107002817e
- commit:3f311390647337d0ddaeeb9be45ede8e5f468209
- commit:9f8db119fcbd4999379129ac7734375ac23460fb
- pr:#46627
- pr:#46830
- pr:#46854
- pr:#47065
- pr:#47266
- pr:#48123