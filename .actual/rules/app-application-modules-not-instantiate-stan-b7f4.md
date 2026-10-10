# Adoption of @/context/sdk Module for Unified Client and Realtime Event Management: Application Modules Not Instantiate Standalone Backend

These rules are ALWAYS ACTIVE for frontend application modules including views, pages, dialogs, and workspace controllers requiring backend client calls or realtime event streaming.

### Rules

- **R-CTX-001** MUST_NOT: Application modules MUST NOT instantiate standalone backend client instances or establish direct out-of-band event listeners that bypass the centralized context provider.

### Verify

```bash
# Discover and run static analysis and type checking script
# Discover and execute project test runner across component and controller test suites
```

**Accept when:**
- Type checking and static analysis pass across all application modules without direct out-of-band client instantiations.
- Automated unit and integration tests for session controllers and dialogs execute cleanly using the context provider interface.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated pull request checks running repository type checking and linting suites, and peer code review verifying that backend interactions utilize the authorized context accessor.
</enforcement>