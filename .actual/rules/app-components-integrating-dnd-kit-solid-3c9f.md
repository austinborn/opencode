# Adoption of @dnd-kit/solid for User Interface Drag and Drop: Components Integrating Dnd Kit Solid Synchronize

These rules are ALWAYS ACTIVE for all interactive UI components requiring drag-and-drop, tab strip reordering, panel docking, or sortable collection behaviors within the presentation application package.

### Rules

- **R-DND-001** SHOULD: Components integrating @dnd-kit/solid SHOULD synchronize drag end and drop events directly into reactive stores or parent state handlers to preserve single-directional data flow.

### Verify

```bash
# Discover workspace dependency manifest and check registration of drag-and-drop libraries
# Execute repository test suite through the established task runner
# Run project static analysis and type checking workflow
```

**Accept when:**
- All UI components featuring drag-and-drop or sortable interactions import and use the approved drag-and-drop library primitives.
- Static analysis and type verification complete with zero diagnostics across all interactive layout modules.
- Automated unit and integration test suites validate that drag-and-drop reorder operations update reactive state correctly.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>