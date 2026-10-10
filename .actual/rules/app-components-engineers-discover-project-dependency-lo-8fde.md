# Standardization on @opencode-ai/ui Component Library: Engineers Discover Project Dependency Lock Artifact

These rules are ALWAYS ACTIVE for frontend presentation components, modal dialogs, and interactive form controls residing within the application package.

### Rules

- **R-OPENC-001** MUST: Engineers MUST discover the project dependency lock artifact and resolve the authoritative package version of the library prior to implementing or consuming exported components.

### Verify

```bash
# Discover workspace static analysis and linting scripts from root configuration and execute
# Discover interface test runner from project configuration and execute component suite validations
```

**Accept when:**
- All frontend components import user interface primitives exclusively from designated shared library subpaths without unresolved references.
- Static analysis and component verification test suites execute cleanly across consuming modules.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis checks in CI pipelines and peer code reviews verify compliance.
</enforcement>