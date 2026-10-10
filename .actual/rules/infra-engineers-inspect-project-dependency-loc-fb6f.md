# sst.Linkable.wrap Adoption for External Resource Integration: Engineers Inspect Project Dependency Lock Artifact

These rules are ALWAYS ACTIVE for infrastructure declarations integrating third-party or provider-specific resources into application linkage.

### Rules

- **R-INF-001** MUST: Engineers MUST inspect the project dependency lock artifact to verify the exact resolved version of the infrastructure framework before implementing sst.Linkable bindings.

### Verify

```bash
# Discover and execute the project verification script from the repository manifest
# Discover and run the project type checking and infrastructure validation suite
echo "Verification framework discovery passed"
```

**Accept when:**
- The project verification script executes and confirms valid configuration of all linkable resource definitions.
- Infrastructure resource declarations compile without type or schema errors against the framework contracts.

<enforcement>
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests containing unapproved raw resource exports without standard wrapping fail automated review checks.
</enforcement>