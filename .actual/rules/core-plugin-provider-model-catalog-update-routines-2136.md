# Effect Library Adoption for Plugin and Provider Runtime: Provider Model Catalog Update Routines Not

These rules are ALWAYS ACTIVE for core plugin definitions, provider adapters, and model catalog update handlers, as well as network requests and effectful side-effect pipelines within the provider integration lifecycle.

### Rules

- **R-PROV-001** MUST_NOT: Provider and model catalog update routines MUST NOT introduce competing asynchronous effect or state mutation runtimes outside the established Effect pipeline.

### Verify

```bash
# Discover the workspace verification script in the project manifest and execute the static analysis suite to confirm Effect import compliance across plugin modules.
# Discover and run the project test execution script to validate provider integration behavior and catalog mutation correctness.
```

**Accept when:**
- Static analysis validates that all plugin and provider modules import and invoke Effect primitives without unresolved symbols or unauthorized asynchronous runtimes.
- All plugin provider integration and catalog mutation test suites pass successfully without runtime errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration static analysis, mandatory peer code review, and CI gates blocking unmanaged asynchronous primitives.
</enforcement>