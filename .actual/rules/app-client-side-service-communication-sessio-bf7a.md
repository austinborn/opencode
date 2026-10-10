# Adopt @opencode-ai/sdk/v2/client for Client Service Communication and Session Management: Client Side Service Communication Session Orchestration

These rules are ALWAYS ACTIVE for all client-side service communication, session orchestration, provider interaction, and workspace synchronization operations.

### Rules

- **R-CLIENT-001** MUST: All client-side service communication, session orchestration, provider interaction, and workspace synchronization operations MUST use `@opencode-ai/sdk/v2/client` rather than raw network transport layers or unmanaged protocol invocations.

### Verify

```bash
# Discover and execute the repository type-checking suite to verify static contract compliance
# Discover and run the repository client test suite to ensure session lifecycle and synchronization workflows function
```

**Accept when:**
- All client modules invoking backend services compile without type discrepancies against `@opencode-ai/sdk/v2/client` interfaces.
- All automated synchronization and client test suites pass without unhandled transport or contract rejections.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type analysis and module import linting in the continuous integration pipeline enforce these boundaries.
</enforcement>