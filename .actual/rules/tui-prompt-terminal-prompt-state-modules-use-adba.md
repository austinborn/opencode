# solid-js/store Reactive State Management for Terminal Prompt Subsystems: Terminal Prompt State Modules Use Solid

These rules are ALWAYS ACTIVE for all interactive terminal user interface prompt subsystems managing history, frecency ranking, and prompt stashing, and reactive state containers requiring granular signal notifications upon collection mutation.

### Rules

- **R-TUI-001** MUST: Terminal prompt state modules MUST use solid-js/store proxy-based reactive stores as the primary state synchronization mechanism for mutable prompt collections.

### Verify

```bash
# Discover dependency manifest, lock files, execute prompt reactive store test suite, workspace static analysis, type checking, and linting verification.
# (Commands derived from repository structure)
```

**Accept when:**
- All terminal prompt test suites pass with zero reactivity regression failures.
- Static type checking confirms type safety across all solid-js/store mutation calls and context accessors.
- Store hydration routines safely process input lines without throwing unhandled exceptions.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>