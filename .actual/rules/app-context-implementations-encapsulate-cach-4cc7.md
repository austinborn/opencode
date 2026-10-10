# Adoption of @opencode-ai/ui/context for Application State and Context Management: Context Implementations Encapsulate Cache Invalidation Cleanup

These rules are ALWAYS ACTIVE for frontend state modules, context providers, and UI integration points requiring shared access to client sessions, permissions, and layout definitions.

### Rules

- **R-CTX-001** SHOULD: Context implementations SHOULD encapsulate cache invalidation and cleanup routines within the registered context lifecycle.

### Verify

```bash
# Discover and run the project static analysis and linting scripts to verify compliance with context import conventions.
# Discover and execute the automated test suite to confirm context providers initialize and propagate state correctly.
```

**Accept when:**
- All frontend context definitions import and utilize the designated context module without unresolved bindings.
- Static analysis and test suites execute with zero failures across the frontend package.

<enforcement>
Claude Code MUST NOT skip or defer verification. All frontend context implementations must encapsulate cache invalidation and cleanup within the registered context lifecycle.
</enforcement>