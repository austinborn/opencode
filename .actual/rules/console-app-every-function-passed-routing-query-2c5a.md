# Solid Router Server Query RPC Pattern for Primary Datastore Access: Every Function Passed Routing Query Wrapper

These rules are ALWAYS ACTIVE for all frontend route modules, layout components, client-facing feature sections, and data fetching utility modules that require data from primary datastores or backend domain services.

### Rules

- **R-SOLID-001** MUST: Every function passed to the routing query wrapper MUST include the "use server" directive as its opening statement to prevent server-side datastore access logic from leaking into client bundles.

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