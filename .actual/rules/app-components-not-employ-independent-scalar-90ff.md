# Adoption of solid-js/store for Structured Reactive State Management: Components Not Employ Independent Scalar Signals

These rules are ALWAYS ACTIVE for frontend state management across application components, shared context providers, and transient state stores, managing structured, nested, or collection-based reactive state.

### Rules

- **R-SOLID-001** MUST_NOT: Components MUST_NOT employ independent scalar signals to model co-dependent or deeply nested object hierarchies when updates require atomic synchronization.

### Verify

```bash
# Discover workspace scripts from dependency manifest and run type checker, linter, and test suites
pnpm check || npm run check || yarn check
pnpm lint || npm run lint || yarn lint
pnpm test || npm run test || yarn test
```

**Accept when:**
- Static type analysis passes with zero type errors across all modules importing solid-js/store.
- Lint verification confirms no prohibited store property destructuring patterns in reactive component bodies.
- All component, store, and context test suites execute successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via continuous integration static analysis, type checking, and peer review.
</enforcement>