# Prompt Context Module Adoption for Centralized Prompt State Management: Components Utilities Mutating Prompt Text Cursor

These rules are ALWAYS ACTIVE for modules managing prompt input presentation, editing, history navigation, draft persistence, session request preparation, and modal interfaces restoring, forking, or transferring active prompt buffers.

### Rules

- **R-PROMPT-001** MUST: Components and utilities mutating prompt text or cursor positioning MUST invoke the prompt setter interface with explicit content structures and positional offsets rather than maintaining duplicate local text buffers.

### Verify

```bash
# Discover and run repository type validation and unit test suites covering prompt input, context item management, and session forking components.
# (Exact tool names and commands must be discovered from the repository manifest)
```

**Accept when:**
- Static type analysis succeeds with zero diagnostic errors across all prompt-interacting modules.
- All automated unit and component tests validating prompt mutation, context item registration, and submission state pass cleanly.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>