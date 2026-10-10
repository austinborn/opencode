# Prompt Context Module Adoption for Centralized Prompt State Management: Modules Outside Prompt Context Module Definition

These rules are ALWAYS ACTIVE for modules managing prompt input presentation, editing, history navigation, draft persistence, and subsystems preparing prompt parts and contextual items for session request submission.

### Rules

- **R-PCM-001** MUST_NOT: Modules outside of the prompt context module definition MUST NOT directly bypass the context interface to write uncoordinated prompt mutations across session views.

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