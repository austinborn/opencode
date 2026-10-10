# @opencode-ai/plugin Tool Runtime Environment Configuration: Tools Implemented Opencode Plugin Source Runtime

These rules are ALWAYS ACTIVE for modules defining plugin tools using @opencode-ai/plugin and external client integrations requiring environment authentication.

### Rules

- **R-OPEND-001** MUST: Tools implemented with @opencode-ai/plugin MUST source runtime execution parameters and credentials directly from process environment variables when configuring external client requests.

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