# Solid Router Server Query RPC Pattern for Primary Datastore Access: Before Implementing Updating Data Retrieval Functions

These rules are ALWAYS ACTIVE for all frontend route modules, layout components, client-facing feature sections, and data fetching utility modules that require data from primary datastores or backend domain services.

### Rules

- **R-SOLID-001** MUST: Before implementing or updating data retrieval functions using the routing framework, the development environment MUST inspect the repository lock artifact to verify the exact resolved version of the routing dependency.

### Verify

```bash
# Discover and execute the project test runner targeting route data loaders and query functions
# Discover and run the static analysis tool for type checking and lint verification across route modules
# Discover and run the project build script to verify server-side database packages are excluded from the client bundle
```

**Accept when:**
- All automated tests for route data loaders and query functions pass without errors.
- Static analysis confirms every query callback declares the server execution directive and a unique string query key.
- Client bundle inspection confirms zero inclusion of primary datastore drivers or server database utilities.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>