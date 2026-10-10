# Adoption of Internal Secret Module: Infrastructure Specifications Not Directly Query Process

These rules are ALWAYS ACTIVE for all infrastructure specifications, service deployment declarations, and operational resource configurations that consume sensitive credentials.

### Rules

- **R-SEC-001** MUST_NOT: Infrastructure specifications MUST NOT directly query process environment variables or runtime configuration properties for sensitive credentials outside the internal secret module.

### Verify

```bash
# Discover the project static analysis and linting scripts from the repository manifest and execute them to verify no direct environment variable accesses exist in infrastructure specifications.
# Discover and run the project type checking and test suites to confirm that all infrastructure specifications correctly resolve secrets through the internal secret module.
```

**Accept when:**
- Static analysis confirms that credential references across all infrastructure specifications route exclusively through the internal secret module.
- All infrastructure validation and test suites pass without unhandled credential resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>