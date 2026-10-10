# drizzle-orm/planetscale-serverless Database Driver Adoption: Relational Query Operations Batch Record Persistence

These rules are ALWAYS ACTIVE for backend core modules and data processing routines establishing relational database connections to PlanetScale datastores.

### Rules

- **R-DRIZZLE-001** SHOULD: Relational query operations and batch record persistence SHOULD execute through drizzle-orm/planetscale-serverless query methods rather than raw unvalidated SQL strings.

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
Claude Code MUST NOT skip or defer verification.
</enforcement>