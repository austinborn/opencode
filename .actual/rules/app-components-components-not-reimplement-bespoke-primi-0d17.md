# Standardization on @opencode-ai/ui Component Library: Components Not Reimplement Bespoke Primitive Elements

These rules are ALWAYS ACTIVE for frontend presentation components, modal dialogs, and interactive form controls residing within the application package.

### Rules

- **R-UI-001** MUST_NOT: Components MUST NOT reimplement bespoke primitive elements or duplicate iconography when equivalent primitives exist within the shared library.

### Verify

```bash
# Discover and execute workspace static analysis and linting scripts from the root configuration manifest
# Discover and execute interface test runner from project configuration
```

**Accept when:**
- All frontend components import user interface primitives exclusively from designated shared library subpaths without unresolved references.
- Static analysis and component verification test suites execute cleanly across consuming modules.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis and peer code review enforce shared library usage.
</enforcement>