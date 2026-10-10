# Standardization on @opencode-ai/ui Component Library: Consumers Import Components Via Discrete Package

These rules are ALWAYS ACTIVE for frontend presentation components, modal dialogs, and interactive form controls residing within the application package.

### Rules

- **R-UI-001** SHOULD: Consumers import components via discrete package subpaths rather than importing from monolithic root namespaces.

### Verify

```bash
# Discover workspace static analysis and linting scripts from the root configuration manifest and execute them across the application source tree.
# Discover the interface test runner from project configuration and execute component suite validations to ensure compliant rendering.
```

**Accept when:**
- All frontend components import user interface primitives exclusively from designated shared library subpaths without unresolved references.
- Static analysis and component verification test suites execute cleanly across consuming modules.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis checks and peer code reviews verify compliance.
</enforcement>