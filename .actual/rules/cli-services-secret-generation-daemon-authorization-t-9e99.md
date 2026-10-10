# Adoption of randomBytes for Cryptographic Token Generation: Secret Generation Daemon Authorization Tokens Generate

These rules are ALWAYS ACTIVE for all code and configuration relating to service initialization workflows generating daemon authorization credentials and cryptographic key/session token generation within daemon process boundaries.

### Rules

- **R-CRYPTO-001** MUST: All secret generation for daemon authorization tokens MUST generate entropy using randomBytes with a minimum size of thirty-two bytes.
- **R-CRYPTO-002** MANDATORY: Execute lock-version grounding (finding dependency manifest, build tool, resolution artifact/lock file, official documentation, API existence confirmation, and re-running per dependency at point of use) before writing code that uses a versioned library.
- **R-CRYPTO-003** MANDATORY: Safeguard generated token material in memory and clear references when no longer required by daemon service boundaries.

### Verify

```bash
# Discover and execute the project test suite covering daemon service initialization and security token validation.
# Run static analysis scanners configured in the project repository to verify cryptographic primitive usage.
```

**Accept when:**
- Static analysis validates that secret token generation uses randomBytes with at least thirty-two bytes of entropy.
- All unit and integration tests for service daemon authorization pass without error.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>