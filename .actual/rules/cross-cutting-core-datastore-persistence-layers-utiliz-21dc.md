# drizzle-orm/planetscale-serverless Database Driver Adoption: Core Datastore Persistence Layers Utilize Drizzle

These rules are ALWAYS ACTIVE for all backend core modules, database schema definitions, migrations, and data processing routines interacting with PlanetScale data storage.

### Rules

- **R-DRIZZLE-001** MUST: Core datastore persistence layers MUST utilize drizzle-orm/planetscale-serverless as the relational query builder and database adapter interface when interacting with PlanetScale data storage.

### Verify

```bash
# Discover and run the repository test suite to verify database client instantiation and query execution
# Execute the repository static analysis and type checking workflow to validate schema types and query parameters
# Run the project schema validation and migration dry-run script to confirm schema alignment
```

**Accept when:**
- All database client initializations successfully instantiate without configuration errors during test suite execution.
- Static type analysis passes with zero type errors across all schema and query definitions.
- Database migration and batch operation verifications execute successfully in the test environment.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by continuous integration pipelines executing static type analysis and test suites, and peer code review.
</enforcement>