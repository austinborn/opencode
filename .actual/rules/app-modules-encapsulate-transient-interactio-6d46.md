# Adoption of solid-js/store for Structured Reactive State Management: Modules Encapsulate Transient Interactions Isolated Component

These rules are ALWAYS ACTIVE for frontend state management across application components, shared context providers, and transient state stores, as well as management of structured, nested, or collection-based reactive state.

### Rules

- **R-SS-001** MAY: Modules MAY encapsulate transient UI interactions and isolated component-local state within dedicated custom store hooks that expose minimal mutation boundaries.
- **R-SS-002** MANDATORY: Initialize component and context state using createStore, keeping mutation operations localized to dedicated actions or setters to preserve unidirectional data flow.
- **R-SS-003** MANDATORY: When updating collections or deep trees, prefer path syntax or produce utilities from solid-js/store to preserve object identity for unchanged branches.
- **R-SS-004** MANDATORY: Avoid unintended loss of reactive tracking caused by destructuring store properties within component scopes; mandate direct store property access or unwrapping helpers.
- **R-SS-005** MANDATORY: Restrict store usage to nested structures, collections, and multi-field domain state rather than simple scalar values where basic signals suffice.

### Verify

```bash
# Discover and execute the static type checker across application packages via the workspace script configuration
npm run typecheck

# Discover and run the project code verification and lint suite to confirm compliant usage
npm run lint

# Discover the project test runner script and execute test suites covering stores, contexts, and reactive components
npm test
```

**Accept when:**
- Static type analysis passes with zero type errors across all modules importing solid-js/store.
- Lint verification confirms no prohibited store property destructuring patterns in reactive component bodies.
- All component, store, and context test suites execute successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by continuous integration static analysis, type checking verification scripts, and peer code review inspecting reactive state declarations and mutation patterns. Pull requests containing untracked destructuring or non-standard state implementations fail continuous integration checks and require remediation.
</enforcement>