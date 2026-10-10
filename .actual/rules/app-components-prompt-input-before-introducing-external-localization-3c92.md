# promptDesignPlaceholder Function for Mode-Conditioned Prompt Input Formatting: Before Introducing External Localization String Formatting

These rules are ALWAYS ACTIVE for prompt input components supporting multi-mode operation.

### Rules

- **R-LOC-001** MUST: Before introducing external localization or string formatting dependencies, consumers MUST inspect the project lock resolution artifact to identify exact resolved package versions and adhere strictly to documented interfaces for those versions.

### Verify

```bash
# Discover and run the unit test suite covering input component placeholder transformations
# Discover and run the repository type verification script to validate placeholder input parameter types
```

**Accept when:**
- Unit tests verify that shell mode returns the unaltered placeholder string and non-shell mode returns formatted localized strings.
- Static type analysis confirms zero type errors across placeholder input signatures and translation parameter contracts.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>