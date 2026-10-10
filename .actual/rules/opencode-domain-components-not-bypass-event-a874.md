# Event-V2-Bridge Module Adoption for Subsystem Event Publication: Domain Components Not Bypass Event Bridge

These rules are ALWAYS ACTIVE for components, services, and route handlers that broadcast domain state transitions, task outcomes, or lifecycle updates across subsystem boundaries.

### Rules

- **R-EVP-001** MUST_NOT: Domain components MUST NOT bypass the event-v2-bridge module to invoke transport-specific dispatchers or direct listener subscriptions directly.

### Verify

```bash
# Discover and run the repository test suite to verify event dispatch behavior
# Locate and run repository static analysis and type checking to verify events.publish compliance
```

**Accept when:**
- All event emission across domain services executes through the event-v2-bridge interface without type errors.
- Static verification and test suites pass with zero unresolved event publication errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test execution and automated static analysis rules verify this requirement.
</enforcement>