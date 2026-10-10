# Prompt Context Module Adoption for Centralized Prompt State Management: Consumer Components Listening Reactive Updates Prompt

These rules are ALWAYS ACTIVE for modules managing prompt input presentation, editing, history navigation, draft persistence, and subsystems preparing prompt parts and contextual items for session request submission.

### Rules

- **R-PCM-001** SHOULD: Consumer components listening for reactive updates to prompt state SHOULD subscribe to the prompt current accessor within tracking boundaries to synchronize dependent interface structures.

### Verify

```bash
# Discover and run the repository type validation script to verify module interface adherence and type compatibility
npm run check || yarn check || pnpm check

# Discover and execute the repository unit and component test suites covering prompt input and context management
npm test || yarn test || pnpm test
```

**Accept when:**
- Static type analysis succeeds with zero diagnostic errors across all prompt-interacting modules.
- All automated unit and component tests validating prompt mutation, context item registration, and submission state pass cleanly.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated CI pipelines, peer architecture/code reviews, and blocking pull requests that bypass the prompt context module.
</enforcement>