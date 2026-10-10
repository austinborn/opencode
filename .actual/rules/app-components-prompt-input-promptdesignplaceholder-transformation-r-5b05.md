# promptDesignPlaceholder Function for Mode-Conditioned Prompt Input Formatting: Promptdesignplaceholder Transformation Return Unaltered Placeholder String

These rules are ALWAYS ACTIVE for prompt input components supporting multi-mode operation.

### Rules

- **R-PROMPT-001** MUST: The promptDesignPlaceholder transformation MUST return the unaltered placeholder string when operational mode evaluates to shell mode.

### Verify

```bash
# Discover the repository test execution script and run the unit test suite covering input component placeholder transformations.
# Discover the repository type verification script and run static type checking to validate placeholder input parameter types.
```

**Accept when:**
- Unit tests verify that shell mode returns the unaltered placeholder string and non-shell mode returns formatted localized strings.
- Static type analysis confirms zero type errors across placeholder input signatures and translation parameter contracts.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated unit test execution, static type checking, and peer code review.
</enforcement>