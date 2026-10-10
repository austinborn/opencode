# Adoption of Server Synchronization Context Module (@/context/server-sync): Before Implementing Modifying Code That Consumes

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Multiple application controllers, layout components, and workspace controllers require access to server state, active project metadata, and session collections.
- Without a centralized synchronization mechanism, individual UI components and controllers risk managing independent, conflicting server connections and data caches.
- The application codebase adopts the internal `@/context/server-sync` module across seven distinct consumer files to unify server communication, directory session loading, and project querying.

## Problem Statement

Managing distributed server state, active project definitions, and session loading across disparate application views without a unified synchronization context leads to duplicated network requests, cache divergence, and inconsistent routing states. A standardized architectural module is necessary to centralize server synchronization and provide consistent reactive data access across the application.

## Decision

1. MUST: Before implementing or modifying code that consumes versioned dependencies or shared workspace modules, the consumer MUST inspect the repository dependency manifest and lock artifact to resolve exact pinned versions according to the Discovery Policy.

## Policy Block

- MUST Before implementing or modifying code that consumes versioned dependencies or shared workspace modules, the consumer MUST inspect the repository dependency manifest and lock artifact to resolve exact pinned versions according to the Discovery Policy.

In scope:
- All controllers, layout components, hooks, and views in the application layer requiring access to server state, project lists, or session synchronization.
- Application storybook configurations and tests that instantiate views dependent on server state.

Out of scope:
- Standalone external SDK packages that communicate with backend services independently of the client application context.
- Stateless presentation components that receive domain data solely via immutable input properties.

## Rationale

- The IR evidence confirms consistent adoption of `@/context/server-sync` across seven distinct application files spanning controllers, layout components, hooks, and stories.
- Centralizing synchronization operations such as session loading and project querying within `@/context/server-sync` prevents race conditions and redundant remote queries.
- Providing uniform reactive context accessors decouples UI components from low-level network and cache management protocols.

## Consequences

Positive:
- Centralizes remote server synchronization logic, preventing divergent synchronization states across different controllers and layouts.
- Encapsulates session loading and project data access behind uniform reactive context accessors.
- Simplifies application views and controllers by delegating data synchronization and cache hydration to a dedicated module.

Negative:
- Introduces a shared dependency on the synchronization context, requiring coordinated updates when the synchronization contract evolves.
- Tightens coupling between controller lifecycle states and the availability of server synchronization providers.
- Increases initial context setup overhead in testing environments and component stories.

## Alternatives

- Decentralized HTTP and WebSocket calls directly in each controller and view component (rejected)
  Rejected because: Causes duplicated network polling, inconsistent session caches across routing transitions, and fragmented error handling.
  When valid: Valid only in isolated one-off utility scripts operating outside the main application runtime.
- Generic key-value client-side caching without domain synchronization lifecycle management (rejected)
  Rejected because: Lacks domain-specific synchronization semantics such as project session loading, route synchronization, and reactive directory tracking.
  When valid: Valid for purely static or immutable configuration data that does not synchronize with active server sessions.

## Risks

- Performance degradation or unnecessary re-renders if the centralized synchronization context emits frequent broad updates.
  Mitigation: Design the synchronization module with fine-grained reactive accessors and batched loading methods to avoid cascading component re-renders.
  Owner: engineering team
- Increased test setup complexity for isolated unit tests that consume the synchronization context.
  Mitigation: Provide standard test harness mocks and fixture providers for the synchronization context within the shared testing utilities.
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
- Initialize the server synchronization context at the application root or within appropriate provider boundaries to ensure downstream controllers and views receive reactive synchronization state.
- Coordinate directory session loading triggers with router lifecycle transitions to prevent redundant background fetch requests.
- Ensure storybook stories and test suites provide mock implementations of the server synchronization context.

## Continuation Context


Verify commands:
- discover_and_run_static_analysis
- discover_and_run_type_check
- discover_and_run_tests

Accept when:
- Static analysis passes with zero import boundary violations across all consumers of the server synchronization module.
- Type checking confirms all calls to the server synchronization interface conform to exported method and property signatures.
- Automated test suites pass without regressions in session retrieval or project synchronization behavior.

## Enforcement

- Verified by: Automated static analysis rules verifying that remote server synchronization and session loading route through the server synchronization module.
- Verified by: Pull request reviews verifying adherence to reactive server synchronization patterns across controllers and UI views.
- Verified by: Automated regression test suites verifying synchronization behavior across application routes.
- Violation handling: Automated verification failures block integration pipelines when unauthorized direct synchronization pathways are detected.
- Violation handling: Code review rejection requiring refactoring to consume the centralized synchronization context.
- Violation handling: Tracking of unapproved sync patterns as high-priority architectural debt items.
- Exception process: Submit an architectural RFC detailing why the standard server synchronization context cannot support the requested synchronization pattern.
- Exception process: Obtain formal approval from the application architecture team prior to establishing alternative server communication channels.
- Exception process: Document any approved exception with a clear deprecation and migration path.