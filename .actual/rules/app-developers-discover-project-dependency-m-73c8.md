# Adopt @opencode-ai/ui/scroll-view for Managed Viewport Scrolling: Developers Discover Project Dependency Manifest Inspect

These rules are ALWAYS ACTIVE for all application views, session list panels, and command palette dialogs requiring scrollable viewport management.

### Rules

- **R-SCROLL-001** MUST: Developers MUST discover the project dependency manifest and inspect the repository resolution artifact to verify the exact locked version of @opencode-ai/ui/scroll-view before utilizing its interface.

### Verify

```bash
# Discover the repository static analysis and type verification script from the manifest and run it:
# (Example discovery and run sequence based on project configuration)
manifest_manager=$(if [ -f pnpm-lock.yaml ]; then echo "pnpm"; elif [ -f yarn.lock ]; then echo "yarn"; else echo "npm"; fi)
$manifest_manager run typecheck
$manifest_manager test
```

**Accept when:**
- Static analysis confirms all designated scrollable views and dialogs import and render @opencode-ai/ui/scroll-view without type errors.
- Component and view test suites pass with viewport scroll events successfully captured and handled.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static analysis checks and peer review.
</enforcement>