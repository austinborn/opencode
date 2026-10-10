# Prompt Context Module Adoption for Centralized Prompt State Management: Contextual Items Attachments Associated Prompt Registered

These rules are ALWAYS ACTIVE for all modules managing prompt input presentation, editing, history navigation, draft persistence, and session request submission.

### Rules

- **R-PROMPT-001** MUST: Contextual items and attachments associated with a prompt MUST be registered, retrieved, and dereferenced through the prompt context collection methods.

### Verify

```bash
# Discover and run the repository type validation script
# Discover and execute the repository unit and component test suites covering prompt input, context item management, and session forking components
```

**Accept when:**
- Static type analysis succeeds with zero diagnostic errors across all prompt-interacting modules.
- All automated unit and component tests validating prompt mutation, context item registration, and submission state pass cleanly.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification of static types and unit test suites across all pull requests is mandatory.
</enforcement>