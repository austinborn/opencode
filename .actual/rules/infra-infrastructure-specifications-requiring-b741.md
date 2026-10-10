# Adoption of Internal Secret Module: Infrastructure Specifications Requiring Sensitive Credentials Import

These rules are ALWAYS ACTIVE for all infrastructure specifications, service deployment declarations, and operational resource configurations that consume sensitive credentials.

### Rules

- **R-INF-001** MUST: Infrastructure specifications requiring sensitive credentials MUST import and resolve them exclusively through the designated internal secret module.

### Verify

```bash
# Discover and execute project static analysis, linting, type checking, and test suites
# to verify no direct environment variable accesses exist and secrets resolve correctly.
# (Commands must be discovered from the repository manifest)
```

**Accept when:**
- Static analysis confirms that credential references across all infrastructure specifications route exclusively through the internal secret module.
- All infrastructure validation and test suites pass without unhandled credential resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration pipelines and pull request checks enforce this rule.
</enforcement>