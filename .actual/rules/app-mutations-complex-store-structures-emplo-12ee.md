# Adoption of solid-js/store for Structured Reactive State Management: Mutations Complex Store Structures Employ Produce

These rules are ALWAYS ACTIVE for frontend state management across application components, shared context providers, transient state stores, and management of structured, nested, or collection-based reactive state.

### Rules

- **R-STORE-001** SHOULD: Mutations to complex store structures SHOULD employ produce or reconcile store mutation primitives to prevent manual object cloning and preserve fine-grained reactivity.
- **R-STORE-002** MANDATORY: Initialize component and context state using createStore, keeping mutation operations localized to dedicated actions or setters to preserve unidirectional data flow.
- **R-STORE-003** MANDATORY: When updating collections or deep trees, prefer path syntax or produce utilities from solid-js/store to preserve object identity for unchanged branches.

### Verify

```bash
# Discover workspace script configuration from the dependency manifest and execute static type checking
# Discover and run project code verification and lint suite
# Discover project test runner script and execute test suites covering stores, contexts, and reactive components
```

**Accept when:**
- Static type analysis passes with zero type errors across all modules importing solid-js/store.
- Lint verification confirms no prohibited store property destructuring patterns in reactive component bodies.
- All component, store, and context test suites execute successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via continuous integration static analysis, type checking, and peer code review.
</enforcement>