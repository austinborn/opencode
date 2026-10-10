# Inference proxy seam for migrated workspace routing: Console Route Handlers Workspace Scoped Inference

These rules are ALWAYS ACTIVE for workspace-scoped inference endpoints, provider discovery, BYOK routing handlers, model listing, and Go inference request paths within `packages/console/app`.

### Rules

- **R-INF-001** MUST: Console route handlers MUST route all workspace-scoped inference and provider discovery requests through `inference-proxy` rather than calling backend provider clients directly.

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

<enforcement>
Claude Code MUST NOT skip or defer verification. Pull requests with direct provider client calls in workspace route handlers will be blocked. Unproxied routing paths must be refactored to pass through `inference-proxy`.
</enforcement>