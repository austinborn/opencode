# Adoption of randomBytes for Cryptographic Token Generation: Daemon Service Boundaries Isolate Token Generation

These rules are ALWAYS ACTIVE for daemon service boundaries, service initialization workflows generating authorization credentials, and cryptographic key and session token generation within daemon processes.

### Rules

- **R-DTS-001** SHOULD: Daemon service boundaries isolate token generation logic within dedicated authentication or authorization modules.
- **R-DTS-002** MANDATORY: Ensure byte buffer allocation adheres strictly to thirty-two bytes to maintain two hundred fifty-six bits of entropy for token generation.
- **R-DTS-003** MANDATORY: Safeguard generated token material in memory and clear references when no longer required by daemon service boundaries.
- **R-DTS-004** MANDATORY: Execute lock-version grounding steps (manifest, build tool, lock artifact, official docs API confirmation) before using any versioned library for token generation.

### Verify

```bash
# Discover and execute the project test suite covering daemon service initialization and security token validation
# Run static analysis scanners configured in the project repository to verify cryptographic primitive usage
```

**Accept when:**
- Static analysis validates that secret token generation uses randomBytes with at least thirty-two bytes of entropy.
- All unit and integration tests for service daemon authorization pass without error.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by automated static analysis and peer review is mandatory.
</enforcement>