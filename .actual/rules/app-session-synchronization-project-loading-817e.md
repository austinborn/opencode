# Adoption of Server Synchronization Context Module (@/context/server-sync): Session Synchronization Project Loading Operations Triggered

These rules are ALWAYS ACTIVE for all controllers, layout components, hooks, views, storybook configurations, and tests in the application layer requiring access to server state, project lists, or session synchronization.

### Rules

- **R-SYNC-001** SHOULD: Session synchronization and project loading operations SHOULD be triggered via scoped methods on the server synchronization context in response to route transitions or explicit user interactions.

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
Claude Code MUST NOT skip or defer verification. Automated verification failures block integration pipelines when unauthorized direct synchronization pathways are detected.
</enforcement>