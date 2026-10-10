# solid-js/store Reactive State Management for Terminal Prompt Subsystems: Prompt Modules Not Introduce Alternative External

These rules are ALWAYS ACTIVE for interactive terminal user interface prompt subsystems managing history, frecency ranking, and prompt stashing.

### Rules

- **R-TUI-001** MUST_NOT: Prompt modules MUST NOT introduce alternative external reactive state management libraries or global event buses for terminal prompt collection state.

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
Claude Code MUST NOT skip or defer verification. Verification is mandatory via continuous integration checks and code review inspection.
</enforcement>