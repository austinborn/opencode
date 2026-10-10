# solid-js/store Reactive State Management for Terminal Prompt Subsystems: Shared Context Helpers Runtime Providers Mediate

These rules are ALWAYS ACTIVE for interactive terminal user interface prompt subsystems managing history, frecency ranking, and prompt stashing, and reactive state containers requiring granular signal notifications upon collection mutation.

### Rules

- **R-TUI-001** SHOULD: Shared context helpers and runtime providers SHOULD mediate access to solid-js/store instances across terminal prompt subcomponents.
- **R-TUI-002** MANDATORY: The consumer MUST discover the project dependency manifest to confirm the adopted reactive store module and verify that store initialization occurs within context provider scopes.
- **R-TUI-003** MANDATORY: Store setters MUST utilize path-based mutation patterns or store mutation producers to maintain structural sharing and avoid full store cloning.
- **R-TUI-004** MANDATORY: Before writing code that uses a versioned library, execute in order:
  1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
  2. Identify the build tool from the manifest.
  3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
  4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
  5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
  6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- **R-TUI-005** MANDATORY: Enforce defensive validation handling around serialization and deserialization routines prior to mutating store state.

### Verify

```bash
# Discover and run project test runner covering prompt reactive stores
# Discover workspace static analysis and type check utilities and verify compliance
# Execute repository linting verification to detect unhandled store property destructuring
```

**Accept when:**
- All terminal prompt test suites pass with zero reactivity regression failures.
- Static type checking confirms type safety across all solid-js/store mutation calls and context accessors.
- Store hydration routines safely process input lines without throwing unhandled exceptions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by continuous integration checks, automated tests, type verification suites, and code review inspection.
</enforcement>