# sst.Linkable.wrap Adoption for External Resource Integration: Resource Linkage Definitions Not Expose Unencrypted

These rules are ALWAYS ACTIVE for infrastructure declarations integrating third-party or provider-specific resources into application linkage.

### Rules

- **R-EXT-001** SHOULD_NOT: Resource linkage definitions SHOULD NOT expose unencrypted or unrestricted raw secret credentials directly when secure transmission mechanisms are required.

### Verify

```bash
echo "Discover and execute the project verification script from the repository manifest"
echo "Discover and run the project type checking and infrastructure validation suite"
```

**Accept when:**
- The project verification script executes and confirms valid configuration of all linkable resource definitions.
- Infrastructure resource declarations compile without type or schema errors against the framework contracts.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>