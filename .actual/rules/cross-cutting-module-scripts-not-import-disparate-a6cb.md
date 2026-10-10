# bun Core Library Adoption: Module Scripts Not Import Disparate External

These rules are ALWAYS ACTIVE for automation scripts, build workflows, publication pipelines, and platform service components across repository packages.

### Rules

- **R-BUN-001** MUST_NOT: Module scripts MUST NOT import disparate external polyfills or redundant third-party wrappers for capabilities natively exposed by the bun core library interface.

### Verify

```bash
git grep -nE 'from ["\x27]bun["\x27]'
# Discover the repository manifest and execute the designated test verification suite
# Discover the lock resolution artifact and verify all resolved dependency versions match the execution environment
```

**Accept when:**
- All script and platform service imports of the bun module resolve without runtime or compile-time resolution errors
- Repository verification and automated validation suites pass across all affected packages
- The active execution environment matches the authoritative lock resolution artifact without unresolved dependency mismatches

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>