# Adoption of @cloudflare/workers-types for Edge Runtime Typing: Modules Not Bypass Platform Typing Casting

These rules are ALWAYS ACTIVE for all serverless edge function handlers, background log processors, worker execution routines, and cloud resource definitions managing edge storage namespaces and runtime bindings.

### Rules

- **R-EDG-001** MUST_NOT: Modules MUST_NOT bypass platform typing by casting worker request payloads or storage responses directly to untyped structures without structural validation.

### Verify

```bash
# Discover and execute the project type verification script for edge functions
# Inspect dependency manifests and lock artifacts for @cloudflare/workers-types
```

**Accept when:**
- Static type verification across edge function and resource modules passes with zero errors.
- Dependency declarations in project manifests strictly align with resolved versions in the repository lock artifact.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory during continuous integration and peer reviews, and any static type diagnostic errors will block pull request merging.
</enforcement>