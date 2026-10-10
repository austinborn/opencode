# Remotion Adoption for Programmatic Video Composition: Video Compositions Parameterize Visual Properties Timing

These rules are ALWAYS ACTIVE for all programmatic video scenes, composition roots, and visual animation components.

### Rules

- **R-REM-001** SHOULD: Video compositions SHOULD parameterize visual properties and timing via component props to enable deterministic rendering across frames.

### Verify

```bash
# Discover and run the project static analysis and type check scripts across the video modules.
# Discover the project test runner from the dependency manifest and execute the test suite covering video compositions.
```

**Accept when:**
- All video composition and scene modules pass static type analysis without errors.
- Video rendering test suites execute successfully and verify deterministic frame output.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks executing static type inspection and composition unit tests, and peer code review.
</enforcement>