# @octokit/rest for GitHub Data Access and Pull Request Operations: Pull Request Creation Operations Invoke Octorest

These rules are ALWAYS ACTIVE for modules executing remote repository metadata queries and pull request creation and management operations.

### Rules

- **R-OCTO-001** MUST: Pull request creation operations MUST invoke octoRest.rest.pulls.create supplying validated owner, repo, head, base, title, and body parameters.

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