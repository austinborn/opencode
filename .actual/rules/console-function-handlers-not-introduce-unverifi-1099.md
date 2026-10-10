# Adoption of @cloudflare/workers-types for Edge Runtime Typing: Function Handlers Not Introduce Unverified Ambient

These rules are ALWAYS ACTIVE for all serverless edge function handlers, background log processors, worker execution routines, and cloud resource definitions managing edge storage namespaces and runtime bindings.

### Rules

- **R-EDG-001** MUST_NOT: Function handlers MUST_NOT introduce unverified ambient global declarations that shadow or conflict with platform interfaces defined by @cloudflare/workers-types.

### Verify

```bash
# Discover the project type verification script and execute static analysis across all edge function and resource packages.
# Inspect repository dependency manifests and resolution artifacts to confirm @cloudflare/workers-types is declared in required runtime scopes.
```

**Accept when:**
- Static type verification across edge function and resource modules passes with zero errors.
- Dependency declarations in project manifests strictly align with resolved versions in the repository lock artifact.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type analysis and mandatory peer review verification on pull requests enforce these rules, causing build failure on any static type diagnostic error.
</enforcement>