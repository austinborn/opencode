# @opencode-ai/plugin Tool Runtime Environment Configuration: External Client Invocation Headers Merge Environment

These rules are ALWAYS ACTIVE for modules defining plugin tools using @opencode-ai/plugin and external client integrations requiring environment authentication.

### Rules

- **R-OPENV-001** SHOULD: External client invocation headers SHOULD merge environment authorization credentials with caller-provided request headers while preserving caller overrides.

### Verify

```bash
# Discover the project manifest and execute the designated test suite.
# Discover the project static analysis configuration and execute linting checks across plugin tool files.
# Discover and run static analysis rules to verify process environment variable access compliance.
```

**Accept when:**
- All plugin tools successfully resolve required configuration from process environment variables and pass automated test suites.
- Static analysis confirms no hardcoded credentials or unvalidated external client invocations exist in plugin modules.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>