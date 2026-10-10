# Adoption of @solid-primitives/event-listener for Reactive Event Handling: Components Contexts Binding Dom Window Document

These rules are ALWAYS ACTIVE for client-side user interface components, session views, layout panels, and reactive context providers that listen to DOM, document, window, or custom target events.

### Rules

- **R-EL-001** MUST: Components and contexts binding DOM, window, or document event listeners MUST adopt @solid-primitives/event-listener to bind listener lifecycles directly to the reactive ownership tree.

### Verify

```bash
# Discover and execute the repository typechecking command to verify correct primitive import signatures and reactive argument typing.
# Discover and run component unit and integration test suites to verify event handler execution and unmount cleanup.
```

**Accept when:**
- All client modules binding DOM or window listeners compile with zero type errors against the resolved library types.
- Automated test suites verify that event listeners trigger expected callbacks and unregister cleanly upon reactive scope disposal.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated CI checks executing typechecking and test suites, as well as peer code reviews.
</enforcement>