# Remotion Adoption for Programmatic Video Composition: Programmatic Video Animations Scene Components Compositions

These rules are ALWAYS ACTIVE for all programmatic video scenes, composition roots, and visual animation components.

### Rules

- **R-REM-001** MUST: All programmatic video animations, scene components, and video compositions MUST be authored using the Remotion framework and React component model.

### Verify

```bash
# Discover and run the project static analysis and type check scripts across the video modules.
# Discover the project test runner from the dependency manifest and execute the test suite covering video compositions.
```

**Accept when:**
- All video composition and scene modules pass static type analysis without errors.
- Video rendering test suites execute successfully and verify deterministic frame output.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>