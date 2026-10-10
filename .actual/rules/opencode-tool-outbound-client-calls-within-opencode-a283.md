# @opencode-ai/plugin Environment-Based Secret Resolution for Outbound API Requests: Outbound Client Calls Within Opencode Plugin

These rules are ALWAYS ACTIVE for tool integration modules built with @opencode-ai/plugin that perform authenticated outbound HTTP requests to external service APIs using process environment variables.

### Rules

- **R-OPC-001** MUST: Outbound client calls within @opencode-ai/plugin tools MUST configure standard request headers including content type and accepted response formats alongside the injected authorization header.

### Verify

```bash
# Discover and run the project static analysis and linting scripts to verify compliance with environment variable secrets handling rules.
# Discover and run the test suite to confirm external client requests properly attach bearer authorization headers without exposing raw credentials in failure logs.
```

**Accept when:**
- All tool integration modules access credentials exclusively via process environment variables without hardcoded secrets.
- Outbound HTTP requests successfully attach the required authorization and media type headers as validated by project test suites.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>