# Event-V2-Bridge Module Adoption for Subsystem Event Publication: When Utilizing Third Party Runtime Library

These rules are ALWAYS ACTIVE for components, services, and route handlers that broadcast domain state transitions, task outcomes, or lifecycle updates across subsystem boundaries when utilizing third-party runtime or library dependencies.

### Rules

- **R-EV2-001** MUST: When utilizing third-party runtime or library dependencies alongside internal bridging modules, consumers MUST inspect the repository lock artifact to determine resolved versions prior to implementing integrations.

### Verify

```bash
# Discover and execute test suite and static analysis scripts from the repository build manifest
# Example discovery pattern:
# 1. Identify build manifest in repo
# 2. Run test execution script
# 3. Run static analysis and type checking script to verify events.publish compliance
```

**Accept when:**
- All event emission across domain services executes through the event-v2-bridge interface without type errors.
- Static verification and test suites pass with zero unresolved event publication errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test execution, automated static analysis rules, and peer code review enforce these validation boundaries.
</enforcement>