# @octokit/rest for GitHub Data Access and Pull Request Operations: Consumers Discover Project Dependency Lock Artifact

These rules are ALWAYS ACTIVE for modules executing remote repository metadata queries, and modules executing pull request creation and management operations.

### Rules

- **R-OCTO-001** MUST: Consumers MUST discover the project dependency lock artifact and verify the exact resolved version of @octokit/rest against published API documentation prior to invoking client methods.

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