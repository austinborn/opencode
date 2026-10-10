# Provider Integration Boundary via connect Interface: Connection Invocations Via Connect Supply Valid

These rules are ALWAYS ACTIVE for user interface dialogs, workflow components, and integration boundary routines managing model and provider connectivity.

### Rules

- **R-CONN-001** MUST: Connection invocations via connect MUST supply valid target provider or model identifiers to ensure deterministic integration boundary dispatch.

### Verify

```bash
# Discover and run the project static analysis and test validation suites through the repository script runner.
# Execute integration boundary verification tests defined in repository configuration.
```

**Accept when:**
- All provider connection dialogs invoke the connect interface without protocol deviations.
- Repository verification and type check suites execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks inspecting interface compliance and test coverage, and mandatory peer code review for changes affecting provider integration dialogs and connection boundaries.
</enforcement>