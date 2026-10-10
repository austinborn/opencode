# Adopt @opencode-ai/session-ui/v2/session-review-v2 for Session Review Interface Components: Before Implementing Updating Features Dependent Versioned

These rules are ALWAYS ACTIVE for all session review UI panels, diff inspection tabs, and review state management modules in the application layer.

### Rules

- **R-REV-001** MUST: Before implementing or updating features dependent on versioned dependencies, consumers MUST inspect the repository lock artifact to verify the exact resolved version.
- **R-REV-002** MUST: When creating new session review panels or diff views, import all UI components, icons, and state types directly from @opencode-ai/session-ui/v2/session-review-v2.
- **R-REV-003** MUST: Maintain review state in dedicated review state modules to cleanly decouple user interaction handling from view rendering.

### Verify

```bash
# Discover and execute the project dependency verification command
# Discover and execute the project static analysis and linting command to detect unapproved imports
# Discover and run the project test suite covering session review components
```

**Accept when:**
- All session review components and state modules successfully import from @opencode-ai/session-ui/v2/session-review-v2 with zero type or lint errors.
- No custom or duplicate review diff widgets exist outside the approved workspace package boundary.
- All automated verification tests pass without regression.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>