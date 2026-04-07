type KnowledgeEntry = {
  id: string;
  title: string;
  keywords: string[];
  content: string;
};

export const contactEmail = "contact@dataverseindonesia.com";

export const chatbotKnowledge: KnowledgeEntry[] = [
  {
    id: "company-overview",
    title: "Company overview",
    keywords: ["gdi", "company", "about", "overview", "dataverse", "indonesia"],
    content:
      "PT Global Dataverse Indonesia works in two connected ways: it helps organizations build stronger digital systems, and it works with founders to turn promising ideas into operational ventures.",
  },
  {
    id: "venture-building",
    title: "Venture building",
    keywords: ["venture", "startup", "founder", "equity", "partnership", "cofounder"],
    content:
      "GDI selectively partners with founders who have strong ideas but need technical execution. The company sometimes collaborates through structured partnership models instead of only vendor-style delivery.",
  },
  {
    id: "digital-systems",
    title: "Digital systems",
    keywords: ["systems", "digital", "operations", "workflow", "software", "custom"],
    content:
      "For organizations, GDI builds digital systems, internal platforms, and custom software that improve operational flow and hold up in real use.",
  },
  {
    id: "services",
    title: "Service areas",
    keywords: ["services", "products", "offerings", "areas", "development", "research", "ai"],
    content:
      "Core areas highlighted on the site are digital systems, custom development, venture execution, and deeper research or exploration work when the problem needs more than a standard implementation.",
  },
  {
    id: "technology",
    title: "Technology stack",
    keywords: ["technology", "stack", "openai", "anthropic", "aws", "azure", "frappe", "erpnext"],
    content:
      "The public site highlights Frappe, ERPNext, OpenAI, Anthropic, Azure, AWS, and networking vendors such as Huawei, TP-Link, Ruijie, SonicWall, Sangfor, and Omada as technologies GDI works with.",
  },
  {
    id: "values",
    title: "Operating values",
    keywords: ["values", "beliefs", "philosophy", "human", "clarity", "execution"],
    content:
      "GDI emphasizes real-world execution, clarity over complexity, and technology that strengthens human capability instead of removing people from the process.",
  },
  {
    id: "social-proof",
    title: "Partners and collaborations",
    keywords: ["clients", "partners", "collaborations", "telkom", "komdigi", "jsc", "mulawarman"],
    content:
      "The site lists collaborations and partners including Telkom University, AILO, Jakarta Smart City, Komdigi, Politeknik Negeri Jakarta, Mulawarman University, and IAIN Kediri.",
  },
  {
    id: "contact",
    title: "Contact details",
    keywords: ["contact", "email", "address", "location", "bandung", "reach"],
    content:
      "Visitors can reach GDI through contact@dataverseindonesia.com. The office address listed on the site is Jalan Banda No. 30, Graha Pos Indonesia, 2nd Floor Block C, Bandung, West Java 40115, Indonesia.",
  },
];

export function searchKnowledge(query: string, limit = 4) {
  const terms = query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);

  return chatbotKnowledge
    .map((entry) => {
      const haystack = `${entry.title} ${entry.keywords.join(" ")} ${entry.content}`.toLowerCase();
      const score = terms.reduce((total, term) => {
        if (entry.keywords.includes(term)) {
          return total + 3;
        }

        if (haystack.includes(term)) {
          return total + 1;
        }

        return total;
      }, 0);

      return {
        ...entry,
        score,
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function formatKnowledgeContext(entries: Array<{ title: string; content: string }>) {
  if (!entries.length) {
    return "No highly relevant knowledge matched the request.";
  }

  return entries.map((entry) => `- ${entry.title}: ${entry.content}`).join("\n");
}
