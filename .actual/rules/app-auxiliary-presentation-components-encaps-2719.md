# Adoption of @opencode-ai/sdk/v2 for Client Domain State and Service Interfaces: Auxiliary Presentation Components Encapsulate Opencode Sdk

These rules are ALWAYS ACTIVE for all client application packages handling session models, composer flows, timeline projections, event subscriptions, and backend communication or runtime session notifications within the user interface.

### Rules

- **R-OPENCEN-001** MAY: Auxiliary presentation components MAY encapsulate @opencode-ai/sdk/v2 model references within dedicated adapter stores to simplify view-layer reactivity.

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
Claude Code MUST NOT skip or defer verification.
</enforcement>