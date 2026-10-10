# bun Core Library Adoption: Developers Inspect Authoritative Repository Lock Resolution

These rules are ALWAYS ACTIVE for automation scripts, build workflows, publication pipelines, and platform service components coordinating runtime operations and external integration boundaries across repository packages.

### Rules

- **R-BUN-001** MUST: Developers MUST inspect the authoritative repository lock resolution artifact to determine the exact resolved dependency version and verify API compatibility before implementing or modifying calls against the bun module.

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
Claude Code MUST NOT skip or defer verification. Automated continuous integration pipeline checks and code review verification enforce module imports and lock artifact updates.
</enforcement>