# drizzle-orm/planetscale-serverless Database Driver Adoption: Before Implementing Updating Database Client Dependencies

These rules are ALWAYS ACTIVE for backend persistence logic, schema definitions, database migrations, and database client dependencies across core service packages.

### Rules

- **R-DB-001** MUST: Before implementing or updating database client dependencies, developers MUST inspect the repository lock artifact to resolve the exact locked version of drizzle-orm/planetscale-serverless and verify API compatibility against official documentation.

### Verify

```bash
# Discover and run the repository test suite to verify database client instantiation and query execution against configured environments.
# Execute the repository static analysis and type checking workflow to validate schema types and query parameters.
# Run the project schema validation and migration dry-run script to confirm schema alignment with the target datastore.
```

**Accept when:**
- All database client initializations successfully instantiate without configuration errors during test suite execution.
- Static type analysis passes with zero type errors across all schema and query definitions.
- Database migration and batch operation verifications execute successfully in the test environment.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>