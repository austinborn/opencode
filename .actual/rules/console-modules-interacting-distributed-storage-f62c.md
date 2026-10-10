# Adoption of @cloudflare/workers-types for Edge Runtime Typing: Modules Interacting Distributed Storage Namespaces Execution

These rules are ALWAYS ACTIVE for all serverless edge function handlers, background log processors, worker execution routines, and cloud resource definitions managing edge storage namespaces and runtime bindings.

### Rules

- **R-CFW-001** SHOULD: Modules interacting with distributed storage namespaces or execution environments SHOULD consume specific binding interfaces provided by @cloudflare/workers-types rather than generic untyped representations.
- **R-CFW-002** MANDATORY: The consumer MUST discover tool names, file names, commands, package managers, and version numbers from the project repository.
- **R-CFW-003** MANDATORY: Before writing code that uses a versioned library, execute in order: find dependency manifest, identify build tool, inspect repository lock or resolution artifact for exact resolved version, look up official documentation for that exact version, confirm every API/class/function exists in that version's documentation, and re-run for version-sensitive behavior per dependency at point of use.
- **R-CFW-004** MANDATORY: Isolate runtime-specific type dependencies to edge module boundaries to maintain modularity in shared business logic.
- **R-CFW-005** MANDATORY: Configure project compilation targets so edge execution typings do not conflict with standard platform globals in other workspace layers.

### Verify

```bash
# Discover and execute the project type verification script across all edge function and resource packages
# Inspect repository dependency manifests and resolution artifacts to confirm @cloudflare/workers-types is declared in required runtime scopes
```

**Accept when:**
- Static type verification across edge function and resource modules passes with zero errors.
- Dependency declarations in project manifests strictly align with resolved versions in the repository lock artifact.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is enforced via automated static type analysis during continuous integration workflows and mandatory peer review verification on pull requests modifying edge function contracts or dependencies.
</enforcement>