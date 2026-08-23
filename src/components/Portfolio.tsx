import React from "react";
import { ExternalLink, CheckCircle2, TrendingUp, Layers, Award, Terminal } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Hopping Cars",
      category: "MSME Local SEO & Multi-Service Storefront",
      liveUrl: "https://hoppingcars.com/car-painting-begur-bangalore.html",
      tag: "Live Client Success",
      description:
        "End-to-end digital revenue transformation for a premier multi-brand car service & painting workshop in Begur, Bangalore. Engineered localized landing pages ranking top on Google Search for high-intent automotive keywords.",
      metrics: [
        { label: "Local Keywords Ranked", value: "#1 on Google" },
        { label: "Monthly Organic Leads", value: "300+ Calls/Chats" },
        { label: "Page Speed Score", value: "98/100 Mobile" },
      ],
      techStack: ["Next.js", "Tailwind CSS", "Local GBP Schema", "WhatsApp Direct Funnel"],
      highlights: [
        "Hyper-local keyword clusters targeting Begur Road & South Bangalore",
        "Direct-to-WhatsApp booking CTA with automated service intent capture",
        "Google Rich Snippets for automotive repairs & customer reviews",
      ],
    },
    {
      title: "KaizenCodes",
      category: "Engineering Intelligence & Learning Platform",
      liveUrl: "https://dev.kaizencodes.com",
      tag: "Autonomous SaaS",
      description:
        "High-performance technical interview preparation platform and engineering knowledge engine. Designed to help developers achieve mastery across distributed systems, algorithms, and system design.",
      metrics: [
        { label: "Interactive Problem Sets", value: "500+ Challenges" },
        { label: "Latency to Execution", value: "< 150ms" },
        { label: "Active Engineers", value: "Growing Community" },
      ],
      techStack: ["React / Next.js", "TypeScript", "Tailwind CSS", "Interactive Sandbox"],
      highlights: [
        "Surgical question curation with step-by-step Socratic breakdowns",
        "Clean, dark-mode developer UI with zero distracting clutter",
        "Architectural problem deep dives and live code playgrounds",
      ],
    },
    {
      title: "Autonomous AI & Knowledge Pipelines",
      category: "Data Harvester & Semantic Intelligence",
      liveUrl: "#contact",
      tag: "Client Solution",
      description:
        "High-throughput multi-agent web scraping and semantic search engine built for automated enterprise data extraction, structured JSON normalization, and vector search querying.",
      metrics: [
        { label: "Data Extraction Throughput", value: "10,000+ docs/hr" },
        { label: "Pipeline Latency", value: "< 200ms" },
        { label: "Infrastructure Cost Reduction", value: "70% vs Third-Party" },
      ],
      techStack: ["FastAPI (Python 3.13)", "PostgreSQL (pgvector)", "Next.js", "Redis"],
      highlights: [
        "Headless distributed crawlers with anti-bot evasion & proxy rotation",
        "Automated schema mapping and LLM entity extraction pipelines",
        "Real-time analytics dashboard with zero vendor lock-in",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-zinc-950/80 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-4">
            <span>REAL-WORLD CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
            Proven <span className="text-brand-400">Engineering Work</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We let our production deployments speak for themselves. Strictly zero synthetic mockup projects — only battle-tested code running in the wild.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8 sm:p-10 glass-panel-hover flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/30">
                    {project.tag}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3 flex items-center gap-3">
                  <span>{project.title}</span>
                  {project.liveUrl.startsWith("http") && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-brand-400 transition-colors"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Metrics Grid */}
              <div className="w-full lg:w-80 shrink-0">
                <div className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-6 space-y-4">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-brand-400" />
                    <span>Verified Outcomes</span>
                  </div>
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="border-b border-zinc-800/60 pb-3 last:border-0 last:pb-0">
                      <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-100 text-brand-300">
                        {m.value}
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}

                  {project.liveUrl.startsWith("http") ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold font-mono bg-zinc-900 border border-zinc-700 hover:border-brand-400 text-zinc-200 hover:text-brand-300 transition-all"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold font-mono bg-brand-500/10 border border-brand-500/30 hover:bg-brand-500/20 text-brand-300 transition-all"
                    >
                      <span>Request Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
