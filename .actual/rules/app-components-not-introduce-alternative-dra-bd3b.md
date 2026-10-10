# Adoption of @dnd-kit/solid for Sortable Drag-and-Drop User Interface Interactions: Components Not Introduce Alternative Drag Drop

These rules are ALWAYS ACTIVE for all interactive user interface components requiring drag-and-drop reordering or sortable list management, including tab strips, side panel item arrangements, and project collection views.

### Rules

- **R-DND-001** MUST_NOT: Components MUST_NOT introduce alternative drag-and-drop libraries or imperative direct-DOM drag handlers for sortable collections within the user interface application.

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
Claude Code MUST NOT skip or defer verification. All verification steps, static analysis checks, and dependency validations are mandatory and must be successfully executed.
</enforcement>