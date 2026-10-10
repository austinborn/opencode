# Adoption of @dnd-kit/solid for User Interface Drag and Drop: Engineers Discover Repository Dependency Manifest Inspect

These rules are ALWAYS ACTIVE for all interactive UI components requiring drag-and-drop, tab strip reordering, panel docking, or sortable collection behaviors within the presentation application package.

### Rules

- **R-DND-001** MUST: Engineers MUST discover the repository dependency manifest and inspect the authoritative lock artifact to verify the exact resolved version of @dnd-kit/solid before writing or modifying drag-and-drop integration code.

### Verify

```bash
# Discover workspace dependency manifest and inspect declared dependencies
# (Tool, manifest name, and package manager must be derived from the project repository)

# Execute repository test suite to ensure interactive drag-and-drop component suites pass
# Run project static analysis and type checking workflow
```

**Accept when:**
- All UI components featuring drag-and-drop or sortable interactions import and use the approved drag-and-drop library primitives.
- Static analysis and type verification complete with zero diagnostics across all interactive layout modules.
- Automated unit and integration test suites validate that drag-and-drop reorder operations update reactive state correctly.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via static analysis, import lint rules, and peer code review.
</enforcement>