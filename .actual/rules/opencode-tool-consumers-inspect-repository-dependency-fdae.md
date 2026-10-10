# Adoption of @opencode-ai/plugin for Tool Extensions: Consumers Inspect Repository Dependency Lock Artifact

These rules are ALWAYS ACTIVE for tool extension definitions, capability modules, and network client implementations within the repository.

### Rules

- **R-OPENCEN-001** MUST: Consumers MUST inspect the repository dependency lock artifact to resolve the exact locked version of @opencode-ai/plugin and verify documented API compatibility before implementation.

### Verify

```bash
# Discover and execute the project static analysis and linting suite to check plugin interfaces
# Discover and run the automated test suite to verify tool execution and environment configuration handling
```

**Accept when:**
- All tool plugin modules conform to interface contracts provided by the resolved dependency artifact of @opencode-ai/plugin.
- Repository verification and static analysis workflows pass with zero errors.
- Network client calls handle credentials via runtime configuration without hardcoded values.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>