# Event-V2-Bridge Module Adoption for Subsystem Event Publication: Event Publication Calls Not Introduce Synchronous

These rules are ALWAYS ACTIVE for components, services, and route handlers that broadcast domain state transitions, task outcomes, or lifecycle updates across subsystem boundaries.

### Rules

- **R-EVP-001** SHOULD NOT: Event publication calls SHOULD NOT introduce synchronous blocking operations into domain transaction boundaries.

### Verify

```bash
# Discover and execute the repository test execution script from the build manifest to verify event dispatch behavior.
# Locate and execute the repository static analysis and type checking script to verify that all events.publish calls comply with expected event schema signatures.
```

**Accept when:**
- All event emission across domain services executes through the event-v2-bridge interface without type errors.
- Static verification and test suites pass with zero unresolved event publication errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test execution, automated static analysis rules, and peer code reviews enforce these boundaries.
</enforcement>