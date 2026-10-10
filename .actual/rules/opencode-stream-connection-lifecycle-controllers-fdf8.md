# Adopt @/provider/error Module for Unified Provider Error Normalization: Stream Connection Lifecycle Controllers Not Emit

These rules are ALWAYS ACTIVE for all provider integration plugins, transport pooling mechanisms, and session LLM coordination layers that communicate with external model providers.

### Rules

- **R-PROV-001** MUST_NOT: Stream and connection lifecycle controllers MUST NOT emit raw, unhandled transport errors or vendor-specific exception shapes directly into consumer session pipelines.

### Verify

```bash
# Discover the workspace verification script from the project manifest and execute the test suite covering provider error modules.
# Discover the project typecheck and lint scripts from the manifest and run static validation across all integration modules.
```

**Accept when:**
- All provider integration test suites pass, confirming correct error wrapping and status code propagation across transport layers.
- Static type verification passes across provider plugins and session modules without unresolved error references.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks and peer code reviews.
</enforcement>