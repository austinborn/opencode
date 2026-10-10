# Provider Integration Boundary via connect Interface: Consumers Discover Project Dependency Lock Artifact

These rules are ALWAYS ACTIVE for user interface dialogs, workflow components, and integration boundary routines managing model and provider connectivity.

### Rules

- **R-PROV-001** MUST: Consumers MUST discover the project dependency lock artifact and resolve the exact locked versions of all integration dependencies before modifying integration boundaries.

### Verify

```bash
# Discover and run the project static analysis and test validation suites through the repository script runner.
# Execute integration boundary verification tests defined in repository configuration.
```

**Accept when:**
- All provider connection dialogs invoke the connect interface without protocol deviations.
- Repository verification and type check suites execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>