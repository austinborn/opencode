# promptDesignPlaceholder Function for Mode-Conditioned Prompt Input Formatting: Components Handling Prompt Input Placeholder Formatting

These rules are ALWAYS ACTIVE for components handling prompt input placeholder formatting.

### Rules

- **R-PROMPT-001** MUST: Components handling prompt input placeholder formatting MUST isolate mode-based dispatch logic within dedicated transformation functions rather than evaluating operational mode conditions directly within UI rendering structures.

### Verify

```bash
# Discover and run the unit test suite covering input component placeholder transformations
# Discover and run static type checking to validate placeholder input parameter types
```

**Accept when:**
- Unit tests verify that shell mode returns the unaltered placeholder string and non-shell mode returns formatted localized strings.
- Static type analysis confirms zero type errors across placeholder input signatures and translation parameter contracts.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>