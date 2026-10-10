# Adoption of @solid-primitives/event-listener for Reactive Event Handling: Components Not Register Unmanaged Event Listeners

These rules are ALWAYS ACTIVE for client-side user interface components, session views, layout panels, and reactive context providers that listen to DOM, document, window, or custom target events.

### Rules

- **R-ADR-001** MUST_NOT: Components MUST NOT register unmanaged event listeners directly via imperative target subscription methods without encapsulating them in reactive cleanup handlers or lifecycle primitives.

### Verify

```bash
# Discover and execute the repository typechecking command
# Discover and run component unit and integration test suites
```

**Accept when:**
- All client modules binding DOM or window listeners compile with zero type errors against the resolved library types.
- Automated test suites verify that event listeners trigger expected callbacks and unregister cleanly upon reactive scope disposal.

<enforcement>
Claude Code MUST NOT skip or defer verification. All client-side components binding event listeners must use reactive lifecycle primitives and be verified via typechecking and test suites.
</enforcement>