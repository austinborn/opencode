# Remotion Adoption for Programmatic Video Composition: Developers Inspect Project Resolution Artifact Identify

These rules are ALWAYS ACTIVE for all programmatic video scenes, composition roots, and visual animation components.

### Rules

- **R-REMOTION-001** MUST: Developers MUST inspect the project resolution artifact to identify the exact locked version of the video framework before invoking its APIs or introducing scene dependencies.

### Verify

```bash
# Discover and execute the project test runner covering video compositions
# Discover and run static analysis and type check scripts across the video modules
```

**Accept when:**
- All video composition and scene modules pass static type analysis without errors.
- Video rendering test suites execute successfully and verify deterministic frame output.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>