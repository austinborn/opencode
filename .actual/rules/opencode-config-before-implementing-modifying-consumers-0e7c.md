# Adoption of @opencode-ai/core/util/glob for Configuration File Discovery: Before Implementing Modifying Consumers Versioned Dependencies

These rules are ALWAYS ACTIVE for configuration loaders, discovery modules locating configuration artifacts, and subsystem entry point resolvers requiring filesystem pattern matching across the workspace.

### Rules

- **R-GLOB-001** MUST: Before implementing or modifying consumers of versioned dependencies, developers MUST inspect the repository dependency lock artifact to confirm the exact resolved version and verify that all invoked interfaces exist in that version reference documentation.
- **R-GLOB-002** MUST: Inspect the workspace package hierarchy to locate the internal utility module export definition for globbing operations before introducing new discovery queries.
- **R-GLOB-003** MUST: Ensure pattern matching arguments passed to the utility match expected schema boundaries and handle empty match results gracefully without throwing unhandled exceptions.
- **R-GLOB-004** MUST: Resolve all file discovery patterns exclusively through the internal @opencode-ai/core/util/glob module without external globbing dependencies across all configuration loaders.

### Verify

```bash
# Discover the project test script from the package configuration manifest and execute unit and integration suites covering configuration loading modules.
# Identify the workspace lint and dependency boundary check task to ensure all configuration modules import file matching routines solely from the approved internal utility module.
# Execute the project type-checking command across workspace packages to verify that all invocations of the globbing utility conform to exported type signatures.
```

**Accept when:**
- All configuration loaders resolve file discovery patterns exclusively through the internal @opencode-ai/core/util/glob module without external globbing dependencies.
- Automated test suites for agent, plugin, and command configuration subsystems pass with zero regressions.
- Static analysis and type validation report zero errors across workspace modules consuming the pattern matching utility.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis, linting rules, and peer code review during pull request evaluations.
</enforcement>