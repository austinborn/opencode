# Adoption of @cloudflare/workers-types for Edge Runtime Typing: Resource Abstraction Layers Encapsulate Cloudflare Workers

These rules are ALWAYS ACTIVE for all serverless edge function handlers, background log processors, worker execution routines, and cloud resource definitions managing edge storage namespaces and runtime bindings.

### Rules

- **R-ADR-001** MAY: Resource abstraction layers MAY encapsulate @cloudflare/workers-types interfaces behind internal domain contracts when multi-runtime portability is required.

### Verify

```bash
# Discover and execute project type verification script across edge function and resource packages
# Inspect repository dependency manifests and resolution artifacts to confirm @cloudflare/workers-types is declared in required runtime scopes
```

**Accept when:**
- Static type verification across edge function and resource modules passes with zero errors.
- Dependency declarations in project manifests strictly align with resolved versions in the repository lock artifact.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static type analysis and peer review.
</enforcement>