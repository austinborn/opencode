# Centralized Billing Domain Module Adoption: @opencode-ai/console-core/billing.js: Route Components Consume Read Only Limit

These rules are ALWAYS ACTIVE for all console application routes rendering billing, usage, subscriptions, and payment settings, as well as server queries/actions mutating customer balances and external billing provider webhook endpoints.

### Rules

- **R-BILL-001** MAY: Route components MAY consume read-only limit configurations and usage window metrics directly from domain calculation utilities when rendering customer quota views.

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
Claude Code MUST NOT skip or defer verification. All billing and webhook implementations must be verified via repository static analysis and test execution.
</enforcement>