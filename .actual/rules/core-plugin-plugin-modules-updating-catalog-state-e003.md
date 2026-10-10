# Effect Library Adoption for Plugin and Provider Runtime: Plugin Modules Updating Catalog State Encapsulate

These rules are ALWAYS ACTIVE for core plugin definitions, provider adapters, and model catalog update handlers.

### Rules

- **R-EFF-001** SHOULD: Plugin modules updating catalog state SHOULD encapsulate model and provider transformations within pure updater callbacks passed to catalog update primitives.

### Verify

```bash
# Discover workspace verification script in project manifest and execute static analysis suite
# Discover and run project test execution script to validate provider integration behavior and catalog mutation correctness
```

**Accept when:**
- Static analysis validates that all plugin and provider modules import and invoke Effect primitives without unresolved symbols or unauthorized asynchronous runtimes.
- All plugin provider integration and catalog mutation test suites pass successfully without runtime errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated CI static analysis and mandatory peer code review.
</enforcement>