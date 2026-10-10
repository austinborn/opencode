# Adoption of @opencode-ai/core/util/glob for Configuration File Discovery: Configuration Discovery Routines Not Introduce Secondary

These rules are ALWAYS ACTIVE for configuration loaders and discovery modules locating configuration artifacts across the workspace, and subsystem entry point resolvers requiring filesystem pattern matching.

### Rules

- **R-GLOB-001** MUST_NOT: Configuration discovery routines MUST NOT introduce secondary or unvetted glob resolution packages into configuration loader subsystems.

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
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests containing unauthorized filesystem matching libraries or bypasses of the core utility module will fail continuous integration checks and require refactoring.
</enforcement>