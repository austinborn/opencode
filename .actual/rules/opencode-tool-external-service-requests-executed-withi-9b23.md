# Adoption of @opencode-ai/plugin for Tool Extensions: External Service Requests Executed Within Plugin

These rules are ALWAYS ACTIVE for tool extension definitions, capability modules, and network client calls implementing external service requests within plugin modules.

### Rules

- **R-OP-001** MUST: External service requests executed within plugin modules MUST source authentication credentials and dynamic parameters through runtime environment configuration.

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
Claude Code MUST NOT skip or defer verification. Verification of static types, lint rules, and plugin interface conformance is mandatory.
</enforcement>