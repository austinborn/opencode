# Centralized Billing Domain Module Adoption: @opencode-ai/console-core/billing.js: Server Query Functions Exposing Billing Summaries

These rules are ALWAYS ACTIVE for all console application routes rendering billing, usage, subscriptions, payment settings, server queries and actions mutating customer balances, payment methods, and auto-reload thresholds, and external billing provider webhook endpoints.

### Rules

- **R-BILL-001** MUST: Server query functions exposing billing summaries and payment history MUST resolve caller workspace authorization via actor context wrappers prior to invoking domain billing methods.

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
Claude Code MUST NOT skip or defer verification. All billing operations and server queries exposing billing summaries must be verified against actor context boundaries and architectural standards.
</enforcement>