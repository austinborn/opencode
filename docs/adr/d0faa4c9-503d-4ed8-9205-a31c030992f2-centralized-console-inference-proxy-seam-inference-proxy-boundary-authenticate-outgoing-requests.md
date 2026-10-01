# Centralized Console Inference Proxy Seam: Inference Proxy Boundary Authenticate Outgoing Requests

Status: proposed
Date: 2026-10-01
Deciders: AI (signal conversion)

## Context

- Console routes and downstream services interact with upstream AI model providers and external Zen endpoints. Previously, clients and route endpoints directly communicated with upstream model providers without an intermediate gateway boundary.
- Direct communication decentralizes identity propagation and billing attribution across disparate client handlers. Introducing `inference-proxy.ts` and associated Zen route handlers establishes a proxy seam within Console to mediate upstream AI interactions, enforce request authentication, propagate client IP headers, and track Go billing sources.

## Problem Statement

Direct client invocations of upstream AI model providers lack centralized authentication, consistent client IP header propagation, and unified billing attribution across Console routes.

## Decision

1. MUST: The inference proxy boundary MUST authenticate outgoing requests and propagate incoming client IP headers to upstream provider endpoints.

## Policy Block

- MUST The inference proxy boundary MUST authenticate outgoing requests and propagate incoming client IP headers to upstream provider endpoints.

In scope:
- packages/console/app/src/lib/inference-proxy.ts
- packages/console/app/src/routes/zen/**
- infra/console.ts

Out of scope:
- Internal service-to-service communication not involving external AI inference or Zen providers.

## Rationale

- Isolates Console clients from upstream AI provider implementation details, credentials, and API changes.
- Ensures centralized authentication and consistent header propagation (including client IP) across all inference routes.
- Standardizes Go billing source tracking and consumption accounting at a single architectural gateway seam.

## Consequences

Positive:
- Consistent billing metadata attribution across all inference requests.
- Centralized ingress point for upstream provider authentication and security policies.
- Simplified client integration by abstracting upstream provider endpoints behind a uniform proxy seam.

Negative:
- Introduces an additional network hop and processing overhead for external inference calls.
- The proxy boundary becomes a critical dependency for all outgoing AI and Zen operations.

## Alternatives

- Direct client routing to model providers without a unified console inference proxy boundary (rejected)
  Rejected because: Bypasses centralized authentication, prevents consistent client IP header propagation, and scatters billing attribution across separate client implementations.
- Per-endpoint provider integration using local handler middleware (deferred)
  When valid: When specific model integrations require non-standard protocols that cannot be accommodated by the centralized inference proxy boundary.

## Risks

- A failure or misconfiguration in the inference proxy boundary can disrupt all downstream model provider integrations.
  Mitigation: Ensure resilient error handling, health checks, and comprehensive route-level integration testing across all proxy handlers.
  Owner: Console Core Team
- High request volumes through the proxy could cause bottlenecks in quota and billing metadata processing.
  Mitigation: Partition quota tracking and rate-limiting across dedicated handler pathways within the proxy seam.
  Owner: Console Core Team

## Implementation Notes

- Configured proxy seam logic in `packages/console/app/src/lib/inference-proxy.ts`.
- Integrated proxy routes across `packages/console/app/src/routes/zen/go/v1/systemone.ts` and `packages/console/app/src/routes/zen/v1/systemone.ts` using shared utilities in `packages/console/app/src/routes/zen/util/`.
- Updated console infrastructure configurations in `infra/console.ts` to support proxy endpoints.

## Continuation Context


Verify commands:
- Discover and execute tests covering inference proxy routing, header forwarding, and billing tracking.
- Discover and run static analysis checks across console routes to ensure no unproxied external provider calls exist.

Accept when:
- All outgoing AI model requests in Console routes pass through inference-proxy.ts.
- Client IP headers and Go billing source metadata are verified in outgoing requests to upstream providers.
- Unit and integration tests for proxy handlers and routes pass cleanly.

## Enforcement

- Verified by: Automated integration test suites validating proxy routing, authentication, and billing metadata propagation.
- Verified by: Code review ensuring no direct external provider calls or API keys are introduced outside the inference proxy seam.
- Violation handling: Pull requests with direct client calls to external inference providers will be blocked during code review.
- Violation handling: Endpoints bypassing billing tracking or header propagation must be remediated prior to merge.
- Exception process: Submit an architectural review request detailing upstream integration constraints that prevent proxy usage.

## References

- file:infra/console.ts
- file:packages/console/app/src/lib/inference-proxy.ts
- file:packages/console/app/src/routes/zen/go/v1/systemone.ts
- file:packages/console/app/src/routes/zen/util/handler.ts
- file:packages/console/app/src/routes/zen/util/provider/systemone.ts
- file:packages/console/app/src/routes/zen/v1/systemone.ts
- commit:1573a7b608eb13c45a2243201964c7784f2a8281
- commit:34b4c3cd9fe72bf0c5438cc287baca81ba6ef9a1
- commit:5cf4e13588c4af05046cbfddebe1d2d97da6cf6b
- commit:70a24697ea0028e19f22712fd63059538cb4bee7
- commit:cf494c2029d4334dfe6defc31209341ca97c2e94
- commit:df23b7f9488a38e6f8064a0739d4f8cde86d7cfb
- pr:#49036