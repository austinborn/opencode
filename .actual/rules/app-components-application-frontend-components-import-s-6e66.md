# Standardization on @opencode-ai/ui Component Library: Application Frontend Components Import Standard User

These rules are ALWAYS ACTIVE for all application frontend presentation components, modal dialogs, and interactive form controls.

### Rules

- **R-UI-001** MUST: Application frontend components MUST import standard user interface primitives and interactive controls exclusively from the @opencode-ai/ui library.

### Verify

```bash
# Discover and execute workspace static analysis and linting scripts from root config
# Discover and execute component test runner suite for frontend rendering validation
```

**Accept when:**
- All frontend components import user interface primitives exclusively from designated shared library subpaths without unresolved references.
- Static analysis and component verification test suites execute cleanly across consuming modules.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated build checks and peer code reviews enforce compliance.
</enforcement>