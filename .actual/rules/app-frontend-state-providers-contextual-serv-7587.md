# Adoption of @opencode-ai/ui/context for Application State and Context Management: Frontend State Providers Contextual Service Modules

These rules are ALWAYS ACTIVE for frontend state modules, context providers, and UI integration points requiring shared access to client sessions, permissions, and layout definitions.

### Rules

- **R-OPENC-001** MUST: Frontend state providers and contextual service modules MUST use @opencode-ai/ui/context as the standard mechanism for declaring, binding, and accessing scoped reactive contexts.

### Verify

```bash
# Discover and run project static analysis and linting scripts to verify compliance with context import conventions
# Discover and execute automated test suites to confirm context providers initialize and propagate state correctly
```

**Accept when:**
- All frontend context definitions import and utilize the designated context module without unresolved bindings.
- Static analysis and test suites execute with zero failures across the frontend package.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by automated continuous integration checks, peer code review, and static analysis is mandatory.
</enforcement>