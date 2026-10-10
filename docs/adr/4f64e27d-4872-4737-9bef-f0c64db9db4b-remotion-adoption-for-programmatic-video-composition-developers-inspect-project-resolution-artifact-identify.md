# Remotion Adoption for Programmatic Video Composition: Developers Inspect Project Resolution Artifact Identify

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The codebase requires programmatic generation and rendering of video compositions and modular animated scenes.
- Static analysis identifies consistent imports of the Remotion framework and React across multiple scene modules and composition roots.
- Unifying video generation under a declarative component architecture eliminates disparate animation scripts and enables reproducible frame rendering.

## Problem Statement

Programmatic video generation requires a deterministic, declarative rendering model to synchronize visual animation across frames while avoiding fragmented tooling and imperative animation scripts.

## Decision

1. MUST: Developers MUST inspect the project resolution artifact to identify the exact locked version of the video framework before invoking its APIs or introducing scene dependencies.

## Policy Block

- MUST Developers MUST inspect the project resolution artifact to identify the exact locked version of the video framework before invoking its APIs or introducing scene dependencies.

In scope:
- All programmatic video scenes, composition roots, and visual animation components.

Out of scope:
- Static image assets, standalone UI components unrelated to video rendering, and non-visual utility modules.

## Rationale

- Evidence demonstrates uniform reliance on Remotion across video scene modules, establishing a consistent rendering model.
- Declarative component-driven video composition enables reuse of component abstractions and animation primitives across scene definitions.
- Frame-based synchronization within Remotion guarantees reproducible rendering outputs during video synthesis.

## Consequences

Positive:
- Unifies video scene authoring under a declarative component architecture.
- Enables deterministic, frame-accurate animation rendering across all scene assets.
- Facilitates modular reuse of visual components and layout logic across distinct video compositions.

Negative:
- Couples video rendering throughput to web runtime execution overhead and resource limits.
- Requires developers to adhere strictly to frame-driven state rather than real-time asynchronous side effects.

## Alternatives

- Imperative canvas or WebGL rendering scripts without a declarative framework (rejected)
  Rejected because: Lacks component lifecycle abstractions and increases maintenance overhead for multi-scene composite animations.
  When valid: When rendering specialized graphics pipelines where frame overhead must be minimized.
- Manual timeline-based video authoring exports (rejected)
  Rejected because: Precludes automated programmatic data binding and parameterized video generation.
  When valid: When manual artistic editing is required without programmatic variation.

## Risks

- Rendering performance degradation as scene component complexity and frame resolution increase.
  Mitigation: Profile frame render durations and modularize complex scene hierarchies into optimized sub-compositions.
  Owner: engineering team
- Non-deterministic animations caused by unmanaged external asynchronous calls during frame evaluation.
  Mitigation: Enforce static frame hooks and pre-fetch external media assets prior to composition rendering.
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
- Discover composition registration patterns and frame timing conventions by inspecting existing scene modules across the repository.
- Verify that animation sequences synchronize with frame rate metadata declared in composition configurations.

## Continuation Context


Verify commands:
- Discover the project test runner from the dependency manifest and execute the test suite covering video compositions.
- Discover and run the project static analysis and type check scripts across the video modules.

Accept when:
- All video composition and scene modules pass static type analysis without errors.
- Video rendering test suites execute successfully and verify deterministic frame output.

## Enforcement

- Verified by: Automated continuous integration checks executing static type inspection and composition unit tests.
- Verified by: Peer code review verifying adherence to declarative Remotion component patterns.
- Violation handling: Pull requests introducing imperative rendering workarounds or non-compliant animation libraries are blocked until remediated.
- Exception process: Architectural exceptions require technical review and documented justification detailing why declarative composition is insufficient.