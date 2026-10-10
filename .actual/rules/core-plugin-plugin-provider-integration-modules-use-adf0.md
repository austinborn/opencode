# Effect Library Adoption for Plugin and Provider Runtime: Plugin Provider Integration Modules Use Effect

These rules are ALWAYS ACTIVE for core plugin definitions, provider adapters, model catalog update handlers, and network requests or effectful side-effect pipelines within the provider integration lifecycle.

### Rules

- **R-EFF-001** MUST: Plugin and provider integration modules MUST use the Effect library for managing asynchronous execution, network requests, and effectful runtime operations.

### Verify

```bash
# Discover the workspace verification script in the project manifest and execute the static analysis suite to confirm Effect import compliance across plugin modules.
# Discover and run the project test execution script to validate provider integration behavior and catalog mutation correctness.
```

**Accept when:**
- Static analysis validates that all plugin and provider modules import and invoke Effect primitives without unresolved symbols or unauthorized asynchronous runtimes.
- All plugin provider integration and catalog mutation test suites pass successfully without runtime errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration static analysis verifying module imports and runtime usage constraints, and mandatory peer code review.
</enforcement>