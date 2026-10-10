# WebSocket Resilience Boundary via retry and terminalWebSocketURL: Clean Disconnect Events Not Trigger Retry

These rules are ALWAYS ACTIVE for realtime streaming transport boundaries connecting interactive terminal interfaces to backend execution environments and socket event handlers processing connection termination and lifecycle state transitions.

### Rules

- **R-WS-001** MUST_NOT: Clean disconnect events MUST NOT trigger the retry mechanism or initiate automatic reconnection.

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
Claude Code MUST NOT skip or defer verification. Verification is enforced by automated CI pipelines, peer code reviews, and blocking merge requests that violate error retry boundaries or introduce unmanaged socket close handlers.
</enforcement>