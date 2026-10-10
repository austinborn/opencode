# @octokit/rest for GitHub Data Access and Pull Request Operations: Data Access Layer Use Octokit Rest

These rules are ALWAYS ACTIVE for modules executing remote repository metadata queries and pull request creation and management operations.

### Rules

- **R-GH-001** MUST: The data access layer MUST use @octokit/rest client interfaces for executing remote repository queries and pull request mutations rather than direct unformatted network requests.

### Verify

```bash
# Discover and run the repository type-check script to verify client invocation typing
npm run type-check || yarn type-check || pnpm type-check
# Discover and run the repository test suite to validate repository data access and pull request creation flows
npm test || yarn test || pnpm test
```

**Accept when:**
- All data access operations targeting remote repository resources use typed client methods without type errors.
- The project test suite passes with simulated repository client responses.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>