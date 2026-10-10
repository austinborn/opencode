# Adoption of @solid-primitives/event-listener for Reactive Event Handling: Event Handling Logic Use Createeventlistener Makeeventlistener

These rules are ALWAYS ACTIVE for client-side user interface components, session views, layout panels, and reactive context providers that listen to DOM, document, window, or custom target events.

### Rules

- **R-EVD-001** SHOULD: Event handling logic SHOULD use createEventListener or makeEventListener primitives to maintain declarative listener configurations alongside reactive state.

### Verify

```bash
# Discover and execute repository typechecking to verify correct primitive import signatures and reactive argument typing
npm run typecheck

# Discover and run component unit and integration test suites to verify event handler execution and unmount cleanup
npm test
```

**Accept when:**
- All client modules binding DOM or window listeners compile with zero type errors against the resolved library types.
- Automated test suites verify that event listeners trigger expected callbacks and unregister cleanly upon reactive scope disposal.

<enforcement>
Claude Code MUST NOT skip or defer verification. All client-side event binding logic must use reactive primitives with automated unbinding, subject to verified CI check suites.
</enforcement>