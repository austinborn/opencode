# Adoption of fs/promises for Asynchronous File System Operations: Developers Handle Promise Rejections Promises Operations

These rules are ALWAYS ACTIVE for script automation, build routines, sitemap generation, and repository maintenance utilities performing file system I/O (excluding runtime application code without direct local file system interaction, performance-critical synchronous bootstrapping tasks, and explicitly excepted initialization phases like EXC-20-001).

### Rules

- **R-FS-001** MUST: Developers MUST handle promise rejections from fs/promises operations using structured error boundaries and standardized diagnostic logging.

### Verify

```bash
# Discover the project static analysis runner from the repository manifest and execute linting checks
# Discover the automated test suite runner from the repository configuration and execute script test suites
```

**Accept when:**
- Static analysis validates that file system operations in automation scripts exclusively use the specified promise-based core module.
- All automated test runs and build script executions complete without unhandled promise rejections or blocked operations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>