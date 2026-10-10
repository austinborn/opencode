# Adopt @/provider/error Module for Unified Provider Error Normalization: Before Integrating Updating Dependency Modules Related

These rules are ALWAYS ACTIVE for all provider integration plugins, transport pooling mechanisms, and session LLM coordination layers that communicate with external model providers.

### Rules

- **R-PROVIDER-001** MUST: Before integrating or updating dependency modules related to provider communication, consumers MUST discover the repository lock artifact and verify the exact resolved versions of all associated dependencies against official API documentation.
- **R-PROVIDER-002** MUST: All provider integration plugins, transport pooling mechanisms, and session LLM coordination layers MUST route incoming socket and request failures through the standard `@/provider/error` adapter before emitting events to controllers.
- **R-PROVIDER-003** MUST: Downstream error consumers MUST inspect structured error fields rather than performing string parsing on error messages.
- **R-PROVIDER-004** MUST: Provider error structures MUST capture wrapped error attributes including status, body, and headers.
- **R-PROVIDER-005** MUST: All socket and pool instances MUST enforce event-driven error listeners that direct failures to lifecycle controllers.

### Verify

```bash
# Discover and run the workspace verification script from the project manifest covering provider error modules
# Discover and run the project typecheck and lint scripts from the manifest across all integration modules
```

**Accept when:**
- All provider integration test suites pass, confirming correct error wrapping and status code propagation across transport layers.
- Static type verification passes across provider plugins and session modules without unresolved error references.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests emitting unnormalized transport errors or bypassing the internal provider error module will be blocked.
</enforcement>