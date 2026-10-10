# Solid Router Server Query RPC Pattern for Primary Datastore Access: Queries That Read Tenant Scoped Workspace

These rules are ALWAYS ACTIVE for all frontend route modules, layout components, client-facing feature sections, and data fetching utility modules requiring primary datastore or backend domain service access.

### Rules

- **R-DAT-001** SHOULD: Queries that read tenant-scoped or workspace-scoped datastore entities SHOULD execute inside workspace actor context wrappers to enforce authorization boundaries prior to running datastore operations.

### Verify

```bash
# Discover and run the project test runner targeting route data loaders and query functions
# Discover the static analysis tool and run type checking and lint verification across route modules
# Discover and run the project build script to verify server-side database packages are excluded from the client bundle
```

**Accept when:**
- All automated tests for route data loaders and query functions pass without errors.
- Static analysis confirms every query callback declares the server execution directive and a unique string query key.
- Client bundle inspection confirms zero inclusion of primary datastore drivers or server database utilities.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration pipelines, peer code reviews, and lint rules enforce compliance with query key naming conventions and server directive presence.
</enforcement>