# drizzle-orm/planetscale-serverless Database Driver Adoption: Services Communicating Through Drizzle Orm Planetscale

These rules are ALWAYS ACTIVE for backend core modules, data processing routines, schema definitions, database migrations, and structured persistence operations establishing relational database connections to PlanetScale datastores.

### Rules

- **R-DRIZZLE-001** MUST_NOT: Services communicating through drizzle-orm/planetscale-serverless MUST NOT rely on persistent stateful TCP connection pools or transactions unsupported by the serverless HTTP transport layer.

### Verify

```bash
# Discover and run repository test suite to verify database client instantiation and query execution
# Execute repository static analysis and type checking workflow to validate schema types and query parameters
# Run project schema validation and migration dry-run script to confirm schema alignment
```

**Accept when:**
- All database client initializations successfully instantiate without configuration errors during test suite execution.
- Static type analysis passes with zero type errors across all schema and query definitions.
- Database migration and batch operation verifications execute successfully in the test environment.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration pipelines, static type analysis, and peer code reviews verify compliance.
</enforcement>