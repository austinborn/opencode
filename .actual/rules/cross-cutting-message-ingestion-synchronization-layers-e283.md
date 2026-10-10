# Standardize Chronological Ordering for Session Message Ingestion and Timelines: Message Ingestion Synchronization Layers Not Assume

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-MSG-001** MUST_NOT: Message ingestion and synchronization layers MUST NOT assume or depend upon network transport arrival order for message sequencing.

### Verify

```bash
# Run the project's test suite for session synchronization, timeline aggregation, and revert calculation
npx jest --testPathPattern="session|sync|timeline|revert"

# Run repository linter and type-checker across packages
npx turbo run lint typecheck
```

**Accept when:**
- Sync reducers and timeline views sort messages strictly by creation timestamp even when supplied out-of-order test events.
- Transcript exports and revert boundary calculations produce deterministic outputs matching creation timestamp ordering across all packages.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>