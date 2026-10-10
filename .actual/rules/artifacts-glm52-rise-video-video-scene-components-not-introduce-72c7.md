# Remotion Adoption for Programmatic Video Composition: Video Scene Components Not Introduce Hoc

These rules are ALWAYS ACTIVE for all programmatic video scenes, composition roots, and visual animation components.

### Rules

- **R-REM-001** MUST_NOT: Video scene components MUST NOT introduce ad-hoc external media players or imperative DOM animation engines that bypass framework frame scheduling.

### Verify

```bash
# Discover and run the project static analysis and type check scripts across the video modules
# Discover the project test runner from the dependency manifest and execute the test suite covering video compositions
```

**Accept when:**
- All video composition and scene modules pass static type analysis without errors.
- Video rendering test suites execute successfully and verify deterministic frame output.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by automated continuous integration checks executing static type inspection and composition unit tests is mandatory.
</enforcement>