# Adoption of @opencode-ai/core/util/encode for Route Parameter Encoding: End Performance Test Fixtures That Navigate

These rules are ALWAYS ACTIVE for end-to-end and performance test fixtures that navigate to session routes.

### Rules

- **R-ROUTE-001** SHOULD: End-to-end and performance test fixtures that navigate to session routes SHOULD format the target URL using the standardized session path pattern incorporating base64Encode.

### Verify

```bash
# Discover and run the repository type-check script to verify correct import paths and function call signatures for the encoding utility.
# Discover and execute the performance test execution suite to validate that session routes with encoded directory parameters resolve properly.
```

**Accept when:**
- All imports of base64Encode resolve against the internal core utilities package without type or resolution errors.
- Automated session route navigation in performance test suites succeeds without route mismatch or URL resolution failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests introducing ad-hoc encoding routines or raw directory route parameters are blocked from merging.
</enforcement>