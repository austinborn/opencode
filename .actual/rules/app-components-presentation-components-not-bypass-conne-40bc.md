# Provider Integration Boundary via connect Interface: Presentation Components Not Bypass Connect Interface

These rules are ALWAYS ACTIVE for user interface dialogs, workflow components responsible for selecting, configuring, or activating provider integrations, and integration boundary routines managing model and provider connectivity.

### Rules

- **R-PROV-001** MUST_NOT: Presentation components MUST NOT bypass the connect interface to instantiate ad-hoc integration connection protocols directly.

### Verify

```bash
# Discover and run the project static analysis and test validation suites through the repository script runner.
# Execute integration boundary verification tests defined in repository configuration.
```

**Accept when:**
- All provider connection dialogs invoke the connect interface without protocol deviations.
- Repository verification and type check suites execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks inspecting interface compliance and test coverage, and mandatory peer code review.
</enforcement>