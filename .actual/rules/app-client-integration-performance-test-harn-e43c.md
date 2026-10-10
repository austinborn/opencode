# Adopt @opencode-ai/sdk/v2/client for Client Service Communication and Session Management: Client Integration Performance Test Harnesses Instantiate

These rules are ALWAYS ACTIVE for client context providers, synchronization controllers, UI components, and test fixtures initiating backend operations.

### Rules

- **R-CLI-001** MAY: Client integration and performance test harnesses MAY instantiate mock or local client instances via `@opencode-ai/sdk/v2/client` contracts to simulate remote service interactions during testing.
- **R-CLI-002** MANDATORY: The consumer MUST derive tool names, file names, commands, package managers, and version numbers from the project repository during discovery.
- **R-CLI-003** MANDATORY (LOCK-VERSION GROUNDING): Before writing code that uses a versioned library, execute in order: find dependency manifest, identify build tool, inspect repository lock or resolution artifact to determine exact resolved version, look up official documentation for that exact version, confirm every API/class/function exists in that version before use, and re-run steps per dependency at point of use for version-sensitive behavior.
- **R-CLI-004** MANDATORY: Encapsulate SDK calls within dedicated synchronization hooks or context actions rather than embedding direct remote invocations inside presentation render paths.
- **R-CLI-005** MANDATORY: Apply normalization routines when ingesting model and provider collections to maintain consistent data structures across UI consumers.

### Verify

```bash
# Discover and execute the repository type-checking suite
# Discover and run the repository client test suite
```

**Accept when:**
- All client modules invoking backend services compile without type discrepancies against `@opencode-ai/sdk/v2/client` interfaces.
- All automated synchronization and client test suites pass without unhandled transport or contract rejections.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static type analysis, module import linting in CI, and architectural code review.
</enforcement>