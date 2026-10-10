# Adoption of @dnd-kit/solid for User Interface Drag and Drop: Components Not Manipulate Native Dom Elements

These rules are ALWAYS ACTIVE for all interactive UI components requiring drag-and-drop, tab strip reordering, panel docking, or sortable collection behaviors residing within the presentation application package managing reorderable visual elements.

### Rules

- **R-DND-001** MUST_NOT: Components MUST_NOT manipulate native DOM elements directly during drag sequences or bypass reactive event listeners provided by @dnd-kit/solid.

### Verify

```bash
# Discover the workspace dependency manifest and inspect declared dependencies to confirm registration of the drag-and-drop library packages.
# Execute the repository test suite through the established task runner to ensure interactive drag-and-drop component suites pass.
# Run the project static analysis and type checking workflow to verify proper interface typing across all drag-and-drop integrations.
```

**Accept when:**
- All UI components featuring drag-and-drop or sortable interactions import and use the approved drag-and-drop library primitives.
- Static analysis and type verification complete with zero diagnostics across all interactive layout modules.
- Automated unit and integration test suites validate that drag-and-drop reorder operations update reactive state correctly.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by static analysis, import lint rules, and peer code review.
</enforcement>