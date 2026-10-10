# Adoption of @dnd-kit/solid for Sortable Drag-and-Drop User Interface Interactions: Reorderable Tab Panel Components Isolate Sortable

These rules are ALWAYS ACTIVE for all interactive user interface components requiring drag-and-drop reordering or sortable list management, such as tab strips, side panel item arrangements, and project collection views.

### Rules

- **R-DND-001** SHOULD: Reorderable tab and panel components SHOULD isolate sortable item hooks and drag handles within dedicated item components rather than coupling item-level drag state directly to parent container logic.

### Verify

```bash
# Discover and run the project dependency validation scripts to confirm all drag-and-drop submodules resolve to compatible versions from the authoritative lock artifact.
# Discover and execute the repository static analysis and linting suites to ensure no prohibited drag libraries or imperative DOM drag listeners are present.
# Discover and execute component test suites to verify sortable item reordering and reactive state synchronization behaviors.
```

**Accept when:**
- Static checks pass with no unauthorized drag-and-drop dependencies or unmanaged imperative drag listeners detected.
- All components implementing sortable list or tab interactions use @dnd-kit/solid primitives and pass interaction test suites.
- Dependency inspection confirms installed package resolutions strictly align with repository lock artifacts.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>