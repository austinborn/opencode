# Prompt Context Module Adoption for Centralized Prompt State Management: Modules That Inspect Initialize Mutate Restore

These rules are ALWAYS ACTIVE for all modules managing prompt input presentation, editing, history navigation, draft persistence, request preparation, and session forking/transfer.

### Rules

- **R-PCM-001** MUST: All modules that inspect, initialize, mutate, or restore prompt content, contextual attachments, or model selections MUST interface exclusively through the prompt context module.

### Verify

```bash
# Discover and run the repository type validation script
# Discover and execute the repository unit and component test suites covering prompt input, context item management, and session forking components
```

**Accept when:**
- Static type analysis succeeds with zero diagnostic errors across all prompt-interacting modules.
- All automated unit and component tests validating prompt mutation, context item registration, and submission state pass cleanly.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>