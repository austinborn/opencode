# @octokit/rest for GitHub Data Access and Pull Request Operations: Components Interacting Remote Repository Data Isolate

These rules are ALWAYS ACTIVE for modules executing remote repository metadata queries, pull request creation, and management operations.

### Rules

- **R-OCTO-001** SHOULD: Components interacting with remote repository data SHOULD isolate client responses within domain-specific structures and catch client exceptions at the service boundary.

### Verify

```bash
# Discover and run the repository type-check script to verify client invocation typing.
# Discover and run the repository test suite to validate repository data access and pull request creation flows.
```

**Accept when:**
- All data access operations targeting remote repository resources use typed client methods without type errors.
- The project test suite passes with simulated repository client responses.

<enforcement>
Claude Code MUST NOT skip or defer verification. Compliance is verified via automated continuous integration pipelines, peer code reviews, and enforcement of rule conventions for repository data access.
</enforcement>