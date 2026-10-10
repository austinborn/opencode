# Adoption of @cloudflare/workers-types for Edge Runtime Typing: Consumers Discover Repository Dependency Resolution Lock

These rules are ALWAYS ACTIVE for all serverless edge function handlers, background log processors, worker execution routines, and cloud resource definitions managing edge storage namespaces and runtime bindings.

### Rules

- **R-CFW-001** MUST: Consumers MUST discover the repository dependency resolution lock artifact and verify the exact resolved version of @cloudflare/workers-types against upstream runtime specifications before introducing or modifying runtime bindings.
- **R-CFW-002** MANDATORY: Execute the lock-version grounding sequence (find dependency manifest, identify build tool, inspect repository lock/resolution artifact, look up official documentation for that exact version, and confirm every API/class/function exists in that version) before writing code that uses a versioned library.
- **R-CFW-003** MANDATORY: Isolate runtime-specific type dependencies to edge module boundaries and configure project compilation targets so edge execution typings do not conflict with standard platform globals in other workspace layers.

### Verify

```bash
# Discover the project type verification script and execute static analysis across all edge function and resource packages.
# Inspect repository dependency manifests and resolution artifacts to confirm @cloudflare/workers-types is declared in required runtime scopes.
```

**Accept when:**
- Static type verification across edge function and resource modules passes with zero errors.
- Dependency declarations in project manifests strictly align with resolved versions in the repository lock artifact.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type analysis executed during CI workflows and mandatory peer review verification will block pull requests on any static type diagnostic error.
</enforcement>