# Prompt Context Module Adoption for Centralized Prompt State Management: Consumers Verify Project Resolution Artifact Lock

These rules are ALWAYS ACTIVE for modules managing prompt input presentation, editing, history navigation, draft persistence, and subsystems preparing prompt parts and contextual items for session request submission.

### Rules

- **R-PCM-001** MUST: Consumers MUST verify the project resolution artifact and lock definitions to establish exact resolved dependencies prior to implementing changes touching shared module state contracts.
- **R-PCM-002** MUST: Consumers implementing prompt interaction features must integrate with the prompt context provider and consume standard reactive accessors for prompt retrieval and mutation.
- **R-PCM-003** MUST: Context items, file attachments, and selection metadata must be registered through the dedicated context collection methods to maintain alignment with request building logic.

### Verify

```bash
# Discover and run the repository type validation script to verify module interface adherence and type compatibility across all prompt context consumers.
# Discover and execute the repository unit and component test suites covering prompt input, context item management, and session forking components.
```

**Accept when:**
- Static type analysis succeeds with zero diagnostic errors across all prompt-interacting modules.
- All automated unit and component tests validating prompt mutation, context item registration, and submission state pass cleanly.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>