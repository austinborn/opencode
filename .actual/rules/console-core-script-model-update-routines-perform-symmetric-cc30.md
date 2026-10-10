# ZenData Model Validation Module for Model Configuration Lifecycles: Model Update Routines Perform Symmetric Validation

These rules are ALWAYS ACTIVE for model synchronization, mutation, ingestion, and promotion scripts handling model configuration records.

### Rules

- **R-ZENDATA-001** SHOULD: Model update routines SHOULD perform symmetric validation against existing stored configurations and incoming replacement configurations using ZenData.validate before calculating or writing state differentials.

### Verify

```bash
# Discover and run the project test runner across model automation test suites
# Discover and execute the repository static analysis and type verification script
```

**Accept when:**
- Model lifecycle automation scripts reject invalid or incomplete model JSON payloads during verification test runs.
- Valid model definitions pass ZenData validation and successfully complete pull, update, and promote execution paths.

<enforcement>
Verification is mandatory. Automated pull request checks and peer code reviews enforce compliance.
</enforcement>