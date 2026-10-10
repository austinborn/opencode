# Adoption of @solidjs/router for Client-Side Routing and Navigation State: Inspect Repository Lock Artifact Verify Exact

These rules are ALWAYS ACTIVE for client-side frontend view components, layout controllers, and contextual state providers requiring URL navigation or parameter access.

### Rules

- **R-SOLID-001** MUST: Inspect the repository lock artifact to verify the exact resolved version of @solidjs/router prior to introducing or updating route-dependent implementations.

### Verify

```bash
# Discover and run the project static analysis and linting verification scripts to validate import boundaries and router usage compliance.
# Discover and execute the project automated test suites to ensure route navigation and parameter resolution pass without regressions.
# Inspect the repository lock artifact using the project resolution verification procedure to confirm dependency consistency.
```

**Accept when:**
- Static analysis and dependency verification scripts complete with zero violations across all modules importing the routing library.
- Automated test suites verify that route parameter parsing and nested view transitions function correctly across all layout components.
- All active client views and navigation state managers derive route parameters exclusively through the adopted routing interface.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by automated static analysis checks, dependency boundary validations, and peer architectural review is mandatory.
</enforcement>