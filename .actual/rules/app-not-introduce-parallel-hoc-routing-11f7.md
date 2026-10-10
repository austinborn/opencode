# Adoption of @solidjs/router for Client-Side Routing and Navigation State: Not Introduce Parallel Hoc Routing Mechanisms

These rules are ALWAYS ACTIVE for client-side frontend view components, layout controllers, and contextual state providers requiring URL navigation or parameter access.

### Rules

- **R-ROUTER-001** MUST_NOT: Introduce parallel or ad-hoc routing mechanisms, manual window history manipulations, or competing router libraries within the application codebase.
- **R-ROUTER-002** MUST: Abstract router parameter extraction and query state resolution within dedicated layout controllers or context providers to maintain clean leaf component boundaries.
- **R-ROUTER-003** MUST: Structure nested route configurations to mirror the logical visual hierarchy, isolating persistent application chrome from dynamic child content.

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
Claude Code MUST NOT skip or defer verification. Automated static analysis checks and dependency boundary validations during continuous integration, as well as peer architectural review for pull requests adding or altering view routes and navigation controllers, are mandatory.
</enforcement>