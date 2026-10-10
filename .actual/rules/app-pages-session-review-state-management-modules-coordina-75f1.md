# Adopt @opencode-ai/session-ui/v2/session-review-v2 for Session Review Interface Components: Review State Management Modules Coordinating Active

These rules are ALWAYS ACTIVE for session review UI panels, diff inspection tabs, and review state management modules in the application layer.

### Rules

- **R-REV-001** MUST: Review state management modules coordinating active diff selections and file review statuses MUST bind directly to state models defined in @opencode-ai/session-ui/v2/session-review-v2.

### Verify

```bash
# Discover and execute the project dependency verification command from the manifest
# Discover and execute the project static analysis and linting command to detect unapproved imports
# Discover and execute the project test suite covering session review components
```

**Accept when:**
- All session review components and state modules successfully import from @opencode-ai/session-ui/v2/session-review-v2 with zero type or lint errors.
- No custom or duplicate review diff widgets exist outside the approved workspace package boundary.
- All automated verification tests pass without regression.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>