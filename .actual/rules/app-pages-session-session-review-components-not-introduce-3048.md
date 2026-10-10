# Adopt @opencode-ai/session-ui/v2/session-review-v2 for Session Review Interface Components: Session Review Components Not Introduce Hoc

These rules are ALWAYS ACTIVE for all session review UI panels, diff inspection tabs, and review state management modules in the application layer.

### Rules

- **R-SESSION-001** MUST_NOT: Session review components MUST NOT introduce ad-hoc diff review presentation widgets that bypass the shared internal review module.

### Verify

```bash
# Discover and execute project dependency verification command from manifest
# Discover and execute project static analysis and linting command to detect unapproved imports in session review modules
# Discover and run project test suite covering session review components
```

**Accept when:**
- All session review components and state modules successfully import from @opencode-ai/session-ui/v2/session-review-v2 with zero type or lint errors.
- No custom or duplicate review diff widgets exist outside the approved workspace package boundary.
- All automated verification tests pass without regression.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>