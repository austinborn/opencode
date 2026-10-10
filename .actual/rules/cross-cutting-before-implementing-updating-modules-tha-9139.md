# fs/promises Core Module Adoption for Asynchronous Filesystem Workflows: Before Implementing Updating Modules That Rely

These rules are ALWAYS ACTIVE for build scripts, code generation utilities, package transformation tasks, and repository automation scripts performing file and directory I/O.

### Rules

- **R-FSP-001** MUST: Before implementing or updating modules that rely on versioned runtime features, engineers MUST inspect the repository lock or resolution artifact to confirm the exact resolved engine target and runtime capabilities.
- **R-FSP-002** MUST: Use the asynchronous `fs/promises` core module and `path` module resolution methods for file input, output, and path resolution across build scripts and automation tooling, avoiding synchronous I/O bottlenecks.
- **R-FSP-003** MUST: Structure file generation workflows using async functions to allow clean composition and straightforward error propagation with strict async/await try-catch patterns.

### Verify

```bash
# Discover the project script runner from the repository manifest and execute static analysis
# and test suite validation to ensure asynchronous fs/promises usage without unhandled rejections.
package_manager=$(node -p "
  const fs = require('fs');
  if (fs.existsSync('pnpm-lock.yaml')) 'pnpm';
  else if (fs.existsSync('yarn.lock')) 'yarn';
  else if (fs.existsSync('package-lock.json')) 'npm';
  else 'npm';
")

# Run static analysis and tests via the detected package manager
$package_manager run lint || true
$package_manager test || true
```

**Accept when:**
- Static analysis validates that all non-bootstrap tooling scripts use asynchronous `fs/promises` imports without synchronous filesystem calls.
- All build and generation scripts successfully complete with zero unhandled promise rejections or path resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>