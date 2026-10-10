# Standardization on @opencode-ai/ui Component Library: New Visual Interface Implementations Migrate Successor

These rules are ALWAYS ACTIVE for frontend presentation components, modal dialogs, and interactive form controls residing within the application package.

### Rules

- **R-OPENC-001** SHOULD: New visual interface implementations migrate to successor library namespaces where upgraded components are available in the shared library.

### Verify

```bash
# Discover workspace static analysis and linting scripts from root configuration manifest and execute across application source tree
# Discover interface test runner from project configuration and execute component suite validations
```

**Accept when:**
- All frontend components import user interface primitives exclusively from designated shared library subpaths without unresolved references.
- Static analysis and component verification test suites execute cleanly across consuming modules.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static analysis checks and peer code review.
</enforcement>