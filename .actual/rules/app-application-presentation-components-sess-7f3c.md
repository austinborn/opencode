# Adoption of @/context/sdk Module for Unified Client and Realtime Event Management: Application Presentation Components Session Controllers Dialogs

These rules are ALWAYS ACTIVE for frontend application modules including views, pages, dialogs, and workspace controllers requiring backend client calls or realtime event streaming.

### Rules

- **R-CTX-001** MUST: Application presentation components, session controllers, and dialogs MUST access client remote procedure calls, active directory metadata, and realtime event subscriptions through the centralized context accessor.

### Verify

```bash
# Discover and run the project repository's static analysis and type checking script
# Discover and execute the project test runner across component and controller test suites
```

**Accept when:**
- Type checking and static analysis pass across all application modules without direct out-of-band client instantiations.
- Automated unit and integration tests for session controllers and dialogs execute cleanly using the context provider interface.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>