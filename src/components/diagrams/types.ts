export const diagramIds = ["erp", "automation", "onboarding", "cicd"] as const;
export type DiagramId = (typeof diagramIds)[number];
