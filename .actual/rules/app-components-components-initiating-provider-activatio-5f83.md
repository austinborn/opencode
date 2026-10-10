# Provider Integration Boundary via connect Interface: Components Initiating Provider Activation Route Connection

These rules are ALWAYS ACTIVE for user interface dialogs, workflow components selecting/configuring/activating provider integrations, and integration boundary routines managing model and provider connectivity.

### Rules

- **R-PROV-001** MUST: Components initiating provider activation MUST route connection lifecycle requests through the designated connect integration interface.

### Verify

```bash
# Discover and run the project static analysis, test validation suites, and integration boundary verification tests through the repository script runner.
```

**Accept when:**
- All provider connection dialogs invoke the connect interface without protocol deviations.
- Repository verification and type check suites execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks inspecting interface compliance and test coverage, and mandatory peer code review for changes affecting provider integration dialogs and connection boundaries.
</enforcement>