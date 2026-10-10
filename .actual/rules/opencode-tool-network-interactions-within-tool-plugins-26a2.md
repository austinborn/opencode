# Adoption of @opencode-ai/plugin for Tool Extensions: Network Interactions Within Tool Plugins Use

These rules are ALWAYS ACTIVE for tool extension definitions, capability modules, network client calls, and environment credential handling inside tool plugins.

### Rules

- **R-OP-001** SHOULD: Network interactions within tool plugins SHOULD use standard HTTP fetch clients with structured request headers and content negotiation rather than introducing heavy third-party client SDKs.

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
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks validating static types and lint rules, and pull request code reviews focusing on plugin interface conformance and credential isolation.
</enforcement>