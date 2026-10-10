# Adoption of @solidjs/router for Client-Side Routing and Navigation State: Use Solidjs Router Standardized Client Side

These rules are ALWAYS ACTIVE for client-side frontend view components, layout controllers, and contextual state providers requiring URL navigation or parameter access.

### Rules

- **R-ROUTER-001** MUST: Use @solidjs/router as the standardized client-side routing library for view navigation, nested layout composition, and route parameter extraction across the frontend application.

### Verify

```bash
# Discover and run project static analysis and linting verification scripts
# Discover and execute automated test suites for route navigation and parameter resolution
# Inspect the repository lock artifact using project resolution verification procedures
```

**Accept when:**
- Static analysis and dependency verification scripts complete with zero violations across all modules importing the routing library.
- Automated test suites verify that route parameter parsing and nested view transitions function correctly across all layout components.
- All active client views and navigation state managers derive route parameters exclusively through the adopted routing interface.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static analysis, dependency boundary validations, and peer architectural review.
</enforcement>