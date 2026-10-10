# Provider Integration Boundary via connect Interface: Integration State Updates Provider Cache Modifications

These rules are ALWAYS ACTIVE for user interface dialogs and workflow components responsible for selecting, configuring, or activating provider integrations, and integration boundary routines managing model and provider connectivity.

### Rules

- **R-PROV-001** SHOULD: Integration state updates and provider cache modifications SHOULD synchronize with server integration endpoints before finalizing connection state.
- **R-PROV-002** MANDATORY: Ensure all integration dialog handlers verify prerequisite configuration fields before triggering the connect interface.
- **R-PROV-003** MANDATORY: Coordinate provider cache state updates with the outcome of connect invocations to preserve UI consistency.
- **R-PROV-004** MANDATORY: Enforce strict schema validation on provider and model parameters prior to invoking the connect boundary.

### Verify

```bash
# Discover and run the project static analysis and test validation suites through the repository script runner.
# Execute integration boundary verification tests defined in repository configuration.
```

**Accept when:**
- All provider connection dialogs invoke the connect interface without protocol deviations.
- Repository verification and type check suites execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks and mandatory peer code review inspect interface compliance and test coverage. Pull requests bypassing the connect boundary will be blocked from merging.
</enforcement>