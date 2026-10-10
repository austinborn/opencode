# Adopt @opencode-ai/sdk/v2/client for Client Service Communication and Session Management: Application Components Context Providers Not Bypass

These rules are ALWAYS ACTIVE for all client context providers, synchronization controllers, UI components, and test fixtures initiating backend operations.

### Rules

- **R-CLIENT-001** MUST_NOT: Application components and context providers MUST NOT bypass `@opencode-ai/sdk/v2/client` to construct direct transport requests or custom protocol wrappers for supported backend capabilities.

### Verify

```bash
# Discover and execute type-checking and test suites to verify static contract compliance
# (Repository-specific commands to be discovered via manifest/lockfile analysis)
```

**Accept when:**
- All client modules invoking backend services compile without type discrepancies against `@opencode-ai/sdk/v2/client` interfaces.
- All automated synchronization and client test suites pass without unhandled transport or contract rejections.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static type analysis, module import linting, and architectural code review.
</enforcement>