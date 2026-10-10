# promptDesignPlaceholder Function for Mode-Conditioned Prompt Input Formatting: Promptdesignplaceholder Transformation Delegate Non Shell Mode

These rules are ALWAYS ACTIVE for prompt input components supporting multi-mode operation.

### Rules

- **R-PROMPT-001** MUST: The promptDesignPlaceholder transformation MUST delegate non-shell mode resolution to the localization translation function using structured interpolation tokens.

### Verify

```bash
# Discover and run the unit test suite covering input component placeholder transformations:
# (Derive test script from project repository manifest/scripts)
# Run static type checking to validate placeholder input parameter types:
# (Derive type check script from project repository manifest/scripts)
```

**Accept when:**
- Unit tests verify that shell mode returns the unaltered placeholder string and non-shell mode returns formatted localized strings.
- Static type analysis confirms zero type errors across placeholder input signatures and translation parameter contracts.

<enforcement>
Claude Code MUST NOT skip or defer verification. Pull requests containing inline mode evaluation for prompt placeholders will be rejected during code review. Continuous integration test failures for placeholder transformation contracts block merging.
</enforcement>