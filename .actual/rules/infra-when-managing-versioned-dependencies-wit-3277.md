# Adoption of Internal Secret Module: When Managing Versioned Dependencies Within Module

These rules are ALWAYS ACTIVE for all infrastructure specifications, service deployment declarations, and operational resource configurations that consume sensitive credentials.

### Rules

- **R-SEC-001** MUST: When managing versioned dependencies within the module ecosystem, consumers MUST inspect the project lock file to verify and bind to exact resolved dependency versions before implementation.

### Verify

```bash
# Discover and execute project static analysis, linting, type checking, and test suites
# derived from the repository manifest to verify no direct environment variable accesses
# exist and that all infrastructure specifications correctly resolve secrets through the internal secret module.
```

**Accept when:**
- Static analysis confirms that credential references across all infrastructure specifications route exclusively through the internal secret module.
- All infrastructure validation and test suites pass without unhandled credential resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>