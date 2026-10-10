# sst.Linkable.wrap Adoption for External Resource Integration: Wrapping Transformation Function Passed Sst Linkable

These rules are ALWAYS ACTIVE for infrastructure declarations integrating third-party or provider-specific resources into application linkage.

### Rules

- **R-LINK-001** MUST: The wrapping transformation function passed to sst.Linkable.wrap MUST return an object structure containing a properties mapping that extracts required output attributes from the underlying resource instance.

### Verify

```bash
# Discover and execute the project verification script from the repository manifest
# Discover and run the project type checking and infrastructure validation suite
```

**Accept when:**
- The project verification script executes and confirms valid configuration of all linkable resource definitions.
- Infrastructure resource declarations compile without type or schema errors against the framework contracts.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>