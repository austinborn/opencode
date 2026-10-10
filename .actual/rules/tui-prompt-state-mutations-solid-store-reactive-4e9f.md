# solid-js/store Reactive State Management for Terminal Prompt Subsystems: State Mutations Solid Store Reactive Objects

These rules are ALWAYS ACTIVE for interactive terminal user interface prompt subsystems managing history, frecency ranking, and prompt stashing.

### Rules

- **R-SOLID-001** MUST: State mutations on solid-js/store reactive objects MUST be performed using store-provided setter functions or mutation helpers to preserve granular signal propagation across terminal renderers.
- **R-SOLID-002** MUST: Execute lock-version grounding before writing code using versioned libraries (find dependency manifest, identify build tool, inspect lock/resolution artifact, look up official documentation for exact version, confirm APIs exist, re-run per dependency at point of use).
- **R-SOLID-003** MUST: Discover the project dependency manifest to confirm the adopted reactive store module and verify that store initialization occurs within context provider scopes.
- **R-SOLID-004** MUST: Ensure store setters utilize path-based mutation patterns or store mutation producers to maintain structural sharing and avoid full store cloning.

### Verify

```bash
# Discover the project test runner and execute the test suite covering prompt reactive stores
# Discover the workspace static analysis and type check utilities and verify compliance across terminal prompt modules
# Execute the repository linting verification to detect unhandled store property destructuring
```

**Accept when:**
- All terminal prompt test suites pass with zero reactivity regression failures.
- Static type checking confirms type safety across all solid-js/store mutation calls and context accessors.
- Store hydration routines safely process input lines without throwing unhandled exceptions.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>