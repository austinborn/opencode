# Centralized Billing Domain Module Adoption: @opencode-ai/console-core/billing.js: External Payment Gateway Callbacks Webhook Handlers

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Console application routes require consistent access to workspace billing information, including customer identifiers, payment methods, balance reloads, and subscription limits.
- External payment gateway webhooks must update internal billing records, customer metadata, and transaction tables reliably.
- Direct database queries and ad-hoc mutations across multiple route files lead to fragmented business logic and inconsistent balance handling.
- The application centralizes billing operations into a shared core library module to ensure unified business logic across UI route actions and backend webhook endpoints.

## Problem Statement

Managing workspace billing, payment method registration, subscription limits, and credit reloads across multiple console views and external webhook handlers without a single authoritative domain module creates divergence in business rules, increases the risk of financial state inconsistency, and complicates security auditability.

## Decision

1. SHOULD: External payment gateway callbacks and webhook handlers SHOULD coordinate balance increments, customer record synchronization, and payment audit logging through transactional boundaries defined in conjunction with the billing domain module.

## Policy Block

- SHOULD External payment gateway callbacks and webhook handlers SHOULD coordinate balance increments, customer record synchronization, and payment audit logging through transactional boundaries defined in conjunction with the billing domain module.

In scope:
- Console application routes rendering billing, usage, subscriptions, and payment settings
- Server queries and actions mutating customer balances, payment methods, and auto-reload thresholds
- External billing provider webhook endpoints ingesting payment confirmations and invoice events

Out of scope:
- Unauthenticated public marketing pages
- Internal service-to-service communication layers outside the console application boundary

## Rationale

- Adopting @opencode-ai/console-core/billing.js guarantees that all billing operations conform to the same business logic, validation rules, and schema definitions across client route queries and server webhook handlers.
- Encapsulating billing interactions within the core module prevents route-level code from performing fragmented, error-prone mutations directly against underlying persistence tables.
- Evidence across eleven route modules and webhook handlers demonstrates an established architectural standard for managing financial state and subscription lifecycles.

## Consequences

Positive:
- Eliminates duplicated financial calculation logic across workspace views, payment settings, and usage trackers.
- Ensures consistent reconciliation of external payment gateway events with internal workspace balance and subscription records.
- Protects billing state invariants by channeling operations through authorized actor contexts and shared transaction helpers.

Negative:
- Console routes and webhook handlers depend directly on the domain module interface, requiring synchronized updates when billing method signatures evolve.
- Developers must strictly coordinate actor authentication and transactional database sessions before invoking core billing functions.

## Alternatives

- Direct Database Table Access in Route Handlers (rejected)
  Rejected because: Scattering raw database queries across individual route handlers duplicates business logic, leads to inconsistent balance updates, and risks bypassing actor permission checks.
  When valid: Only acceptable in standalone prototyping scripts that do not run in production environments.
- Third-Party Billing Gateway SDK Direct Coupling in UI Routes (rejected)
  Rejected because: Direct coupling of client components and route actions to external payment SDKs leaks vendor-specific details across the application and prevents unified subscription state tracking.
  When valid: Acceptable when building isolated third-party client payment widgets that require direct browser-to-gateway tokenization.
- Authoritative Core Billing Domain Module (@opencode-ai/console-core/billing.js) (accepted)
  Rejected because: None. Centralizes balance management, customer metadata mapping, payment reconciliation, and subscription limit calculations behind a unified interface.
  When valid: Valid across all application routes and server webhook handlers requiring billing or payment integration.

## Risks

- Tight coupling between route components and internal core billing domain structures could make API evolution difficult.
  Mitigation: Enforce strict actor context wrappers and define clean query projection interfaces in the core billing module.
  Owner: engineering team
- Inconsistent calculation of rolling and weekly usage limits across different console views.
  Mitigation: Centralize usage calculation and windowing logic inside dedicated domain analytics helpers within the core module.
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
- Ensure all server queries consuming billing utilities are wrapped within actor context boundaries to enforce workspace isolation.
- Coordinate payment gateway customer synchronization and balance increments inside transactional database blocks to guarantee atomicity.
- Use standardized billing calculation utilities for computing rolling and fixed usage limits rather than calculating thresholds in component render trees.

## Continuation Context


Verify commands:
- Discover the workspace verification script from the repository manifest and execute the test suite covering billing domain routes.
- Execute the repository static analysis and type checking suite to verify import path compliance and contract alignment across console routes.
- Run the project integration test workflow targeting payment processing and webhook handlers to confirm transaction boundaries.

Accept when:
- All billing route endpoints and webhook consumers import domain operations exclusively from @opencode-ai/console-core/billing.js without bypassing actor boundaries.
- Project static type checking and automated test suites pass without unresolved module imports or contract mismatches.
- Financial balance mutations and subscription updates execute within transactional boundaries and preserve audit log integrity.

## Enforcement

- Verified by: Automated repository static analysis verifying module import paths and contract conformance.
- Verified by: Continuous integration workflows executing the automated test suite for billing and webhook flows.
- Verified by: Mandatory peer review on pull requests touching billing, subscription, or payment handling code.
- Violation handling: Static analysis failures block code integration if unapproved direct mutations or alternative billing modules are detected.
- Violation handling: Pull requests containing unapproved direct billing mutations will be rejected during code review.
- Violation handling: Non-compliant route logic must be refactored to consume the core billing domain module prior to production release.
- Exception process: Submit an architecture review proposal detailing technical justification for bypassing the domain module.
- Exception process: Obtain formal sign-off from domain platform leads before introducing direct billing schema operations.
- Exception process: Document transitional plans to migrate custom billing logic back into the authoritative module.