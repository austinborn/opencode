# @opencode-ai/plugin Environment-Based Secret Resolution for Outbound API Requests: Outbound Http Requests Authenticated External Endpoints

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-SEC-001** MUST: Outbound HTTP requests to authenticated external endpoints within @opencode-ai/plugin integrations MUST pass credentials within the Authorization header formatted as a bearer token.

### Verify

```bash
# Discover and run the project static analysis and linting scripts
# Discover and run the test suite to confirm external client requests properly attach bearer authorization headers
```

**Accept when:**
- All tool integration modules access credentials exclusively via process environment variables without hardcoded secrets.
- Outbound HTTP requests successfully attach the required authorization and media type headers as validated by project test suites.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by automated static analysis and peer code review is mandatory.
</enforcement>