# Adoption of @opencode-ai/sdk/v2 for Client Domain State and Service Interfaces: Engineers Inspect Repository Lock Artifact Verify

These rules are ALWAYS ACTIVE for client application packages handling session models, composer flows, timeline projections, event subscriptions, and backend communication modules within the user interface.

### Rules

- **R-OPENCEN-001** MUST: Engineers MUST inspect the repository lock artifact and verify the exact resolved package version before referencing or extending interfaces from @opencode-ai/sdk/v2.

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
Claude Code MUST NOT skip or defer verification. Automated static type checking, linting, and architecture boundary checks must be evaluated to ensure compliance, and violations must be refactored to consume @opencode-ai/sdk/v2 before approval and merging.
</enforcement>