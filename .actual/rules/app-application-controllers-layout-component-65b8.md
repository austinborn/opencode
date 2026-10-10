# Adoption of Server Synchronization Context Module (@/context/server-sync): Application Controllers Layout Components Hooks Requiring

These rules are ALWAYS ACTIVE for all application controllers, layout components, hooks, and views in the application layer requiring access to server state, project lists, or session synchronization.

### Rules

- **R-SYNC-001** MUST: Application controllers, layout components, and hooks requiring server-synchronized state or remote project operations MUST consume the `@/context/server-sync` module rather than establishing independent remote synchronization channels.

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