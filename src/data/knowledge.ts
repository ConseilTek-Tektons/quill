export const knowledgeArticles = [
  {
    "id": "model-migration",
    "title": "Content model migration",
    "summary": "Model changes are versioned migrations with validation, preview, and rollback planning.",
    "content": "Destructive field changes require an explicit data migration before publication.",
    "tags": [
      "content",
      "model",
      "migration",
      "field"
    ]
  },
  {
    "id": "publication",
    "title": "Atomic publication",
    "summary": "A release pins exact entry and asset versions and validates every reference.",
    "content": "Publication updates the delivery projection atomically so readers never see a partial release.",
    "tags": [
      "content",
      "release",
      "publication"
    ]
  },
  {
    "id": "localisation",
    "title": "Locale fallback",
    "summary": "Each locale defines explicit fallback and completeness requirements by content type.",
    "content": "Publication reports missing required translations rather than silently substituting content.",
    "tags": [
      "locale",
      "translation",
      "fallback"
    ]
  }
];
