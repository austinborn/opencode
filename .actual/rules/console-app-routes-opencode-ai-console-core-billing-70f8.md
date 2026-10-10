# Centralized Billing Domain Module Adoption: @opencode-ai/console-core/billing.js: External Payment Gateway Callbacks Webhook Handlers

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-CB-001** SHOULD: External payment gateway callbacks and webhook handlers SHOULD coordinate balance increments, customer record synchronization, and payment audit logging through transactional boundaries defined in conjunction with the billing domain module.

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
Claude Code MUST NOT skip or defer verification. Verification is mandatory via static analysis, test suites, and peer review.
</enforcement>