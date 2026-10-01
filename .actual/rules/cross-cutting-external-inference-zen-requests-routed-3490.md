# Centralized Console Inference Proxy Seam: External Inference Zen Requests Routed Through

These rules are ALWAYS ACTIVE for external inference and Zen requests within Console routes.

### Rules

- **R-INF-001** MUST: External inference and Zen requests MUST be routed through the authenticated inference proxy boundary rather than invoking upstream AI provider APIs directly.

### Verify

```bash
# Discover and execute tests covering inference proxy routing, header forwarding, and billing tracking.
npm test -- packages/console

# Discover and run static analysis checks across console routes to ensure no unproxied external provider calls exist.
npm run lint
```

**Accept when:**
- All outgoing AI model requests in Console routes pass through inference-proxy.ts.
- Client IP headers and Go billing source metadata are verified in outgoing requests to upstream providers.
- Unit and integration tests for proxy handlers and routes pass cleanly.

<enforcement>
Claude Code MUST NOT skip or defer verification. Pull requests with direct client calls to external inference providers will be blocked during code review.
</enforcement>