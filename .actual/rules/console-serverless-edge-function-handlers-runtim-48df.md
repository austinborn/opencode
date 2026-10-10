# Adoption of @cloudflare/workers-types for Edge Runtime Typing: Serverless Edge Function Handlers Runtime Resource

These rules are ALWAYS ACTIVE for all serverless edge function handlers, background log processors, worker execution routines, and cloud resource definitions managing edge storage namespaces and runtime bindings.

### Rules

- **R-EDG-001** MUST: All serverless edge function handlers and runtime resource definition modules MUST declare and utilize @cloudflare/workers-types to type execution contexts, request lifecycle primitives, and storage bindings.

### Verify

```bash
# Discover the project type verification script and execute static analysis across edge function and resource packages
npm run typecheck
# Inspect repository dependency manifests and resolution artifacts to confirm @cloudflare/workers-types is declared in required runtime scopes
```

**Accept when:**
- Static type verification across edge function and resource modules passes with zero errors.
- Dependency declarations in project manifests strictly align with resolved versions in the repository lock artifact.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static type analysis and peer review.
</enforcement>