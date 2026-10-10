# @opencode-ai/plugin Tool Runtime Environment Configuration: Plugin Tools Validate Presence Required Process

These rules are ALWAYS ACTIVE for modules defining plugin tools using @opencode-ai/plugin and external client integrations and HTTP boundaries within plugin tool definitions requiring environment authentication.

### Rules

- **R-OPENCAT-001** SHOULD: Plugin tools SHOULD validate the presence of required process environment configuration variables prior to dispatching external network requests.

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