# Inference proxy seam for migrated workspace routing: Provider Connection Byok Routing Inference Traffic

These rules are ALWAYS ACTIVE for all workspace-scoped inference endpoints, provider discovery, BYOK routing handlers, model listing, and Go inference request paths under `packages/console/app` and `packages/console/core`.

### Rules

- **R-INFER-001** MUST: Provider connection BYOK routing and Go inference traffic for migrated workspaces MUST be dispatched via the `inference-proxy` abstraction.

### Verify

```bash
# Discover and execute test suites targeting inference-proxy and workspace route handlers
npx jest packages/console/app/src/lib/inference-proxy packages/console/app/src/routes/zen

# Discover and run static code analysis to ensure direct provider client imports are absent from Zen route handlers
npx tsc --noEmit
```

**Accept when:**
- Inference and provider discovery calls route to migrated destinations when `migrated_at` is set
- Inference and provider discovery calls maintain legacy routing when `migrated_at` is null
- All automated tests for inference proxying pass

<enforcement>
Claude Code MUST NOT skip or defer verification. Code review and automated test suites assert that route handlers delegate to `inference-proxy`. Pull requests with direct provider client calls in workspace route handlers will be blocked.
</enforcement>