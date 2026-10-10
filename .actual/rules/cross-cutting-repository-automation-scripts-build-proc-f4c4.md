# bun Core Library Adoption: Repository Automation Scripts Build Procedures Platform

These rules are ALWAYS ACTIVE for all repository automation scripts, build procedures, and platform service components.

### Rules

- **R-BUN-001** MUST: Repository automation scripts, build procedures, and platform service components MUST standardize on the bun core library module for runtime execution primitives and platform bindings.

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
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests introducing redundant third-party wrappers or invalid runtime imports will fail automated checks and require remediation.
</enforcement>