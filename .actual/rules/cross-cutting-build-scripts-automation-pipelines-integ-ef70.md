# bun Core Library Adoption: Build Scripts Automation Pipelines Integrate Framework

These rules are ALWAYS ACTIVE for automation scripts, build workflows, publication pipelines, and platform service components across the repository.

### Rules

- **R-BUN-001** MAY: Build scripts and automation pipelines MAY integrate framework-specific plugins compatible with the bun module ecosystem when compiling or packaging repository artifacts.

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