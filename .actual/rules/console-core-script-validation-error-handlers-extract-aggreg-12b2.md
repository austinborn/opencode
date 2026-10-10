# ZenData Model Validation Module for Model Configuration Lifecycles: Validation Error Handlers Extract Aggregate Structural

These rules are ALWAYS ACTIVE for model synchronization, mutation, ingestion, and promotion scripts handling model configuration records.

### Rules

- **R-ZENDATA-001** MAY: Validation error handlers MAY extract and aggregate structural diagnostics from ZenData validation rejections to report field-level mismatches to execution logs.

### Verify

```bash
# Discover and run the project test runner across model automation test suites
# Discover and execute the repository static analysis and type verification script
```

**Accept when:**
- Model lifecycle automation scripts reject invalid or incomplete model JSON payloads during verification test runs.
- Valid model definitions pass ZenData validation and successfully complete pull, update, and promote execution paths.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification steps (test runner and static analysis) are mandatory.
</enforcement>