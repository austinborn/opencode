# Adopt @opencode-ai/session-ui/v2/session-review-v2 for Session Review Interface Components: Session Review User Interface Panels Tabs

These rules are ALWAYS ACTIVE for all session review user interface panels, diff inspection tabs, and review state management modules in the application layer.

### Rules

- **R-SESSION-001** MUST: All session review user interface panels, review tabs, and review state stores MUST import and consume review UI primitives and contracts from @opencode-ai/session-ui/v2/session-review-v2 rather than reimplementing review components locally.

### Verify

```bash
# Discover and execute the project dependency verification command from the manifest
# Discover and execute the project static analysis and linting command to detect unapproved imports in session review modules
# Discover and run the project test suite covering session review components
```

**Accept when:**
- All session review components and state modules successfully import from @opencode-ai/session-ui/v2/session-review-v2 with zero type or lint errors.
- No custom or duplicate review diff widgets exist outside the approved workspace package boundary.
- All automated verification tests pass without regression.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis checks and peer code reviews verify import paths in session UI modules during pull request validation.
</enforcement>