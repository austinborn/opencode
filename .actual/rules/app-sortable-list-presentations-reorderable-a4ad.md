# Adoption of @dnd-kit/solid for User Interface Drag and Drop: Sortable List Presentations Reorderable Collections Use

These rules are ALWAYS ACTIVE for all interactive UI components requiring drag-and-drop, tab strip reordering, panel docking, or sortable collection behaviors within the presentation application package.

### Rules

- **R-DND-001** MUST: Sortable list presentations and reorderable collections MUST use @dnd-kit/solid sortable primitives to manage spatial indexing and drag event lifecycles.

### Verify

```bash
# Discover workspace dependency manifest and check for drag-and-drop library packages
# Run the repository test suite via task runner
npm test
# Run static analysis and type checking
npm run check
```

**Accept when:**
- All UI components featuring drag-and-drop or sortable interactions import and use the approved drag-and-drop library primitives.
- Static analysis and type verification complete with zero diagnostics across all interactive layout modules.
- Automated unit and integration test suites validate that drag-and-drop reorder operations update reactive state correctly.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration checks fail when unapproved drag-and-drop libraries or raw pointer manipulation workarounds are introduced. Code review blocks merging until non-compliant implementations are refactored to use standard library primitives.
</enforcement>