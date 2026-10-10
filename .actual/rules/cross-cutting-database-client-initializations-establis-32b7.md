# drizzle-orm/planetscale-serverless Database Driver Adoption: Database Client Initializations Establish Connections Supplying

These rules are ALWAYS ACTIVE for all backend persistence logic, core service packages, schema definitions, database migrations, and structured persistence operations establishing connections to PlanetScale datastores.

### Rules

- **R-DB-001** MUST: Database client initializations MUST establish connections by supplying connection credentials to the Client constructor from @planetscale/database before passing the client instance to drizzle-orm/planetscale-serverless.

### Verify

```bash
# Discover and run the repository test suite to verify database client instantiation and query execution
# Execute repository static analysis and type checking workflow to validate schema types and query parameters
# Run project schema validation and migration dry-run script to confirm schema alignment with the target datastore
```

**Accept when:**
- All database client initializations successfully instantiate without configuration errors during test suite execution.
- Static type analysis passes with zero type errors across all schema and query definitions.
- Database migration and batch operation verifications execute successfully in the test environment.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration pipelines, peer code reviews, and blocking of unapproved database driver configurations are strictly enforced.
</enforcement>