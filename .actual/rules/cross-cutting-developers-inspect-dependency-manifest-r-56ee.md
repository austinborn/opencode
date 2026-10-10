# Adoption of fs/promises for Asynchronous File System Operations: Developers Inspect Dependency Manifest Resolved Resolution

These rules are ALWAYS ACTIVE for script automation, build routines, sitemap generation, and repository maintenance utilities performing file system I/O.

### Rules

- **R-AFSP-001** MUST: Developers MUST inspect the dependency manifest and the resolved resolution artifact in the repository to verify runtime compatibility before introducing or altering core library integrations.

### Verify

```bash
# Discover the project static analysis runner from the repository manifest and execute linting checks to verify module import conformance.
# Discover the automated test suite runner from the repository configuration and execute script test suites to ensure proper asynchronous completion.
```

**Accept when:**
- Static analysis validates that file system operations in automation scripts exclusively use the specified promise-based core module.
- All automated test runs and build script executions complete without unhandled promise rejections or blocked operations.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>