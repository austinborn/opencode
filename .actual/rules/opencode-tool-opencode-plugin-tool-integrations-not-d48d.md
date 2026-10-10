# @opencode-ai/plugin Environment-Based Secret Resolution for Outbound API Requests: Opencode Plugin Tool Integrations Not Write

These rules are ALWAYS ACTIVE for tool integration modules built with @opencode-ai/plugin that perform authenticated outbound HTTP requests to external service APIs using process environment variables.

### Rules

- **R-OPENCODE-001** MUST_NOT: @opencode-ai/plugin tool integrations MUST_NOT write secrets retrieved from environment variables to persistent storage, console logs, or unredacted tool execution output.

### Verify

```bash
# Discover and run the project static analysis, linting scripts, and test suite
npm run lint
npm test
```

**Accept when:**
- All tool integration modules access credentials exclusively via process environment variables without hardcoded secrets.
- Outbound HTTP requests successfully attach the required authorization and media type headers as validated by project test suites.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis, credential scanner checks, and peer code reviews enforce compliance.
</enforcement>