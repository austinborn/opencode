# Inference proxy seam for migrated workspace routing: Provider Connection Byok Routing Inference Traffic

These rules are ALWAYS ACTIVE for all workspace-scoped inference endpoints, provider discovery, BYOK routing handlers, model listing, and Go inference request paths under `packages/console/app` and `packages/console/core`.

### Rules

- **R-INF-001** MUST: Provider connection BYOK routing and Go inference traffic for migrated workspaces MUST be dispatched via the `inference-proxy` abstraction (`packages/console/app/src/lib/inference-proxy.ts`).
- **R-INF-002** MUST: Route handlers under `packages/console/app/src/routes/zen` MUST remain thin delegates to `inference-proxy` and avoid direct provider client imports.

### Verify

```bash
# Discover and execute test suites targeting inference-proxy and workspace route handlers
npx jest packages/console/app/src/lib/inference-proxy packages/console/app/src/routes/zen

# Discover and run static code analysis to ensure direct provider client imports are absent from Zen route handlers
npx eslint packages/console/app/src/routes/zen
```

**Accept when:**
- Inference and provider discovery calls route to migrated destinations when `migrated_at` is set
- Inference and provider discovery calls maintain legacy routing when `migrated_at` is null
- All automated tests for inference proxying pass
- No direct provider client calls exist in workspace route handlers

<enforcement>
Claude Code MUST NOT skip or defer verification. Pull requests with direct provider client calls in workspace route handlers will be blocked, and unproxied routing paths must be refactored to pass through `inference-proxy`.
</enforcement>