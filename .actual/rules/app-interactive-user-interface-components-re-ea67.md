# Adoption of @dnd-kit/solid for User Interface Drag and Drop: Interactive User Interface Components Requiring Drag

These rules are ALWAYS ACTIVE for all interactive user interface components requiring drag-and-drop interactions, sortable element arrangements, or spatial reordering.

### Rules

- **R-DND-001** MUST: All interactive user interface components requiring drag-and-drop interactions, sortable element arrangements, or spatial reordering MUST use @dnd-kit/solid primitives rather than ad-hoc pointer listeners or alternative drag-and-drop libraries.

### Verify

```bash
# Discover workspace dependency manifest and verify dependencies
# Execute repository test suite through established task runner
# Run project static analysis and type checking workflow
```

**Accept when:**
- All UI components featuring drag-and-drop or sortable interactions import and use the approved drag-and-drop library primitives.
- Static analysis and type verification complete with zero diagnostics across all interactive layout modules.
- Automated unit and integration test suites validate that drag-and-drop reorder operations update reactive state correctly.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory and enforced by static analysis, import lint rules, and peer code review.
</enforcement>