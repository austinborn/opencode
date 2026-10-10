# Adoption of @opencode-ai/sdk/v2 for Client Domain State and Service Interfaces: Client Projection Logic Timeline State Models

These rules are ALWAYS ACTIVE for client application packages handling session models, composer flows, timeline projections, and event subscriptions.

### Rules

- **R-SDK-001** SHOULD: Client projection logic and timeline state models SHOULD derive their structural types directly from @opencode-ai/sdk/v2 entities to preserve end-to-end schema consistency.

### Verify

```bash
# Discover and run the project dependency verification suite to confirm that all imported interface modules resolve to the authorized lock artifact.
# Discover and execute the static analysis and type checking script declared in the repository build configuration to ensure interface compliance across all consuming packages.
# Discover and run the test harness configured in the workspace manifest to validate session lifecycle and event handling behavior against the client interfaces.
```

**Accept when:**
- Static analysis and workspace type verification pass without unresolved module specifiers or interface mismatches against @opencode-ai/sdk/v2.
- Dependency validation verifies that all application references to @opencode-ai/sdk/v2 adhere strictly to the repository lock resolution.
- All session model and event subscription test suites execute cleanly against the standardized interface implementations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static type checking, linting rules, and architecture boundary checks.
</enforcement>