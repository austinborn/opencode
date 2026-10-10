# Adoption of fs/promises for Asynchronous File System Operations: Developers Use Promises Module Asynchronous File

These rules are ALWAYS ACTIVE for script automation, build routines, sitemap generation, and repository maintenance utilities performing file system I/O.

### Rules

- **R-FS-001** MUST: Developers MUST use the fs/promises module for all asynchronous file system operations within script and build automation workflows.

### Verify

```bash
# Discover the project static analysis runner from the repository manifest and execute linting checks to verify module import conformance.
# Discover the automated test suite runner from the repository configuration and execute script test suites to ensure proper asynchronous completion.
```

**Accept when:**
- Static analysis validates that file system operations in automation scripts exclusively use the specified promise-based core module.
- All automated test runs and build script executions complete without unhandled promise rejections or blocked operations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>