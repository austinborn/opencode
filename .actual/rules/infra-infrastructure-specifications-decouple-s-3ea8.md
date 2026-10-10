# Adoption of Internal Secret Module: Infrastructure Specifications Decouple Secret Consumption Stage

These rules are ALWAYS ACTIVE for all infrastructure specifications, service deployment declarations, and operational resource configurations that consume sensitive credentials.

### Rules

- **R-SEC-001** SHOULD: Infrastructure specifications SHOULD decouple secret consumption from stage-specific configuration and application deployment definitions.
- **R-SEC-002** MANDATORY: Expose strongly typed credential exports from the internal secret module rather than dynamic dictionary lookups.
- **R-SEC-003** MANDATORY: Ensure all required runtime credential bindings are validated during initialization before exporting them to consuming infrastructure modules.
- **R-SEC-004** MANDATORY (DISCOVERY POLICY): Omit all tool names, file names, commands, package managers, and version numbers in implementations; derive them from the project repository.
- **R-SEC-005** MANDATORY (LOCK-VERSION GROUNDING): Before writing code that uses a versioned library, find the dependency manifest, identify the build tool, inspect the repository lock/resolution artifact for the exact resolved version, look up official documentation for that exact version, confirm APIs exist, and re-verify per dependency at point of use.

### Verify

```bash
# Discover and execute project static analysis and linting scripts from the repository manifest
# to verify no direct environment variable accesses exist in infrastructure specifications.
# Discover and run the project type checking and test suites to confirm that all infrastructure
# specifications correctly resolve secrets through the internal secret module.
```

**Accept when:**
- Static analysis confirms that credential references across all infrastructure specifications route exclusively through the internal secret module.
- All infrastructure validation and test suites pass without unhandled credential resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration pipelines fail when unauthorized credential access patterns are introduced outside the designated secret module, and pull requests containing direct environment variable lookups in infrastructure specifications are blocked from merging.
</enforcement>