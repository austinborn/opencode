# @opencode-ai/plugin Environment-Based Secret Resolution for Outbound API Requests: Modules Implementing Opencode Plugin Tool Integrations

These rules are ALWAYS ACTIVE for modules implementing @opencode-ai/plugin tool integrations that perform authenticated outbound HTTP requests to external service APIs.

### Rules

- **R-ENV-001** MUST: Modules implementing @opencode-ai/plugin tool integrations MUST resolve external service credentials directly from process environment variables rather than embedding credentials in application source code or relying on external secret management daemon services.

### Verify

```bash
# Discover and run static analysis and linting scripts
npm run lint || yarn lint || pnpm lint
# Run the test suite to confirm external client requests properly attach bearer authorization headers
npm test || yarn test || pnpm test
```

**Accept when:**
- All tool integration modules access credentials exclusively via process environment variables without hardcoded secrets.
- Outbound HTTP requests successfully attach the required authorization and media type headers as validated by project test suites.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis, credential scanner checks, and peer code reviews enforce compliance.
</enforcement>