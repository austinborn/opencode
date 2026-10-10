# Adoption of randomBytes for Cryptographic Token Generation: Consumers Inspect Repository Dependency Resolution Artifacts

These rules are ALWAYS ACTIVE for service initialization workflows, daemon authorization credentials generation, and cryptographic key/session token generation within daemon process boundaries.

### Rules

- **R-CRYPTO-001** MUST: Consumers MUST inspect repository dependency resolution artifacts and verify that resolved cryptographic modules match authoritative documentation before invocation.
- **R-CRYPTO-002** MUST: Ensure byte buffer allocation adheres strictly to thirty-two bytes to maintain two hundred fifty-six bits of entropy for token generation.
- **R-CRYPTO-003** MUST: Safeguard generated token material in memory and clear references when no longer required by daemon service boundaries.
- **R-CRYPTO-004** MUST: Execute lock-version grounding in order before writing code that uses a versioned library: find dependency manifest, identify build tool, inspect repository lock/resolution artifact for exact resolved version, look up official documentation for that exact version, confirm every API/class/function exists in that version, and re-run steps per dependency at point of use for version-sensitive behavior.

### Verify

```bash
# Discover and execute the project test suite covering daemon service initialization and security token validation
# Run static analysis scanners configured in the project repository to verify cryptographic primitive usage
```

**Accept when:**
- Static analysis validates that secret token generation uses randomBytes with at least thirty-two bytes of entropy.
- All unit and integration tests for service daemon authorization pass without error.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration blocks pull requests introducing non-cryptographic random generation for security tokens.
</enforcement>