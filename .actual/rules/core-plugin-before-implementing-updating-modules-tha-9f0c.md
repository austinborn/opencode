# Effect Library Adoption for Plugin and Provider Runtime: Before Implementing Updating Modules That Rely

These rules are ALWAYS ACTIVE for core plugin definitions, provider adapters, and model catalog update handlers.

### Rules

- **R-EFF-001** MUST: Before implementing or updating modules that rely on the Effect library, consumers MUST discover the repository dependency manifest and resolution artifact to resolve the exact locked version of the library.
- **R-EFF-002** MUST: Follow lock-version grounding by discovering the dependency manifest, identifying the build tool, inspecting the lock or resolution artifact for the exact resolved version, looking up official docs for that version, and confirming every API exists before use.
- **R-EFF-003** MUST: Construct remote network operations using Effect HTTP client primitives to ensure uniform header handling and credential sanitization before request dispatch.
- **R-EFF-004** MUST: Encapsulate provider and model catalog modifications within deterministic updater functions supplied to catalog mutation routines.

### Verify

```bash
# Discover the workspace verification script in the project manifest and execute static analysis suite
# Discover and run the project test execution script to validate provider integration behavior and catalog mutation correctness
```

**Accept when:**
- Static analysis validates that all plugin and provider modules import and invoke Effect primitives without unresolved symbols or unauthorized asynchronous runtimes.
- All plugin provider integration and catalog mutation test suites pass successfully without runtime errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests updating plugin or provider integration code are subject to automated continuous integration static analysis verifying module imports and runtime usage constraints, with violations blocked until refactored.
</enforcement>