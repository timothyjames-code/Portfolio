import { notFound } from "next/navigation";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  caseStudy?: {
    title: string;
    sections: {
      heading: string;
      paragraphs?: string[];
      bullets?: string[];
      code?: string;
    }[];
  };
}

const projects: Project[] = [
  {
    slug: "enterprise-ai-modernization",
    title: "Enterprise AI Modernization",
    summary:
      "A production-style case management system with human-in-the-loop AI summarization, designed for governance, auditability, and regulated workflows.",
    technologies: ["Angular", "Spring Boot", "Java", "TypeScript", "H2"],
    githubUrl: "https://github.com/timothyjames-code/enterprise-ai-modernization",
    featured: true,
    caseStudy: {
      title: "Human-in-the-Loop AI Summarization: A Safety-First Design",
      sections: [
        {
          heading: "Context",
          paragraphs: [
            "In healthcare and other regulated domains, AI-generated content must be treated as advisory, not authoritative. The primary risk is not model accuracy alone, but unsafe integration—where AI output silently alters records without explicit human validation.",
            "This project explores how to safely introduce AI-generated summaries into a case management system while preserving auditability, correctness, and human accountability.",
            "The goal was not to build a chatbot, but to design a workflow that allows AI to assist humans without replacing decision-making.",
          ],
        },
        {
          heading: "Core design principle",
          paragraphs: [
            "AI output is never written directly to the official record. Instead, the system enforces a mandatory human review boundary between generation and persistence.",
          ],
        },
        {
          heading: "The draft-based workflow",
          bullets: [
            "Draft generation (advisory only): backend snapshots case state (notes, events, metadata), generates a summary draft, and records a `sourceUpdatedAt` timestamp. Drafts are immutable, stored separately, and clearly labeled as unapproved.",
            "Staleness detection: at review time, the system checks if the case changed since generation and marks the draft stale; acceptance is blocked by default to prevent approving outdated content.",
            "Explicit human review: reviewer must Accept (updates official summary), Reject (discard with reason code), or Regenerate (new draft from latest data). Stale drafts require explicit acknowledgment to accept.",
            "Immutable state transitions: drafts follow a strict lifecycle and are never modified after leaving DRAFT, preserving historical accuracy and preventing silent edits to AI output.",
          ],
          code: "case.updatedAt > draft.sourceUpdatedAt",
        },
        {
          heading: "Auditability by design",
          paragraphs: [
            "Every meaningful action emits a system event (draft created/accepted/rejected/expired, case updated). Events are stored separately from user-authored notes and rendered together in a unified activity timeline.",
          ],
          bullets: [
            "Clear separation of human input vs system behavior",
            "Structured audit payloads for reporting and compliance exports",
            "End-to-end traceability of AI lifecycle actions",
          ],
        },
        {
          heading: "API semantics as safety signals",
          paragraphs: [
            "The API communicates why an action is unsafe rather than masking errors, allowing the UI to guide the user instead of guessing.",
          ],
          bullets: [
            "409 Conflict — stale or expired drafts / state conflicts",
            "422 Unprocessable Entity — invalid state transitions",
            "404 Not Found — missing cases or drafts",
          ],
        },
        {
          heading: "Why this pattern matters in healthcare",
          paragraphs: [
            "This design aligns with real healthcare and regulated-system requirements: AI assists but does not decide, humans remain accountable, changes are traceable, failures are explicit (not silent), and historical context is preserved.",
          ],
          bullets: [
            "Prevents silent overwrites of the system of record",
            "Supports audit/compliance review with immutable history",
            "Encourages conscious reviewer responsibility (especially when data is stale)",
          ],
        },
        {
          heading: "Extensibility",
          paragraphs: [
            "Although the current implementation uses a stub generator, the architecture is intentionally provider-agnostic. A real LLM (e.g., AWS Bedrock) would plug in behind a backend-owned interface, inherit the same draft/review/audit guarantees, and remain invisible to the frontend.",
            "The workflow remains the product. The model is just a dependency.",
          ],
        },
        {
          heading: "Closing thought",
          paragraphs: [
            "The hardest part of integrating AI into real systems is not generation quality — it is system design. This project demonstrates how AI can be introduced incrementally, safely, and transparently into workflows where correctness and trust matter.",
          ],
        },
      ],
    },
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    summary: "This site—built to showcase my work, experience, and focus areas.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    githubUrl: "https://github.com/timothyjames-code/Portfolio",
  },
  {
    slug: "crypto-app",
    title: "Crypto App",
    summary: "A cryptocurrency tracking application with real-time data.",
    technologies: ["TypeScript", "React"],
    githubUrl: "https://github.com/timothyjames-code/Crypto-App",
  },
];

export function getProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectBySlugOrThrow(slug: string) {
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return project;
}

