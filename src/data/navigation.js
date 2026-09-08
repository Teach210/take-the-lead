const baseUrl = import.meta.env.BASE_URL;

export function sitePath(path = "") {
  return `${baseUrl}${path}`;
}

export const navigationItems = [
  { label: "Home", href: sitePath() },
  { label: "Presentations", href: sitePath("presentations/") },
  { label: "Labs", href: sitePath("labs/") },
  { label: "Team Bio", href: sitePath("team-bio/") },
  { label: "References", href: sitePath("references/") },
  { label: "Glossary", href: sitePath("glossary/") }
];
