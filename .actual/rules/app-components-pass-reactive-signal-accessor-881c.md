# Adoption of @solid-primitives/event-listener for Reactive Event Handling: Components Pass Reactive Signal Accessors Target

These rules are ALWAYS ACTIVE for client-side user interface components, session views, layout panels, and reactive context providers that listen to DOM, document, window, or custom target events.

### Rules

- **R-EVP-001** MAY: Components MAY pass reactive signal accessors as target or event configuration arguments when dynamic event redirection is required by runtime state.
- **R-EVP-002** MANDATORY: Ensure all listener attachments occur inside components or reactive root contexts so that disposal hooks trigger synchronously on unmount.
- **R-EVP-003** MANDATORY: When listening to dynamic targets such as active elements or optional references, supply accessor functions directly to the primitive.
- **R-EVP-004** MANDATORY: Execute lock-version grounding before writing code that uses a versioned library: (1) Find dependency manifest, (2) Identify build tool, (3) Inspect repository lock/resolution artifact, (4) Look up official docs for that exact version, (5) Confirm every API exists in that version, (6) Re-run steps 3-5 per dependency at point of use.

### Verify

```bash
# Discover and execute the repository typechecking command to verify correct primitive import signatures and reactive argument typing.
# Discover and run component unit and integration test suites to verify event handler execution and unmount cleanup.
```

**Accept when:**
- All client modules binding DOM or window listeners compile with zero type errors against the resolved library types.
- Automated test suites verify that event listeners trigger expected callbacks and unregister cleanly upon reactive scope disposal.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration checks executing typechecking and test suites, along with peer code review inspecting new event listener attachments for adherence to reactive primitive patterns.
</enforcement>