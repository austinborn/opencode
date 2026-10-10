# Adoption of fs/promises for Asynchronous File System Operations: Developers Not Use Synchronous File System

These rules are ALWAYS ACTIVE for script automation, build routines, sitemap generation, and repository maintenance utilities performing file system I/O.

### Rules

- **R-FS-001** MUST_NOT: Developers MUST NOT use synchronous file system APIs in automation scripts unless explicitly required by single-threaded lifecycle phases.

### Verify

```bash
# Discover the project static analysis runner from the repository manifest and execute linting checks
# Discover the automated test suite runner and execute script test suites
```

**Accept when:**
- Static analysis validates that file system operations in automation scripts exclusively use the specified promise-based core module.
- All automated test runs and build script executions complete without unhandled promise rejections or blocked operations.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>