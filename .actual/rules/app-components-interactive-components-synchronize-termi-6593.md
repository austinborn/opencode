# WebSocket Resilience Boundary via retry and terminalWebSocketURL: Interactive Components Synchronize Terminal Dimensions Cursor

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-WS-001** SHOULD: Interactive components SHOULD synchronize terminal dimensions and cursor seek parameters with the remote service upon successful reconnection.

### Verify

```bash
# Discover and run the project test runner covering interactive terminal resilience and socket event handling
# Discover and execute static analysis and linting scripts
# Discover and execute project type checking script
```

**Accept when:**
- All unit tests covering WebSocket closure handling and retry dispatch pass without regression.
- Clean socket disconnects terminate without triggering retry execution.
- Static verification and type validation scripts pass with zero errors across the boundary implementation.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>