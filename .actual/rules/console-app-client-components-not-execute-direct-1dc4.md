# Solid Router Server Query RPC Pattern for Primary Datastore Access: Client Components Not Execute Direct Datastore

These rules are ALWAYS ACTIVE for all frontend route modules, layout components, and client-facing feature sections that require data from primary datastores or backend domain services.

### Rules

- **R-SOLID-001** MUST_NOT: Client components MUST NOT execute direct datastore transactions, queries, or raw database connections outside of server-demarcated query wrappers.

### Verify

```bash
# Discover the project test runner and execute the automated test suite targeting route data loaders and query functions.
# Discover the static analysis tool configured in the repository and run type checking and lint verification across all route modules.
# Discover and run the project build script to verify that server-side database packages are excluded from the client application bundle.
```

**Accept when:**
- All automated tests for route data loaders and query functions pass without errors.
- Static analysis confirms every query callback declares the server execution directive and a unique string query key.
- Client bundle inspection confirms zero inclusion of primary datastore drivers or server database utilities.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>