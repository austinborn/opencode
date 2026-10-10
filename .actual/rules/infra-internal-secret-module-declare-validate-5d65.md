# Adoption of Internal Secret Module: Internal Secret Module Declare Validate Required

These rules are ALWAYS ACTIVE for all infrastructure specifications, service deployment declarations, and operational resource configurations that consume sensitive credentials.

### Rules

- **R-ISM-001** MUST: The internal secret module MUST declare and validate all required runtime credential bindings prior to exporting them for consumption by downstream infrastructure components.
- **R-ISM-002** MUST: Discover the project static analysis and linting scripts from the repository manifest and execute them to verify no direct environment variable accesses exist in infrastructure specifications.
- **R-ISM-003** MUST: Discover and run the project type checking and test suites to confirm that all infrastructure specifications correctly resolve secrets through the internal secret module.
- **R-ISM-004** MUST: Execute lock-version grounding in order (find manifest, identify build tool, inspect lock/resolution artifact, look up official docs for exact version, confirm API exists, re-run per dependency at point of use) before writing code that uses a versioned library.
- **R-ISM-005** SHOULD: Expose strongly typed credential exports from the internal secret module rather than dynamic dictionary lookups.

### Verify

```bash
# Discover and execute project static analysis and linting scripts to verify no direct env var access
# (Commands must be derived from the project repository manifest)
```

**Accept when:**
- Static analysis confirms that credential references across all infrastructure specifications route exclusively through the internal secret module.
- All infrastructure validation and test suites pass without unhandled credential resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by automated static analysis, linting, type checking, and test suites is mandatory for all changes touching infrastructure definitions and credential consumption.
</enforcement>