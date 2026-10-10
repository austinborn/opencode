# Adoption of @/context/sdk Module for Unified Client and Realtime Event Management: Before Implementing Changes Involving Versioned Dependencies

These rules are ALWAYS ACTIVE for frontend application modules including views, pages, dialogs, and workspace controllers requiring backend client calls or realtime event streaming.

### Rules

- **R-CTX-001** MUST: Before implementing changes involving versioned dependencies supporting this module, the consumer MUST locate the repository dependency manifest and lock artifact to resolve the authoritative installed version.

### Verify

```bash
# Discover and run static analysis, type checking, and test suites
# (Commands must be discovered from the project repository configuration)
```

**Accept when:**
- Type checking and static analysis pass across all application modules without direct out-of-band client instantiations.
- Automated unit and integration tests for session controllers and dialogs execute cleanly using the context provider interface.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests introducing direct client instantiations or unmanaged event listeners outside the context module will be blocked.
</enforcement>