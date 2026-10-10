# Effect Library Adoption for Service Command Handlers: Handlers Not Execute Unmanaged Background Process

These rules are ALWAYS ACTIVE for command handlers coordinating daemon service operations, operational status checks, and CLI handlers interfacing with internal runtime and service modules.

### Rules

- **R-CLI-001** MUST_NOT: Handlers MUST_NOT execute unmanaged background process mutations outside of managed Effect scopes.

### Verify

```bash
# Discover and run the project static analysis and type verification task
# (e.g., pnpm check, npm run typecheck, or yarn tsc)

# Discover and execute the test runner suite to validate service lifecycle commands
# (e.g., pnpm test, npm test, or yarn test)
```

**Accept when:**
- All command handlers pass static type analysis with fully resolved effect/Effect types and runtime imports.
- Integration and unit test suites execute successfully with service lifecycle commands yielding expected effects without unhandled errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static type analysis, linting verification, and peer code reviews.
</enforcement>