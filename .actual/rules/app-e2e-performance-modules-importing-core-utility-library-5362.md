# Adoption of @opencode-ai/core/util/encode for Route Parameter Encoding: Modules Importing Core Utility Library Import

These rules are ALWAYS ACTIVE for modules importing the core utility library and constructing session route paths containing directory parameters in test fixtures and harnesses.

### Rules

- **R-CORE-001** MUST: Modules importing from the core utility library MUST import base64Encode through the dedicated submodule export path rather than modifying shared prototype methods.

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