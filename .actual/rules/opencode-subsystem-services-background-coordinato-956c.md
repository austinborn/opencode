# Event-V2-Bridge Module Adoption for Subsystem Event Publication: Subsystem Services Background Coordinators Route Handlers

These rules are ALWAYS ACTIVE for subsystem services, background coordinators, and route handlers emitting domain notifications, task outcomes, or lifecycle updates across subsystem boundaries.

### Rules

- **R-EVM-001** MUST: Subsystem services, background coordinators, and route handlers emitting domain notifications MUST publish all lifecycle and domain events through the event-v2-bridge interface via events.publish.

### Verify

```bash
# Discover the repository test execution script from the build manifest and execute test suite
# Locate the repository static analysis and type checking script to verify events.publish calls
```

**Accept when:**
- All event emission across domain services executes through the event-v2-bridge interface without type errors.
- Static verification and test suites pass with zero unresolved event publication errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test execution and automated static analysis rules verify this requirement.
</enforcement>