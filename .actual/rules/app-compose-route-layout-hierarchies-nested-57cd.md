# Adoption of @solidjs/router for Client-Side Routing and Navigation State: Compose Route Layout Hierarchies Nested Segments

These rules are ALWAYS ACTIVE for all client-side frontend view components, layout controllers, and contextual state providers requiring URL navigation or parameter access.

### Rules

- **R-ROUTER-001** MAY: Compose route layout hierarchies and nested route segments to encapsulate view-specific UI shells and persistent sidebars.
- **R-ROUTER-002** MANDATORY: Discover tool names, file names, commands, package managers, and version numbers from the project repository.
- **R-ROUTER-003** MANDATORY: Execute lock-version grounding before writing code that uses a versioned library: find dependency manifest, identify build tool, inspect repository lock or resolution artifact for exact version, look up official documentation for that exact version, confirm APIs exist, and re-verify per dependency at point of use.
- **R-ROUTER-004** MANDATORY: Abstract router parameter extraction and query state resolution within dedicated layout controllers or context providers to maintain clean leaf component boundaries.
- **R-ROUTER-005** MANDATORY: Structure nested route configurations to mirror the logical visual hierarchy, isolating persistent application chrome from dynamic child content.

### Verify

```bash
# Discover and run the project static analysis and linting verification scripts
# Discover and execute the project automated test suites
# Inspect the repository lock artifact using the project resolution verification procedure
```

**Accept when:**
- Static analysis and dependency verification scripts complete with zero violations across all modules importing the routing library.
- Automated test suites verify that route parameter parsing and nested view transitions function correctly across all layout components.
- All active client views and navigation state managers derive route parameters exclusively through the adopted routing interface.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis checks, dependency boundary validations, and peer architectural reviews verify compliance. Pull requests introducing unapproved routing libraries or direct browser history manipulation are rejected.
</enforcement>