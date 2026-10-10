# Adopt @opencode-ai/sdk/v2/client for Client Service Communication and Session Management: Consumer Inspect Dependency Manifest Authoritative Resolution

These rules are ALWAYS ACTIVE for client context providers, synchronization controllers, UI components, and test fixtures initiating backend operations involving session management, provider/model querying, and worktree state synchronization.

### Rules

- **R-CLIENT-001** MUST: The consumer MUST inspect the dependency manifest and authoritative resolution lock artifact to verify the exact resolved version of `@opencode-ai/sdk/v2/client` before introducing or modifying client interactions.

### Verify

```bash
# Discover and execute the repository type-checking suite to verify static contract compliance
# Discover and run the repository client test suite to ensure session lifecycle and synchronization workflows function
```

**Accept when:**
- All client modules invoking backend services compile without type discrepancies against `@opencode-ai/sdk/v2/client` interfaces.
- All automated synchronization and client test suites pass without unhandled transport or contract rejections.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static type analysis, module import linting, and architectural code review.
</enforcement>