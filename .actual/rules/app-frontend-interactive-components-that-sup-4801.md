# Adoption of @dnd-kit/solid for Sortable Drag-and-Drop User Interface Interactions: Frontend Interactive Components That Support Drag

These rules are ALWAYS ACTIVE for all interactive user interface components requiring drag-and-drop reordering or sortable list management, such as tab strips, side panel item arrangements, and project collection views.

### Rules

- **R-DND-001** MUST: Frontend interactive components that support drag-and-drop reordering MUST standardize on @dnd-kit/solid and its sortable submodule for drag-and-drop state management.
- **R-DND-002** MAY: Native operating system file drag-and-drop transfer is permitted as an exception (EXC-20-001) when required rather than internal component reordering.

### Verify

```bash
# Discover and run project dependency validation scripts to confirm compatibility
# Discover and execute static analysis and linting suites to ensure no prohibited drag libraries or imperative DOM drag listeners are present
# Discover and execute component test suites to verify sortable item reordering and reactive state synchronization behaviors
```

**Accept when:**
- Static checks pass with no unauthorized drag-and-drop dependencies or unmanaged imperative drag listeners detected.
- All components implementing sortable list or tab interactions use @dnd-kit/solid primitives and pass interaction test suites.
- Dependency inspection confirms installed package resolutions strictly align with repository lock artifacts.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks and peer code reviews validate static code analysis, dependency compliance, and correct use of standard @dnd-kit/solid primitives.
</enforcement>