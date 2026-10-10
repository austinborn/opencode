# Adoption of @opencode-ai/core/util/encode for Route Parameter Encoding: Developers Inspect Repository Lock Artifact Verify

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-OPENC-001** MUST: Developers MUST inspect the repository lock artifact to verify the exact resolved version of the internal core utilities package before using its encoding functions.

### Verify

```bash
# Discover and run the repository type-check script to verify correct import paths and function call signatures for the encoding utility.
# Discover and execute the performance test execution suite to validate that session routes with encoded directory parameters resolve properly.
```

**Accept when:**
- All imports of base64Encode resolve against the internal core utilities package without type or resolution errors.
- Automated session route navigation in performance test suites succeeds without route mismatch or URL resolution failures.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>