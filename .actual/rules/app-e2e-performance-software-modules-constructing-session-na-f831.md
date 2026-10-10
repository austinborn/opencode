# Adoption of @opencode-ai/core/util/encode for Route Parameter Encoding: Software Modules Constructing Session Navigation Paths

These rules are ALWAYS ACTIVE for software modules constructing session navigation paths with directory parameters.

### Rules

- **R-ROUTE-001** MUST: Software modules constructing session navigation paths with directory parameters MUST use base64Encode from @opencode-ai/core/util/encode rather than ad-hoc string manipulation or raw unencoded paths.

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