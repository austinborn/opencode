# Inference proxy seam for migrated workspace routing: Inference Proxy Layer Determine Destination Backend

These rules are ALWAYS ACTIVE for all workspace-scoped inference endpoints, provider discovery, BYOK routing handlers, model listing, and Go inference request paths in `packages/console/app`.

### Rules

- **R-IP-001** MUST: The `inference-proxy` layer MUST determine the destination backend route using the workspace `migrated_at` timestamp.

### Verify

```bash
# Discover and execute test suites targeting inference-proxy and workspace route handlers
npx jest packages/console/app/src/lib/inference-proxy packages/console/app/src/routes/zen
# Run static code analysis to ensure direct provider client imports are absent from Zen route handlers
npx eslint packages/console/app/src/routes/zen
```

**Accept when:**
- Inference and provider discovery calls route to migrated destinations when `migrated_at` is set
- Inference and provider discovery calls maintain legacy routing when `migrated_at` is null
- All automated tests for inference proxying pass

<enforcement>
Claude Code MUST NOT skip or defer verification. Code review and automated test suites verify that route handlers delegate to `inference-proxy`.
</enforcement>