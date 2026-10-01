# Centralized Console Inference Proxy Seam: Console Route Handlers Client Components Not

These rules are ALWAYS ACTIVE for console route handlers, client components, and inference proxy configurations.

### Rules

- **R-INF-001** MUST_NOT: Console route handlers and client components MUST NOT maintain direct credentials or unproxied network connections to external AI inference providers.

### Verify

```bash
# Discover and execute tests covering inference proxy routing, header forwarding, and billing tracking.
npm test -- packages/console
# Discover and run static analysis checks across console routes to ensure no unproxied external provider calls exist.
npm run lint -- packages/console
```

**Accept when:**
- All outgoing AI model requests in Console routes pass through inference-proxy.ts.
- Client IP headers and Go billing source metadata are verified in outgoing requests to upstream providers.
- Unit and integration tests for proxy handlers and routes pass cleanly.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated integration test suites and code reviews validate proxy routing, authentication, and billing metadata propagation.
</enforcement>