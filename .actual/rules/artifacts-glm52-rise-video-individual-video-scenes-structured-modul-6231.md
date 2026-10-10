# Remotion Adoption for Programmatic Video Composition: Individual Video Scenes Structured Modular Components

These rules are ALWAYS ACTIVE for all programmatic video scenes, composition roots, and visual animation components.

### Rules

- **R-REM-001** MUST: Individual video scenes MUST be structured as modular components that isolate visual presentation and animation timelines.

### Verify

```bash
# Discover the project test runner from the dependency manifest and execute the test suite covering video compositions.
# Discover and run the project static analysis and type check scripts across the video modules.
```

**Accept when:**
- All video composition and scene modules pass static type analysis without errors.
- Video rendering test suites execute successfully and verify deterministic frame output.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>