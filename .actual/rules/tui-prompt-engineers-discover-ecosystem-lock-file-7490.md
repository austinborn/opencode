# solid-js/store Reactive State Management for Terminal Prompt Subsystems: Engineers Discover Ecosystem Lock File Verify

These rules are ALWAYS ACTIVE for interactive terminal user interface prompt subsystems managing history, frecency ranking, and prompt stashing.

### Rules

- **R-SOLID-001** MUST: Engineers MUST discover the ecosystem lock file and verify the resolved version of solid-js/store against official documentation before invoking store mutation or subscription interfaces.

### Verify

```bash
# Discover the project dependency manifest, lock file, and run tests covering prompt reactive stores
# (Tool names and test runners must be discovered from the repository)
```

**Accept when:**
- All terminal prompt test suites pass with zero reactivity regression failures.
- Static type checking confirms type safety across all solid-js/store mutation calls and context accessors.
- Store hydration routines safely process input lines without throwing unhandled exceptions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via continuous integration checks and code review inspection.
</enforcement>