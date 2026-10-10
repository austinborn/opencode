# promptDesignPlaceholder Function for Mode-Conditioned Prompt Input Formatting: Presentation Components Not Embed Hardcoded Localization

These rules are ALWAYS ACTIVE for prompt input presentation components supporting multi-mode operation.

### Rules

- **R-ADR-001** SHOULD_NOT: Presentation components SHOULD_NOT embed hardcoded localization translation keys or parameter token mappings outside of designated placeholder transformation boundaries.

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