# Effect Functional Effect System Adoption for CLI Command Handlers: Command Handlers Delegate Runtime Environment Initialization

These rules are ALWAYS ACTIVE for command line operations interacting with background daemon services, including command handlers coordinating daemon service lifecycles, service status inquiries, and system process state, as well as submodules within the CLI interface layer invoking background daemon services.

### Rules

- **R-EFF-001** SHOULD: Command handlers SHOULD delegate runtime environment initialization and failure handling to the shared runtime framework layer.
- **R-EFF-002** MANDATORY: The consumer MUST discover tool names, file names, commands, package managers, and version numbers from the project repository.
- **R-EFF-003** MANDATORY: Before writing code that uses a versioned library, execute in order: (1) Find dependency manifest, (2) Identify build tool, (3) Inspect repository lock or resolution artifact for exact resolved version, (4) Look up official documentation/changelog for that exact version without relying solely on training-data recall, (5) Confirm every API, class, or function exists in that exact version, (6) Re-run steps 3-5 per dependency at point of use.
- **R-EFF-004** SHOULD: Command handlers should define their primary operation as an Effect returning the expected execution result, delegating actual runtime evaluation to the centralized runtime entry point.
- **R-EFF-005** MANDATORY: When bridging standard system events or foreign asynchronous interfaces, wrap the operations in Effect adapters to preserve structured interruption and error channels.

### Verify

```bash
# Discover and run the project type-checking task to confirm Effect types and service yields resolve without compilation errors.
# Discover and execute the project test suite covering CLI command handlers.
# Discover and run the project static analysis lint script.
```

**Accept when:**
- All CLI command handlers compile successfully against the resolved Effect library types without type errors.
- Service command test suites pass, demonstrating proper lifecycle transitions during daemon operations.
- Static verification confirms zero violations regarding bypassed effect boundaries in command modules.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests must pass static review gates, type checks, and automated unit/integration test runs exercising command handlers and daemon service mocks.
</enforcement>