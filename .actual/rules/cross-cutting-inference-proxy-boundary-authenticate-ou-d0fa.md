# Centralized Console Inference Proxy Seam: Inference Proxy Boundary Authenticate Outgoing Requests

These rules are ALWAYS ACTIVE for all outgoing AI inference and Zen provider requests within Console routes.

### Rules

- **R-PROXY-001** MUST: The inference proxy boundary MUST authenticate outgoing requests and propagate incoming client IP headers to upstream provider endpoints.

### Verify

```bash
# Discover and execute tests covering inference proxy routing, header forwarding, and billing tracking
npm test -- packages/console/app/src/lib/inference-proxy.ts packages/console/app/src/routes/zen/
# Run static analysis checks across console routes to ensure no unproxied external provider calls exist
npm run lint
```

**Accept when:**
- All outgoing AI model requests in Console routes pass through inference-proxy.ts.
- Client IP headers and Go billing source metadata are verified in outgoing requests to upstream providers.
- Unit and integration tests for proxy handlers and routes pass cleanly.

<enforcement>
Claude Code MUST NOT skip or defer verification. All outgoing AI inference calls must pass through the centralized inference proxy seam.
</enforcement>