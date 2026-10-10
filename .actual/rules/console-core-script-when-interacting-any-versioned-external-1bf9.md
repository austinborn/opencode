# ZenData Model Validation Module for Model Configuration Lifecycles: When Interacting Any Versioned External Dependencies

These rules are ALWAYS ACTIVE for model synchronization, mutation, ingestion, and promotion scripts handling model configuration records and automation workflows deserializing JSON model representations.

### Rules

- **R-ZENDATA-001** MUST: When interacting with any versioned external dependencies that supply or serialize schema data, engineers MUST discover the repository lock artifact and verify the exact resolved version before implementation.
- **R-ZENDATA-002** MUST: Discover the internal model module export exposing ZenData and import it directly into model lifecycle automation scripts requiring schema enforcement.
- **R-ZENDATA-003** MUST: Execute ZenData schema validation immediately following JSON deserialization on all model pulling, updating, and promoting workflows.
- **R-ZENDATA-004** MUST: When reconstructing split configuration lines into contiguous JSON buffers, concatenate all multi-part values completely prior to executing JSON parsing and ZenData validation.

### Verify

```bash
# Discover and run the project test runner across model automation test suites
# Example discovery based on repository configuration (e.g., npm test, pytest, etc.)
[ -f package.json ] && npm test
[ -f pytest.ini ] || [ -d tests ] && pytest

# Discover and execute the repository static analysis and type verification script
[ -f package.json ] && npm run lint || true
```

**Accept when:**
- Model lifecycle automation scripts reject invalid or incomplete model JSON payloads during verification test runs.
- Valid model definitions pass ZenData validation and successfully complete pull, update, and promote execution paths.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated pull request checks and peer code reviews verify that all new or modified model configuration scripts invoke ZenData validation prior to mutation.
</enforcement>