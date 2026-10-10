# sst.Linkable.wrap Adoption for External Resource Integration: Infrastructure Definitions Use Sst Linkable Wrap

These rules are ALWAYS ACTIVE for infrastructure declarations integrating third-party or provider-specific resources into application linkage.

### Rules

- **R-EXT-001** MUST: Infrastructure definitions MUST use sst.Linkable.wrap when exposing outputs from unmanaged or third-party resources such as random.RandomPassword to the application resource linkage system.

### Verify

```bash
# Discover and execute the project verification script from the repository manifest
# Discover and run the project type checking and infrastructure validation suite
```

**Accept when:**
- The project verification script executes and confirms valid configuration of all linkable resource definitions.
- Infrastructure resource declarations compile without type or schema errors against the framework contracts.

<enforcement>
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests containing unapproved raw resource exports without standard wrapping fail automated review checks.
</enforcement>