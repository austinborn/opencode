# Adoption of @opencode-ai/plugin for Tool Extensions: Custom Tool Extensions Developed Agent Integration

These rules are ALWAYS ACTIVE for all custom tool extensions and agent integration capability modules.

### Rules

- **R-OPENC-001** MUST: All custom tool extensions developed for agent integration MUST import and implement interfaces provided by @opencode-ai/plugin.

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