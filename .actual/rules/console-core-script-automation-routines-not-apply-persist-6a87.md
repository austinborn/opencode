# ZenData Model Validation Module for Model Configuration Lifecycles: Automation Routines Not Apply Persist Stage

These rules are ALWAYS ACTIVE for model synchronization, mutation, ingestion, and promotion scripts handling model configuration records.

### Rules

- **R-ZD-001** MUST_NOT: Automation routines MUST NOT apply, persist, or stage unvalidated raw JSON structures directly into model configuration records without prior ZenData validation.

### Verify

```bash
# Discover and run the project test runner across model automation test suites
# Discover and execute the repository static analysis and type verification script
```

**Accept when:**
- Model lifecycle automation scripts reject invalid or incomplete model JSON payloads during verification test runs.
- Valid model definitions pass ZenData validation and successfully complete pull, update, and promote execution paths.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated pull request checks fail if model modification scripts bypass ZenData validation or introduce unvalidated payload mutations.
</enforcement>