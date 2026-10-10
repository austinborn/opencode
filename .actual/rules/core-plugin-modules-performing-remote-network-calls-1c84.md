# Effect Library Adoption for Plugin and Provider Runtime: Modules Performing Remote Network Calls Within

These rules are ALWAYS ACTIVE for core plugin definitions, provider adapters, model catalog update handlers, and network requests or effectful side-effect pipelines within the provider integration lifecycle.

### Rules

- **R-EFF-001** MUST: Modules performing remote network calls within the plugin runtime MUST utilize HttpClientRequest or designated Effect HTTP client primitives rather than unmanaged platform fetch or external HTTP clients.

### Verify

```bash
# Discover the workspace verification script in the project manifest and execute the static analysis suite to confirm Effect import compliance across plugin modules
# Discover and run the project test execution script to validate provider integration behavior and catalog mutation correctness
```

**Accept when:**
- Static analysis validates that all plugin and provider modules import and invoke Effect primitives without unresolved symbols or unauthorized asynchronous runtimes.
- All plugin provider integration and catalog mutation test suites pass successfully without runtime errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests introducing unmanaged asynchronous primitives or bypassing Effect primitives will be blocked by continuous integration gates until refactored.
</enforcement>