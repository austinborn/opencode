# Adopt @/provider/error Module for Unified Provider Error Normalization: Provider Client Integrations Transport Pools Model

These rules are ALWAYS ACTIVE for all provider integration plugins, transport pooling mechanisms, and session LLM coordination layers that communicate with external model providers.

### Rules

- **R-PROV-001** MUST: All provider client integrations, transport pools, and model execution pipelines MUST import and use the internal @/provider/error module as the authoritative source for provider error modeling and normalization.

### Verify

```bash
# Discover the workspace verification script from the project manifest and execute the test suite covering provider error modules.
# Discover the project typecheck and lint scripts from the manifest and run static validation across all integration modules.
```

**Accept when:**
- All provider integration test suites pass, confirming correct error wrapping and status code propagation across transport layers.
- Static type verification passes across provider plugins and session modules without unresolved error references.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks executing repository test suites and static analysis, as well as peer code review.
</enforcement>