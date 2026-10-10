# Adoption of @opencode-ai/sdk/v2 for Client Domain State and Service Interfaces: Application Components Not Define Hoc Interfaces

These rules are ALWAYS ACTIVE for client application packages handling session models, composer flows, timeline projections, and event subscriptions, as well as modules integrating backend communication or runtime session notifications within the user interface.

### Rules

- **R-SDK-001** MUST_NOT: Application components MUST NOT define ad-hoc interfaces or bypass @opencode-ai/sdk/v2 by making unmediated network requests for core session operations.

### Verify

```bash
# Discover and run dependency verification suite to confirm imported interface modules resolve to the authorized lock artifact
npm test --workspace=... # (Or repo-specific command derived from manifest)

# Discover and execute static analysis and type checking script
npm run lint
npm run typecheck
```

**Accept when:**
- Static analysis and workspace type verification pass without unresolved module specifiers or interface mismatches against @opencode-ai/sdk/v2.
- Dependency validation verifies that all application references to @opencode-ai/sdk/v2 adhere strictly to the repository lock resolution.
- All session model and event subscription test suites execute cleanly against the standardized interface implementations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static type checking, linting rules, and architecture boundary checks during CI pipelines and code reviews.
</enforcement>