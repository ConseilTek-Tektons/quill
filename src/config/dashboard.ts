import type { DashboardConfig } from "./dashboard-schema";
export type { DashboardItem } from "./dashboard-schema";

export const dashboard: DashboardConfig = {
  eyebrow: "CONTENT & COMMS · OPERATIONS",
  heading: "Quill keeps the operating record visible, governed, and ready for action.",
  summary: "Versioned content models, Structured entries and references, Asset metadata and transformations are backed by PostgreSQL records and explicit workflow history.",
  primaryAction: "Create entry", secondaryAction: "Open workspace",
  secondaryNotice: "Workspace opened with current identity, role, and record filters.",
  managePermission: "entry.manage", metricLabel: "Quill operating health",
  metrics: [{"label":"Entries","value":"18,420","change":"312 changed","context":"current workspace","tone":"positive","progress":"82%"},{"label":"Published","value":"96.8%","change":"valid","context":"operational window","tone":"positive","progress":"76%"},{"label":"Locales","value":"14","change":"92% complete","context":"current workspace","tone":"warning","progress":"91%"},{"label":"Delivery p95","value":"48ms","change":"30 days","context":"operational window","tone":"positive","progress":"96%"}],
  trend: [46,52,49,64,71,78,86].map((value, index) => ({ label: String(index), value })),
  listTitle: "Active content entrys", workspaceAction: "Open governed workspace",
  items: [{"id":1,"primary":"QUI-842 · Homepage hero","secondary":"Versioned content models","tertiary":"Updated today","status":"Draft","accent":"violet"},{"id":2,"primary":"QUI-831 · Product capability page","secondary":"Structured entries and references","tertiary":"Evidence current","status":"Review","accent":"lime"},{"id":3,"primary":"QUI-820 · Customer story","secondary":"Asset metadata and transformations","tertiary":"Updated today","status":"Scheduled","accent":"cyan"},{"id":4,"primary":"QUI-809 · Privacy notice","secondary":"Locale and fallback workflow","tertiary":"Evidence current","status":"Published","accent":"lime"}],
  sideTitle: "Control posture", sideSubtitle: "Derived from workflow and evidence",
  sideItems: [
    { title: "Versioned content models", detail: "Policy and evidence current", value: "Healthy" },
    { title: "Structured entries and references", detail: "A small review queue needs attention", value: "Review", warning: true },
    { title: "Asset metadata and transformations", detail: "Within the configured operating target", value: "On track" },
  ],
  insightTitle: "Structured entries and references has the clearest next action.",
  insightBody: "The recommendation is grounded in current entry records, workflow events, and approved operating policy. It remains advisory until an authorised user acts.",
  insightNotice: "Recommendation opened with its supporting records and policy citations.",
  itemNoun: "Content entry", modalEyebrow: "NEW CONTENT ENTRY", modalTitle: "Add content entry",
  formFields: [
    { name: "title", label: "Content entry title", placeholder: "Homepage hero" },
    { name: "owner", label: "Owner", placeholder: "Content editor" },
    { name: "reference", label: "Reference", placeholder: "QUI-843" },
  ],
  defaultSecondary: "Versioned content models", defaultTertiary: "Created now", newItemStatus: "Draft",
  policyPreview: "The entry inherits workspace visibility, requires entry.manage, and records its creator and changes in the audit trail.",
  submitLabel: "Create entry",
};
