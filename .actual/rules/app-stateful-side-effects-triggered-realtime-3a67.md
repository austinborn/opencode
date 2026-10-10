# Adoption of @/context/sdk Module for Unified Client and Realtime Event Management: Stateful Side Effects Triggered Realtime Status

These rules are ALWAYS ACTIVE for frontend application modules including views, pages, dialogs, and workspace controllers requiring backend client calls or realtime event streaming.

### Rules

- **R-STATE-001** SHOULD: Stateful side effects triggered by realtime status events verify active dialog or view states to prevent duplicate presentations and respect configured cool-down thresholds.

### Verify

```bash
# Discover and run the project repository's static analysis and type checking script to verify compliant imports and typed context accessor invocations.
# Discover and execute the project test runner across component and controller test suites to confirm that context-dependent behaviors pass with mock providers.
```

**Accept when:**
- Type checking and static analysis pass across all application modules without direct out-of-band client instantiations.
- Automated unit and integration tests for session controllers and dialogs execute cleanly using the context provider interface.

<enforcement>
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests introducing direct client instantiations or unmanaged event listeners outside the context module will be blocked at code review. Static analysis violations must be remediated prior to merging into main branches.
</enforcement>