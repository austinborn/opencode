# WebSocket Resilience Boundary via retry and terminalWebSocketURL: Terminal Connection Urls Constructed Via Terminalwebsocketurl

These rules are ALWAYS ACTIVE for realtime streaming transport boundaries connecting interactive terminal interfaces to backend execution environments and socket event handlers processing connection termination and lifecycle state transitions.

### Rules

- **R-WS-001** MUST: Terminal connection URLs MUST be constructed via terminalWebSocketURL to ensure uniform parameter propagation across initial connection and retry attempts.

### Verify

```bash
# Discover and run the project test runner covering interactive terminal resilience and socket event handling
# Discover and execute static analysis, linting, and type checking scripts from the workspace configuration
```

**Accept when:**
- All unit tests covering WebSocket closure handling and retry dispatch pass without regression.
- Clean socket disconnects terminate without triggering retry execution.
- Static verification and type validation scripts pass with zero errors across the boundary implementation.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipeline executing unit and integration test suites on pull requests, and peer code review verifying adherence to socket lifecycle and resilience retry patterns.
</enforcement>