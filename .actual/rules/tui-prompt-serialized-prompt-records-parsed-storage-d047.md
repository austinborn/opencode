# solid-js/store Reactive State Management for Terminal Prompt Subsystems: Serialized Prompt Records Parsed Storage Streams

These rules are ALWAYS ACTIVE for interactive terminal user interface prompt subsystems managing history, frecency ranking, and prompt stashing, and reactive state containers requiring granular signal notifications upon collection mutation.

### Rules

- **R-TUI-001** SHOULD: Serialized prompt records parsed from storage streams SHOULD validate line payloads prior to updating the reactive store structure.

### Verify

```bash
# Discover and execute project test runner for prompt reactive stores
# Discover and execute project workspace static analysis and type check utilities
# Execute repository linting verification to detect unhandled store property destructuring
```

**Accept when:**
- All terminal prompt test suites pass with zero reactivity regression failures.
- Static type checking confirms type safety across all solid-js/store mutation calls and context accessors.
- Store hydration routines safely process input lines without throwing unhandled exceptions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by continuous integration checks and code review inspection of reactive store mutation patterns is mandatory.
</enforcement>