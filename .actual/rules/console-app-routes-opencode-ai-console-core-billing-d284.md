# Centralized Billing Domain Module Adoption: @opencode-ai/console-core/billing.js: Console Route Handlers Server Data Queries

These rules are ALWAYS ACTIVE for all console route handlers, server data queries, and webhook listeners interacting with workspace billing, subscriptions, or credit balances.

### Rules

- **R-BILL-001** MUST: All console route handlers, server data queries, and webhook listeners interacting with workspace billing, subscriptions, or credit balances MUST encapsulate domain operations and state transitions through @opencode-ai/console-core/billing.js.

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
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>