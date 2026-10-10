# Adoption of randomBytes for Cryptographic Token Generation: Implementations Not Use Non Cryptographic Pseudo

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Background daemon services expose local endpoints requiring secure session authorization to prevent unauthorized access.
- Inter-process communication boundaries require unpredictable cryptographic tokens generated during service startup.
- Cryptographic pseudo-random byte generation prevents token prediction and session hijacking across service interfaces.

## Problem Statement

Daemon services managing background processes require cryptographically secure authorization tokens to protect internal communication endpoints from unauthorized local process access, necessitating cryptographically sound entropy generation.

## Decision

1. MUST_NOT: Implementations MUST NOT use non-cryptographic pseudo-random number generators for tokens, session identifiers, or encryption keys.

## Policy Block

- MUST_NOT Implementations MUST NOT use non-cryptographic pseudo-random number generators for tokens, session identifiers, or encryption keys.

In scope:
- Service initialization workflows generating daemon authorization credentials.
- Cryptographic key and session token generation within daemon process boundaries.

Out of scope:
- Non-security identifiers such as correlation identifiers or trace identifiers where unpredictability is not required.

## Rationale

- Direct invocation of randomBytes provides platform-level cryptographically secure pseudo-random bytes with uniform distribution.
- Generating thirty-two bytes of entropy provides two hundred fifty-six bits of security, sufficiently mitigating brute-force and token guessing attacks.
- Standardizing token creation on cryptographic primitives ensures consistent security posture without introducing unvetted third-party mathematical utilities.

## Consequences

Positive:
- Cryptographically secure token generation mitigates unauthorized local daemon access.
- Eliminates predictability vulnerabilities inherent in standard pseudo-random number generation.
- Zero external mathematical dependency overhead for entropy acquisition.

Negative:
- Direct primitive invocation couples service initialization to system entropy availability.
- Potential runtime blocking if system entropy source becomes depleted during startup.

## Alternatives

- Standard pseudo-random number generation (rejected)
  Rejected because: Lacks cryptographic unpredictability and is vulnerable to seed reconstruction and token prediction attacks.
  When valid: Non-security simulation or randomized sampling scenarios where predictable pseudo-random sequences are acceptable.
- External centralized token service (rejected)
  Rejected because: Introduces external network latency and operational failure modes for local daemon communications.
  When valid: Distributed multi-host environments where centralized revocation and cross-host authentication are mandatory.

## Risks

- System entropy starvation leading to blocked daemon startup or degraded performance.
  Mitigation: Utilize non-blocking asynchronous entropy retrieval or ensure host environment maintains sufficient entropy pools.
  Owner: Security Engineering
- Scattered cryptographic primitive invocations leading to inconsistent key sizes across services.
  Mitigation: Encapsulate entropy generation within centralized internal authentication service boundaries.
  Owner: Architecture Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Ensure byte buffer allocation adheres strictly to thirty-two bytes to maintain two hundred fifty-six bits of entropy for token generation.
- Safeguard generated token material in memory and clear references when no longer required by daemon service boundaries.

## Continuation Context


Verify commands:
- Discover and execute the project test suite covering daemon service initialization and security token validation.
- Run static analysis scanners configured in the project repository to verify cryptographic primitive usage.

Accept when:
- Static analysis validates that secret token generation uses randomBytes with at least thirty-two bytes of entropy.
- All unit and integration tests for service daemon authorization pass without error.

## Enforcement

- Verified by: Automated static analysis checks in repository continuous integration pipelines.
- Verified by: Peer review of service initialization and security-sensitive pull requests.
- Violation handling: Continuous integration blocks pull requests introducing non-cryptographic random generation for security tokens.
- Violation handling: Code review rejection for direct non-standard entropy sources.
- Exception process: Formal security architecture review and signed authorization documented in architecture review logs.