# Centralized Console Inference Proxy Seam: Inference Proxy Handlers Capture Attach Billing

These rules are ALWAYS ACTIVE for all packages/console/app/src/lib/inference-proxy.ts, packages/console/app/src/routes/zen/**, and infra/console.ts files.

### Rules

- **R-INF-001** MUST: Inference proxy handlers MUST capture and attach Go billing source tracking metadata for all external AI routing operations.

### Verify

```bash
# Discover and execute tests covering inference proxy routing, header forwarding, and billing tracking.
npm test -- packages/console/app/src/lib/inference-proxy.ts
# Run static analysis checks across console routes to ensure no unproxied external provider calls exist.
npm run lint
```

**Accept when:**
- All outgoing AI model requests in Console routes pass through inference-proxy.ts.
- Client IP headers and Go billing source metadata are verified in outgoing requests to upstream providers.
- Unit and integration tests for proxy handlers and routes pass cleanly.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>