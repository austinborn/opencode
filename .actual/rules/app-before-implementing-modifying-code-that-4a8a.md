# Adoption of Server Synchronization Context Module (@/context/server-sync): Before Implementing Modifying Code That Consumes

These rules are ALWAYS ACTIVE for all controllers, layout components, hooks, views, storybook configurations, and tests in the application layer requiring access to server state, project lists, or session synchronization.

### Rules

- **R-SYNC-001** MUST: Before implementing or modifying code that consumes versioned dependencies or shared workspace modules, the consumer MUST inspect the repository dependency manifest and lock artifact to resolve exact pinned versions according to the Discovery Policy.

### Verify

```bash
discover_and_run_static_analysis
discover_and_run_type_check
discover_and_run_tests
```

**Accept when:**
- Static analysis passes with zero import boundary violations across all consumers of the server synchronization module.
- Type checking confirms all calls to the server synchronization interface conform to exported method and property signatures.
- Automated test suites pass without regressions in session retrieval or project synchronization behavior.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>