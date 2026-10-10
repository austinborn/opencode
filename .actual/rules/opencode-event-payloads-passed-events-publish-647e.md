# Event-V2-Bridge Module Adoption for Subsystem Event Publication: Event Payloads Passed Events Publish Conform

These rules are ALWAYS ACTIVE for components, services, and route handlers that broadcast domain state transitions, task outcomes, or lifecycle updates across subsystem boundaries.

### Rules

- **R-EV2-001** SHOULD: All event payloads passed to events.publish SHOULD conform to strongly typed event schema definitions established within shared domain contracts.

### Verify

```bash
# Discover and run the repository test execution script from the build manifest to verify event dispatch behavior.
# Locate and run the repository static analysis and type checking script to verify events.publish schema compliance.
```

**Accept when:**
- All event emission across domain services executes through the event-v2-bridge interface without type errors.
- Static verification and test suites pass with zero unresolved event publication errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test execution, automated static analysis, and peer code review enforce these rules.
</enforcement>