# Quill security model

## Controls in the reference

- Server-side OIDC sessions and SAML broker guidance
- Configurable RBAC enforced in route handlers
- PostgreSQL transactions for records, workflow events, and audit events
- Private object references with SHA-256 integrity metadata
- Rate limiting and storage-disabled AI requests
- Secret references supplied from cloud secret stores
- CodeQL, dependency audit, container build, database migration, and infrastructure validation in CI

## Production responsibilities

Complete threat modelling, data classification, tenant-isolation testing, backup recovery, key rotation, penetration testing, privacy review, and workload-specific compliance validation before production. Quill does not include a proprietary CDN or stock-asset marketplace. Use your cloud CDN and licensed media sources through explicit integrations.

Report vulnerabilities privately through GitHub security advisories or email security details to support@conseiltek.com. Do not open a public issue for an unpatched vulnerability.
