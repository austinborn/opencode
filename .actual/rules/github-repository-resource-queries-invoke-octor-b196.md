# @octokit/rest for GitHub Data Access and Pull Request Operations: Repository Resource Queries Invoke Octorest Rest

These rules are ALWAYS ACTIVE for modules executing remote repository metadata queries, pull request creation, and management operations.

### Rules

- **R-OCTO-001** MUST: Repository resource queries MUST invoke octoRest.rest.repos.get with verified owner and repository parameters.

### Verify

```bash
# Discover and run the repository type-check script to verify client invocation typing.
# Discover and run the repository test suite to validate repository data access and pull request creation flows.
```

**Accept when:**
- All data access operations targeting remote repository resources use typed client methods without type errors.
- The project test suite passes with simulated repository client responses.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>