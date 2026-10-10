# Adoption of @solidjs/router for Client-Side Routing and Navigation State: Decouple Shared Business Logic Non View

These rules are ALWAYS ACTIVE for client-side frontend view components, layout controllers, and contextual state providers requiring URL navigation or parameter access.

### Rules

- **R-ROUTER-001** SHOULD: Decouple shared business logic and non-view state management from direct router dependencies by abstracting navigation actions behind service or context boundaries.

### Verify

```bash
# Discover and run project static analysis and linting verification scripts
# Discover and execute project automated test suites
# Inspect the repository lock artifact using the project resolution verification procedure
```

**Accept when:**
- Static analysis and dependency verification scripts complete with zero violations across all modules importing the routing library.
- Automated test suites verify that route parameter parsing and nested view transitions function correctly across all layout components.
- All active client views and navigation state managers derive route parameters exclusively through the adopted routing interface.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis and peer architectural reviews enforce adherence.
</enforcement>