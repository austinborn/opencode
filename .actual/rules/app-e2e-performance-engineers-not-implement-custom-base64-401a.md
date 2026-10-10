# Adoption of @opencode-ai/core/util/encode for Route Parameter Encoding: Engineers Not Implement Custom Base64 Encoding

These rules are ALWAYS ACTIVE for constructing route paths containing directory parameters in test fixtures, harnesses, and modules requiring URL-safe base64 encoding of filesystem paths for application navigation.

### Rules

- **R-ROUTE-001** MUST_NOT: Engineers MUST NOT implement custom base64 encoding functions or invoke platform-specific encoding globals directly when generating session route parameters.

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