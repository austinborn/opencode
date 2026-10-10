# Adoption of solid-js/store for Structured Reactive State Management: Application Use Solid Store Standard Reactive

These rules are ALWAYS ACTIVE for all frontend state management across application components, shared context providers, and transient state stores managing structured, nested, or collection-based reactive state.

### Rules

- **R-SOLID-001** MUST: The application MUST use solid-js/store as the standard reactive state management module for all multi-property, collection-based, or deeply nested state structures across application components and context providers.
- **R-SOLID-002** MUST: Initialize component and context state using createStore, keeping mutation operations localized to dedicated actions or setters to preserve unidirectional data flow.
- **R-SOLID-003** SHOULD: When updating collections or deep trees, prefer path syntax or produce utilities from solid-js/store to preserve object identity for unchanged branches.
- **R-SOLID-004** MUST: Avoid destructuring store properties directly within component scopes without reactivity-preserving primitives to prevent unintended loss of reactive tracking.
- **R-SOLID-005** SHOULD: Restrict store usage to nested structures, collections, and multi-field domain state, utilizing simple scalar signals for independent scalar values.

### Verify

```bash
# Discover the workspace script configuration from the dependency manifest and execute the static type checker across application packages.
# Discover and run the project code verification and lint suite to confirm compliant usage of solid-js/store across UI components and contexts.
# Discover the project test runner script and execute test suites covering stores, contexts, and reactive components.
```

**Accept when:**
- Static type analysis passes with zero type errors across all modules importing solid-js/store.
- Lint verification confirms no prohibited store property destructuring patterns in reactive component bodies.
- All component, store, and context test suites execute successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration static analysis, type checking verification, and peer code review enforce compliance, with violations failing CI checks.
</enforcement>