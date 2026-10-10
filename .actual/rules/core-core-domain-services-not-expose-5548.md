# Effect Functional Effect System Adoption in Core Package: Core Domain Services Not Expose Raw

These rules are ALWAYS ACTIVE for all core domain services and stateful infrastructure modules managing asynchronous workflows, concurrency, or background operations.

### Rules

- **R-EFF-001** MUST_NOT: Core domain services MUST NOT expose raw unhandled promise rejections across internal boundaries.

### Verify

```bash
# Discover and run the workspace type-checking and test orchestration scripts from the project manifest/configuration
# Example discovery:
# npm test / yarn test / pnpm test / bun test
# npm run typecheck / yarn typecheck / pnpm typecheck
```

**Accept when:**
- All core domain service modules import and execute asynchronous, scoped, and concurrent workflows via the Effect runtime without unhandled rejections.
- The project static type validation and automated test suites across core package modules pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type-checking and peer architectural code reviews enforce these requirements, and pull requests introducing unmanaged asynchronous primitives will be blocked.
</enforcement>