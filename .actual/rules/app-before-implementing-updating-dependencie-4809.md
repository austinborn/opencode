# Adoption of @dnd-kit/solid for Sortable Drag-and-Drop User Interface Interactions: Before Implementing Updating Dependencies Developers Discover

These rules are ALWAYS ACTIVE for all interactive user interface components requiring drag-and-drop reordering or sortable list management, such as tab strips, side panel item arrangements, and project collection views.

### Rules

- **R-DND-001** MUST: Before implementing or updating dependencies, developers MUST discover the dependency manifest and authoritative resolution lock artifact in the repository to determine the exact locked version of @dnd-kit/solid.

### Verify

```bash
# Discover and run project dependency validation scripts
# Discover and execute repository static analysis and linting suites
# Discover and execute component test suites
```

**Accept when:**
- Static checks pass with no unauthorized drag-and-drop dependencies or unmanaged imperative drag listeners detected.
- All components implementing sortable list or tab interactions use @dnd-kit/solid primitives and pass interaction test suites.
- Dependency inspection confirms installed package resolutions strictly align with repository lock artifacts.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification via static checks, dependency validation, and test suites is mandatory.
</enforcement>