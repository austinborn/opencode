# Solid Router Server Query RPC Pattern for Primary Datastore Access: Route Level Component Data Retrieval Operations

These rules are ALWAYS ACTIVE for all frontend route modules, layout components, client-facing feature sections, and data fetching utility modules that require data from primary datastores or backend domain services.

### Rules

- **R-SOLID-001** MUST: Route-level and component-level data retrieval operations that query primary datastores or domain services MUST be encapsulated within @solidjs/router query wrapper functions.

### Verify

```bash
# Discover and run the project test runner targeting route data loaders and query functions
# Discover and run the static analysis tool for type checking and lint verification across route modules
# Discover and run the project build script to verify server-side database packages are excluded from client bundles
```

**Accept when:**
- All automated tests for route data loaders and query functions pass without errors.
- Static analysis confirms every query callback declares the server execution directive and a unique string query key.
- Client bundle inspection confirms zero inclusion of primary datastore drivers or server database utilities.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>