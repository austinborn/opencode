# Adoption of randomBytes for Cryptographic Token Generation: Implementations Not Use Non Cryptographic Pseudo

These rules are ALWAYS ACTIVE for service initialization workflows, daemon process boundaries, and cryptographic key or session token generation.

### Rules

- **R-CRYPTO-001** MUST_NOT: Implementations MUST NOT use non-cryptographic pseudo-random number generators for tokens, session identifiers, or encryption keys.

### Verify

```bash
# Discover and execute the project test suite covering daemon service initialization and security token validation.
# Run static analysis scanners configured in the project repository to verify cryptographic primitive usage.
```

**Accept when:**
- Static analysis validates that secret token generation uses randomBytes with at least thirty-two bytes of entropy.
- All unit and integration tests for service daemon authorization pass without error.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration blocks pull requests introducing non-cryptographic random generation for security tokens.
</enforcement>