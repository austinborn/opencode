# Adopt @opencode-ai/sdk/v2/client for Client Service Communication and Session Management: Client Synchronization Reducers View Models Decouple

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-CLI-001** SHOULD: Client synchronization reducers and UI view models SHOULD decouple reactive state storage from SDK client invocations by routing remote operations through dedicated synchronization boundaries.

### Verify

```bash
# Discover and execute the repository type-checking suite to verify static contract compliance
# Discover and run the repository client test suite
```

**Accept when:**
- All client modules invoking backend services compile without type discrepancies against `@opencode-ai/sdk/v2/client` interfaces.
- All automated synchronization and client test suites pass without unhandled transport or contract rejections.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type analysis, module import linting, and architectural code reviews enforce compliance.
</enforcement>