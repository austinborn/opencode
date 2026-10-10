# Adoption of solid-js/store for Structured Reactive State Management: Engineers Verify Resolved Package Version Solid

These rules are ALWAYS ACTIVE for frontend state management across application components, shared context providers, and transient state stores, managing structured, nested, or collection-based reactive state.

### Rules

- **R-SOLID-001** MUST: Engineers MUST verify the resolved package version of solid-js/store against the repository lock or resolution artifact prior to implementing store interactions, confirming API availability in official documentation.

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
Claude Code MUST NOT skip or defer verification.
</enforcement>