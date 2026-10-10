# drizzle-orm/planetscale-serverless Database Driver Adoption: Schema Definitions Table Structures Used Drizzle

These rules are ALWAYS ACTIVE for backend core modules and data processing routines establishing relational database connections to PlanetScale datastores, schema definitions, database migrations, and structured persistence operations across core services.

### Rules

- **R-DRIZZLE-001** MUST: Schema definitions and table structures used by drizzle-orm/planetscale-serverless MUST use column definitions and schema primitives from drizzle-orm/mysql-core.

### Verify

```bash
# Discover and run the repository test suite to verify database client instantiation and query execution
# Execute the repository static analysis and type checking workflow to validate schema types and query parameters
# Run the project schema validation and migration dry-run script to confirm schema alignment with the target datastore
```

**Accept when:**
- All database client initializations successfully instantiate without configuration errors during test suite execution.
- Static type analysis passes with zero type errors across all schema and query definitions.
- Database migration and batch operation verifications execute successfully in the test environment.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by continuous integration pipelines and peer code review is mandatory.
</enforcement>