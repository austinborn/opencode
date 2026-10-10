# Effect Functional Effect System Adoption in Core Package: Errors Arising Background Task Execution Remote

These rules are ALWAYS ACTIVE for all core domain services and stateful infrastructure modules managing asynchronous workflows, concurrency, or background operations.

### Rules

- **R-EFF-001** MUST: Errors arising from background task execution or remote resource synchronization MUST be trapped using typed cause-catching combinators rather than untyped try-catch blocks.

### Verify

```bash
# Discover and execute the project build, test orchestration, and type-checking scripts from the project manifest
# Example discovery:
BUILD_CMD=$(npm pkg get scripts.build | tr -d '"')
TEST_CMD=$(npm pkg get scripts.test | tr -d '"')
TYPECHECK_CMD=$(npm pkg get scripts.typecheck | tr -d '"' || echo "npx tsc --noEmit")

eval $TYPECHECK_CMD
eval $TEST_CMD
```

**Accept when:**
- All core domain service modules import and execute asynchronous, scoped, and concurrent workflows via the Effect runtime without unhandled rejections.
- The project static type validation and automated test suites across core package modules pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type-checking and lint checks executed during continuous integration workflows, as well as peer architectural code reviews, enforce these standards. Violations will block pull requests.
</enforcement>