export type ProjectCategory = "webapp" | "landing";

export type ProjectStatus = "portfolio" | "pilot" | "completed";

export interface Project {
  id: number;
  status: ProjectStatus;
  title: string;
  category: ProjectCategory;
  tag: string;
  description: string;
  image: string;
  /** URL-friendly slug for routing (e.g., "fiadoapp") */
  slug: string;
  /** Technologies used in the project */
  techStack: string[];
  /** Link to live demo (optional) */
  liveUrl?: string;
  /** Link to source repository (optional) */
  repoUrl?: string;
  /** Your role in the project */
  role: string;
  /** Problem description / challenges faced */
  challenges: string;
  /** Solution description */
  solution: string;
  /** Real-world backstory context (business-owner tone) */
  context?: string;
  /** Key results / achievements */
  results: string[];
  /** Gallery image paths (empty if no gallery) */
  gallery: string[];
}