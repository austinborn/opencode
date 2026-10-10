# WebSocket Resilience Boundary via retry and terminalWebSocketURL: Realtime Terminal Streaming Connections Encapsulate Socket

These rules are ALWAYS ACTIVE for all realtime terminal streaming connections and socket lifecycle boundaries.

### Rules

- **R-WSR-001** MUST: Realtime terminal streaming connections MUST encapsulate socket lifecycle boundaries by handling abnormal socket closure events through the retry handler with localized error descriptions.

### Verify

```bash
# Discover the project test runner from repository configuration and run the test suite covering interactive terminal resilience and socket event handling.
# Discover the static analysis and linting scripts from the workspace configuration and execute them against the interactive boundary components.
# Discover the project type checking script and execute it to verify boundary parameter contracts and type safety.
```

**Accept when:**
- All unit tests covering WebSocket closure handling and retry dispatch pass without regression.
- Clean socket disconnects terminate without triggering retry execution.
- Static verification and type validation scripts pass with zero errors across the boundary implementation.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>