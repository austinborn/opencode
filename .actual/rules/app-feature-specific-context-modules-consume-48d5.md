# Adoption of @opencode-ai/ui/context for Application State and Context Management: Feature Specific Context Modules Consume Domain

These rules are ALWAYS ACTIVE for frontend state modules, context providers, and UI integration points requiring shared access to client sessions, permissions, and layout definitions.

### Rules

- **R-OPENC-001** SHOULD: Feature-specific context modules SHOULD consume domain-focused context namespaces when integrating specialized UI capabilities.

### Verify

```bash
# Discover and run project static analysis, linting, and automated test suites
# (Commands to be discovered from package manifest scripts)
```

**Accept when:**
- All frontend context definitions import and utilize the designated context module without unresolved bindings.
- Static analysis and test suites execute with zero failures across the frontend package.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks and peer code review.
</enforcement>