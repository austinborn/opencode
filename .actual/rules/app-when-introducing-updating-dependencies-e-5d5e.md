# Adoption of @opencode-ai/ui/context for Application State and Context Management: When Introducing Updating Dependencies Engineers Inspect

These rules are ALWAYS ACTIVE for frontend state modules, context providers, and UI integration points requiring shared access to client sessions, permissions, and layout definitions.

### Rules

- **R-DEP-001** MUST: When introducing or updating dependencies, engineers MUST inspect the repository lock artifact to verify the exact resolved version against the dependency manifest before implementation.

### Verify

```bash
# Discover and run the project static analysis and linting scripts to verify compliance with context import conventions.
# Discover and execute the automated test suite to confirm context providers initialize and propagate state correctly.
```

**Accept when:**
- All frontend context definitions import and utilize the designated context module without unresolved bindings.
- Static analysis and test suites execute with zero failures across the frontend package.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks executing repository test suites and static analysis, as well as peer code review.
</enforcement>