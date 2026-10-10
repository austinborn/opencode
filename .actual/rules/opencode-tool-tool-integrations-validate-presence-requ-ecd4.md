# @opencode-ai/plugin Environment-Based Secret Resolution for Outbound API Requests: Tool Integrations Validate Presence Required Process

These rules are ALWAYS ACTIVE for all tool integration modules built with @opencode-ai/plugin that perform authenticated outbound HTTP requests to external service APIs.

### Rules

- **R-ENV-001** SHOULD: Tool integrations SHOULD validate the presence of required process environment secrets prior to dispatching outbound network requests and fail fast with an actionable configuration error message if missing.

### Verify

```bash
# Discover and run the project static analysis and linting scripts
# Discover and run the test suite to confirm external client requests properly attach bearer authorization headers without exposing raw credentials
```

**Accept when:**
- All tool integration modules access credentials exclusively via process environment variables without hardcoded secrets.
- Outbound HTTP requests successfully attach the required authorization and media type headers as validated by project test suites.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis, credential scanner checks, and peer code reviews enforce compliance.
</enforcement>