# Adoption of @solid-primitives/event-listener for Reactive Event Handling: Consumers Inspect Repository Lock Artifact Determine

These rules are ALWAYS ACTIVE for client-side user interface components, session views, layout panels, and reactive context providers that listen to DOM, document, window, or custom target events.

### Rules

- **R-EVENT-001** MUST: Consumers MUST inspect the repository lock artifact to determine the exact resolved version of @solid-primitives/event-listener and verify public API compatibility before implementation.

### Verify

```bash
# Discover and execute the repository typechecking command to verify correct primitive import signatures and reactive argument typing.
# Discover and run component unit and integration test suites to verify event handler execution and unmount cleanup.
```

**Accept when:**
- All client modules binding DOM or window listeners compile with zero type errors against the resolved library types.
- Automated test suites verify that event listeners trigger expected callbacks and unregister cleanly upon reactive scope disposal.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>