# Adopt @/provider/error Module for Unified Provider Error Normalization: Integration Modules Coordinate Error Reporting Centralized

These rules are ALWAYS ACTIVE for all provider integration plugins, transport pooling mechanisms, and session LLM coordination layers that communicate with external model providers.

### Rules

- **R-PROV-001** SHOULD: Integration modules SHOULD coordinate error reporting with centralized error utility functions to ensure consistent diagnostic telemetry across provider boundaries.
- **R-PROV-002** MANDATORY: All transport listeners map incoming socket and request failures through the standard provider error adapter before emitting events to controllers.
- **R-PROV-003** MANDATORY: Downstream error consumers inspect structured error fields rather than performing string parsing on error messages.
- **R-PROV-004** MANDATORY: Provider error structures capture wrapped error attributes including status, body, and headers.
- **R-PROV-005** MANDATORY: Enforce event-driven error listeners on all socket and pool instances that direct failures to lifecycle controllers.

### Verify

```bash
# Discover the workspace verification script from the project manifest and execute the test suite covering provider error modules.
# Discover the project typecheck and lint scripts from the manifest and run static validation across all integration modules.
```

**Accept when:**
- All provider integration test suites pass, confirming correct error wrapping and status code propagation across transport layers.
- Static type verification passes across provider plugins and session modules without unresolved error references.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks and peer code reviews enforce compliance.
</enforcement>