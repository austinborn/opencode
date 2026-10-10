# Centralized Billing Domain Module Adoption: @opencode-ai/console-core/billing.js: Route Level User Interface Components Not

These rules are ALWAYS ACTIVE for all console application routes, server queries/actions mutating billing data, and external billing provider webhook endpoints.

### Rules

- **R-BILL-001** MUST_NOT: Route-level user interface components MUST NOT execute direct ad-hoc mutations against billing-related persistence tables without delegating lifecycle invariants to the billing domain module or wrapping operations within authenticated actor contexts.

### Verify

```bash
# Discover the workspace verification script from the repository manifest and execute the test suite covering billing domain routes.
# Execute the repository static analysis and type checking suite to verify import path compliance and contract alignment across console routes.
# Run the project integration test workflow targeting payment processing and webhook handlers to confirm transaction boundaries.
```

**Accept when:**
- All billing route endpoints and webhook consumers import domain operations exclusively from @opencode-ai/console-core/billing.js without bypassing actor boundaries.
- Project static type checking and automated test suites pass without unresolved module imports or contract mismatches.
- Financial balance mutations and subscription updates execute within transactional boundaries and preserve audit log integrity.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification via static analysis, test suites, and peer review is mandatory.
</enforcement>