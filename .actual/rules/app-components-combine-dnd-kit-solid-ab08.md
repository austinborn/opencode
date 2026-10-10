# Adoption of @dnd-kit/solid for Sortable Drag-and-Drop User Interface Interactions: Components Combine Dnd Kit Solid Reactive

These rules are ALWAYS ACTIVE for all interactive user interface components requiring drag-and-drop reordering or sortable list management (such as tab strips, side panel item arrangements, and project collection views).

### Rules

- **R-DND-001** MAY: Components MAY combine @dnd-kit/solid with reactive observer primitives when dynamic dimension tracking or responsive container reflow is required during drag operations.
- **R-DND-002** MANDATORY: Wrap sortable items in designated sortable context providers and attach drag event handlers at container boundaries to isolate reordering logic.
- **R-DND-003** MANDATORY: Ensure unique, stable identifier keys are supplied to sortable item hooks to prevent reactive reconciliation artifacts during reordering.
- **R-DND-004** MANDATORY (LOCK-VERSION GROUNDING): Before writing code that uses a versioned library, execute in order: (1) Find dependency manifest; (2) Identify build tool; (3) Inspect repository lock/resolution artifact; (4) Look up official docs for that exact version; (5) Confirm every API/class/function exists in that version; (6) Re-run steps 3-5 per dependency at point of use.
- **R-DND-005** EXCEPTION (EXC-20-001): Native operating system file drag-and-drop transfer is required rather than internal component reordering.

### Verify

```bash
# Discover and run project dependency validation scripts to confirm drag-and-drop submodules resolve correctly.
# Discover and execute repository static analysis and linting suites to ensure no prohibited drag libraries or imperative DOM drag listeners are present.
# Discover and execute component test suites to verify sortable item reordering and reactive state synchronization.
```

**Accept when:**
- Static checks pass with no unauthorized drag-and-drop dependencies or unmanaged imperative drag listeners detected.
- All components implementing sortable list or tab interactions use @dnd-kit/solid primitives and pass interaction test suites.
- Dependency inspection confirms installed package resolutions strictly align with repository lock artifacts.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated CI checks and peer code review.
</enforcement>