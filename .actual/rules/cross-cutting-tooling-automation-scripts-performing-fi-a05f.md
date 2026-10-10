# fs/promises Core Module Adoption for Asynchronous Filesystem Workflows: Tooling Automation Scripts Performing Filesystem Operations

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-FSP-001** MUST: Tooling and automation scripts performing filesystem operations MUST utilize the asynchronous fs/promises module for file manipulation and directory traversal rather than synchronous filesystem interfaces.

### Verify

```bash
# Discover the project script runner from the repository manifest and execute the designated static analysis script for filesystem utility modules.
# Execute the repository test suite via the discovered task runner to validate that asynchronous filesystem operations complete without unhandled promise rejections.
```

**Accept when:**
- Static analysis validates that all non-bootstrap tooling scripts use asynchronous fs/promises imports without synchronous filesystem calls.
- All build and generation scripts successfully complete with zero unhandled promise rejections or path resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>