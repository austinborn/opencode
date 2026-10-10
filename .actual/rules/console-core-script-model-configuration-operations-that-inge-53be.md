# ZenData Model Validation Module for Model Configuration Lifecycles: Model Configuration Operations That Ingest Update

These rules are ALWAYS ACTIVE for model synchronization, mutation, ingestion, and promotion scripts handling model configuration records.

### Rules

- **R-ZENDATA-001** MUST: All model configuration operations that ingest, update, or promote model definitions MUST validate deserialized payloads through ZenData.validate prior to state mutation or persistence.

### Verify

```bash
# Discover and run the project test runner across model automation test suites
# Discover and execute the repository static analysis and type verification script
```

**Accept when:**
- Model lifecycle automation scripts reject invalid or incomplete model JSON payloads during verification test runs.
- Valid model definitions pass ZenData validation and successfully complete pull, update, and promote execution paths.

<enforcement>
Claude Code MUST NOT skip or defer verification. All new or modified model configuration scripts must invoke ZenData.validate prior to mutation.
</enforcement>