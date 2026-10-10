# @opencode-ai/plugin Tool Runtime Environment Configuration: Consumers Inspect Repository Dependency Manifest Lock

These rules are ALWAYS ACTIVE for modules defining plugin tools using @opencode-ai/plugin and external client integrations requiring environment authentication.

### Rules

- **R-OPENCEN-001** MUST: Consumers MUST inspect the repository dependency manifest and lock artifacts to verify and resolve the exact locked version of @opencode-ai/plugin before implementing or modifying tool integrations.
- **R-OPENCEN-002** MANDATORY: Execute the lock-version grounding sequence (discover manifest, identify build tool, inspect lock/resolution artifact, look up official documentation for exact version, confirm APIs exist, re-run per dependency at point of use) before writing code that uses a versioned library.
- **R-OPENCEN-003** MANDATORY: Construct outbound request headers by combining standard authentication tokens from process environment variables with dynamic request options.
- **R-OPENCEN-004** MANDATORY: Validate that all external client calls define explicit error handling for missing authentication credentials.

### Verify

```bash
# Discover the project manifest and execute the designated test suite
# Discover the project static analysis configuration and execute linting checks across plugin tool files
# Discover and run static analysis rules to verify process environment variable access compliance
```

**Accept when:**
- All plugin tools successfully resolve required configuration from process environment variables and pass automated test suites.
- Static analysis confirms no hardcoded credentials or unvalidated external client invocations exist in plugin modules.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated test execution, static analysis checks, and peer code review.
</enforcement>