# fs/promises Core Module Adoption for Asynchronous Filesystem Workflows: Batch Filesystem Reads Writes Coordinate Concurrent

These rules are ALWAYS ACTIVE for build scripts, code generation utilities, package transformation tasks, and repository automation scripts performing file and directory I/O.

### Rules

- **R-FS-001** SHOULD: Batch filesystem reads and writes SHOULD coordinate concurrent fs/promises calls using asynchronous collection combinators to maximize I/O throughput.

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