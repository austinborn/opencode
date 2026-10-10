# Adoption of @solid-primitives/event-listener for Reactive Event Handling: Components Not Register Unmanaged Event Listeners

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Application UI panels, session views, and layout managers require frequent interaction with DOM, window, and target events such as keyboard shortcuts, resize events, and focus tracking.
- Manual imperative listener attachment requires tracking registration targets and invoking explicit teardown during cleanup hooks, which introduces memory leak risks if cleanup handlers are omitted or unmounted prematurely.
- The reactive ecosystem provides primitive libraries designed to bind listener lifecycles directly to reactive scopes and owner trees, ensuring automatic unregistration upon disposal.

## Problem Statement

Managing DOM and target event listeners across interactive client panels, custom inputs, and navigation controllers risks listener leaks and inconsistent cleanup if developers must manually coordinate unbinding routines with reactive disposal lifecycles.

## Decision

1. MUST_NOT: Components MUST NOT register unmanaged event listeners directly via imperative target subscription methods without encapsulating them in reactive cleanup handlers or lifecycle primitives.

## Policy Block

- MUST_NOT Components MUST NOT register unmanaged event listeners directly via imperative target subscription methods without encapsulating them in reactive cleanup handlers or lifecycle primitives.

In scope:
- Client-side user interface components, session views, layout panels, and reactive context providers that listen to DOM, document, window, or custom target events.

Out of scope:
- Non-reactive background processes, headless utilities with no DOM interaction, and third-party integrations that manage their own internal event dispatch loops.

Exceptions:
- EXC-20-001: A third-party canvas, embedded frame, or external terminal renderer manages its own internal event capture pipeline independently of the reactive framework.

## Rationale

- Adopting @solid-primitives/event-listener across 14 interactive application files eliminates repetitive listener disposal boilerplate and guarantees automatic unregistration when reactive scopes dispose.
- Standardizing on this primitive provides consistent semantics for reactive targets and handlers, preventing detached listener memory leaks in dynamic tabbed and windowed sessions.

## Consequences

Positive:
- Guaranteed automated unbinding prevents memory leaks across dynamically mounted session tabs and panels.
- Declarative listener binding integrates directly with reactive accessors and ownership trees.
- Eliminates repetitive manual unregistration boilerplate across navigation, keybinding, and terminal components.

Negative:
- Couples client event handling to the specific primitive library implementation and lifecycle wrappers.
- Requires developer familiarity with reactive accessor patterns for dynamic event target bindings.

## Alternatives

- Manual imperative event listener registration with custom reactive cleanup hooks (rejected)
  Rejected because: Manual unbinding coordination frequently leads to omissions of cleanup calls, resulting in memory leaks across long-lived tab sessions.
  When valid: When developing isolated vanilla scripts without any reactive runtime dependencies.
- Custom in-house event listener wrapper primitive (rejected)
  Rejected because: Maintaining internal event listener wrappers duplicates standard ecosystem capabilities and increases maintenance burden.
  When valid: When target environments require non-standard event dispatching abstractions unsupported by community primitives.

## Risks

- Breaking API changes or reactive lifecycle incompatibilities during upstream primitive version updates.
  Mitigation: Enforce strict lockfile resolution and verify API signatures against official documentation during upgrades.
  Owner: Frontend engineering team
- Accidental invocation outside of an active reactive ownership tree preventing automated disposal.
  Mitigation: Conduct lint and code review checks ensuring listener creation occurs within valid reactive scopes.
  Owner: Frontend engineering team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Ensure all listener attachments occur inside components or reactive root contexts so that disposal hooks trigger synchronously on unmount.
- When listening to dynamic targets such as active elements or optional references, supply accessor functions directly to the primitive.

## Continuation Context


Verify commands:
- Discover and execute the repository typechecking command to verify correct primitive import signatures and reactive argument typing.
- Discover and run component unit and integration test suites to verify event handler execution and unmount cleanup.

Accept when:
- All client modules binding DOM or window listeners compile with zero type errors against the resolved library types.
- Automated test suites verify that event listeners trigger expected callbacks and unregister cleanly upon reactive scope disposal.

## Enforcement

- Verified by: Automated continuous integration checks executing typechecking and test suites.
- Verified by: Peer code review inspecting new event listener attachments for adherence to reactive primitive patterns.
- Violation handling: Pull requests containing unmanaged native event listeners without reactive lifecycle encapsulation must be rejected during review.
- Violation handling: Identified unmanaged listeners in existing components must be refactored to use the adopted primitive.
- Exception process: Submit an exception request detailing why the reactive primitive cannot manage the target event loop, requiring architecture lead approval.