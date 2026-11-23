import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "quill",
  name: "Quill",
  category: "Content & Comms",
  tagline: "A content model you define, on an API you host.",
  description: "A headless content platform for schemas, entries, assets, localisation, preview, publication, and delivery APIs.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/quill",
  nav: [
  {
    "label": "Content",
    "badge": "4"
  },
  {
    "label": "Models"
  },
  {
    "label": "Assets"
  },
  {
    "label": "Locales"
  },
  {
    "label": "Releases"
  }
],
  demoUsers: [
    { id: "demo-admin", name: "Morgan Lee", email: "morgan@northstar.example", role: "admin", label: "Workspace administrator" },
    { id: "demo-manager", name: "Avery Brooks", email: "avery@northstar.example", role: "content_admin", label: "Content administrator" },
    { id: "demo-operator", name: "Jordan Patel", email: "jordan@northstar.example", role: "editor", label: "Content editor" },
  ],
  ai: {
    name: "Quill knowledge guide",
    description: "Ask grounded questions about versioned content models, structured entries and references, asset metadata and transformations, or operating policy.",
    systemPrompt: "You are Quill's grounded knowledge guide. Answer only from authorised workspace context and approved knowledge. Cite the supporting record or policy. Never mutate data, approve a workflow, or make a regulated decision.",
    suggestedQuestions: ["Explain content model migration.","Explain atomic publication.","Explain locale fallback."],
  },
};
