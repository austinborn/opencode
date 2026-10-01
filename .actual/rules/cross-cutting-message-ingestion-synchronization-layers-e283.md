# Standardize Chronological Ordering for Session Message Ingestion and Timelines: Message Ingestion Synchronization Layers Not Assume

These rules are ALWAYS ACTIVE for all session message ingestion, timeline rendering, sync hydration reducers, transcript exports, and history revert calculations across packages/app, packages/tui, packages/opencode, and packages/web.

### Rules

- **R-MSG-001** MUST_NOT: Message ingestion and synchronization layers MUST NOT assume or depend upon network transport arrival order for message sequencing.

### Verify

```bash
# Discover and run the project's test suite for session synchronization, timeline aggregation, and revert calculation
npx jest --testPathPattern="session|sync|timeline|revert"

# Run the repository linter and type-checker across packages
npm run lint
npm run typecheck
```

**Accept when:**
- Sync reducers and timeline views sort messages strictly by creation timestamp even when supplied out-of-order test events.
- Transcript exports and revert boundary calculations produce deterministic outputs matching creation timestamp ordering across all packages.
- A secondary deterministic tie-breaker (such as unique message ID) is incorporated when creation timestamps are equal.

<enforcement>
Claude Code MUST NOT skip or defer verification. Pull requests introducing array-append ordering or unsorted ingestion boundaries will fail automated tests or code review.
</enforcement>