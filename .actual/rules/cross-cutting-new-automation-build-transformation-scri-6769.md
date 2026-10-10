# fs/promises Core Module Adoption for Asynchronous Filesystem Workflows: New Automation Build Transformation Scripts Not

These rules are ALWAYS ACTIVE for all build scripts, code generation utilities, and package transformation tasks performing file and directory I/O, as well as repository automation scripts executed during continuous integration and release processes.

### Rules

- **R-FS-001** MUST_NOT: New automation, build, and transformation scripts MUST_NOT import or invoke synchronous filesystem blocking APIs unless explicitly operating within a low-level single-process initialization wrapper.

### Verify

```bash
# Discover the project script runner from the repository manifest and execute the designated static analysis script for filesystem utility modules.
# Execute the repository test suite via the discovered task runner to validate that asynchronous filesystem operations complete without unhandled promise rejections.
```

**Accept when:**
- Static analysis validates that all non-bootstrap tooling scripts use asynchronous fs/promises imports without synchronous filesystem calls.
- All build and generation scripts successfully complete with zero unhandled promise rejections or path resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>