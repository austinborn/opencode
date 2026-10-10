# @opencode-ai/plugin Environment-Based Secret Resolution for Outbound API Requests: Before Implementing Updating Opencode Plugin Integration

These rules are ALWAYS ACTIVE for tool integration modules built with @opencode-ai/plugin that perform authenticated outbound HTTP requests to external service APIs using process environment variables.

### Rules

- **R-OPC-001** MUST: Before implementing or updating @opencode-ai/plugin integration logic, the consumer MUST inspect the repository dependency manifest and lock artifact to determine the exact resolved version of @opencode-ai/plugin and verify all invoked APIs against that exact version documentation.

### Verify

```bash
# Discover and run the project static analysis and linting scripts
# Example discovery based on project structure (e.g., npm run lint or equivalent discovered script)
npm run lint

# Discover and run the test suite to confirm external client requests properly attach bearer authorization headers
npm test
```

**Accept when:**
- All tool integration modules access credentials exclusively via process environment variables without hardcoded secrets.
- Outbound HTTP requests successfully attach the required authorization and media type headers as validated by project test suites.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis, credential scanner checks, and peer code reviews enforce compliance.
</enforcement>