# Standardization on @opencode-ai/ui Component Library: Components Compose Multiple Primitives Shared Library

These rules are ALWAYS ACTIVE for frontend presentation components, modal dialogs, and interactive form controls residing within the application package.

### Rules

- **R-OPCODE-001** MAY: Components MAY compose multiple primitives from the shared library to assemble domain-specific composite panels and dialogs.

### Verify

```bash
# Discover workspace static analysis, linting, and test runner scripts from the root configuration manifest and execute them:
# 1. Execute static analysis and linting across the application source tree.
# 2. Execute component suite validations via the project test runner.
```

**Accept when:**
- All frontend components import user interface primitives exclusively from designated shared library subpaths without unresolved references.
- Static analysis and component verification test suites execute cleanly across consuming modules.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is enforced via automated static analysis checks in CI pipelines and peer code reviews for all frontend UI pull requests.
</enforcement>