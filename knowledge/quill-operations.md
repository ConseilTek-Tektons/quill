# Quill operations knowledge

## Content model migration

Model changes are versioned migrations with validation, preview, and rollback planning.

Destructive field changes require an explicit data migration before publication.

## Atomic publication

A release pins exact entry and asset versions and validates every reference.

Publication updates the delivery projection atomically so readers never see a partial release.

## Locale fallback

Each locale defines explicit fallback and completeness requirements by content type.

Publication reports missing required translations rather than silently substituting content.

## Product boundary

Quill does not include a proprietary CDN or stock-asset marketplace. Use your cloud CDN and licensed media sources through explicit integrations.
