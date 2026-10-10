# Adoption of @opencode-ai/plugin for Tool Extensions: Tool Plugin Implementations Not Hardcode Authentication

These rules are ALWAYS ACTIVE for all tool extension definitions, capability modules, and network client calls implemented within the repository.

### Rules

- **R-OPENCEN-001** MUST_NOT: Tool plugin implementations MUST NOT hardcode authentication tokens, API secrets, or environment-specific configuration values in source files.

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
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks and pull request code reviews.
</enforcement>