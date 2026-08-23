import React from "react";
import { ExternalLink, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Hopping Cars",
      category: "Local SEO & Customer Lead Engine",
      liveUrl: "https://hoppingcars.com/car-painting-begur-bangalore.html",
      tag: "Live Client Success",
      description:
        "End-to-end digital revenue transformation for a premier multi-brand car workshop in Begur, Bangalore. Engineered localized web pages that rank on the first page of Google for high-intent automotive repair searches.",
      metrics: [
        { label: "Google Local Search", value: "Rank #1 in Begur" },
        { label: "Inbound Customer Leads", value: "300+ Calls/Mo" },
        { label: "Mobile Experience Score", value: "98/100 Speed" },
      ],
      highlights: [
        "Hyper-local keyword clustering driving high-ticket car repair leads",
        "Direct WhatsApp conversion funnel with automated service intent capture",
        "Google rich snippet integration for genuine customer star ratings",
      ],
    },
    {
      title: "KaizenCodes",
      category: "Engineering Learning Platform & SaaS",
      liveUrl: "https://dev.kaizencodes.com",
      tag: "Autonomous SaaS",
      description:
        "High-performance interactive technical interview preparation platform and engineering knowledge engine. Built to deliver zero-latency problem solving for software engineers worldwide.",
      metrics: [
        { label: "Interactive Challenges", value: "500+ Curated" },
        { label: "Global Platform Latency", value: "< 150ms" },
        { label: "Community Growth", value: "Engineers Worldwide" },
      ],
      highlights: [
        "Surgical question curation with step-by-step Socratic breakdowns",
        "Distraction-free interface engineered for fast developer workflow",
        "Sub-second interactive execution sandbox with zero setup",
      ],
    },
    {
      title: "Autonomous AI & Knowledge Pipelines",
      category: "Automated Data Processing & AI Search",
      liveUrl: "#contact",
      tag: "Enterprise Automation",
      description:
        "Automated multi-agent web data extraction and semantic search engine. Eliminates hours of manual data entry by extracting, structuring, and indexing market data directly into client databases.",
      metrics: [
        { label: "Data Processing Speed", value: "10,000+ docs/hr" },
        { label: "Manual Labor Reduction", value: "90% Time Saved" },
        { label: "Cost vs Commercial Tools", value: "70% Cost Savings" },
      ],
      highlights: [
        "Automated document normalization with zero manual copy-pasting",
        "Semantic AI search enabling natural language company data queries",
        "Full client data ownership hosted on private secure cloud servers",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-600 mb-4 shadow-sm">
            <span>PROVEN CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Verified Results for <span className="text-brand-600">Real Businesses</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Every project below is running in live production, solving tangible business challenges and generating measurable returns.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl bg-stone-50 border border-stone-200 p-8 sm:p-10 card-clean-hover flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-100 text-brand-800 border border-brand-200">
                    {project.tag}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3 flex items-center gap-3">
                  <span>{project.title}</span>
                  {project.liveUrl.startsWith("http") && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-brand-600 transition-colors"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </h3>

                <p className="text-sm sm:text-base text-stone-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-6">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Outcomes Box */}
              <div className="w-full lg:w-80 shrink-0">
                <div className="rounded-2xl bg-white border border-stone-200 p-6 space-y-4 shadow-sm">
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-brand-600" />
                    <span>Verified Outcomes</span>
                  </div>
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="border-b border-stone-100 pb-3 last:border-0 last:pb-0">
                      <div className="text-xl sm:text-2xl font-bold text-stone-900">
                        {m.value}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">{m.label}</div>
                    </div>
                  ))}

                  {project.liveUrl.startsWith("http") ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-all"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold bg-brand-50 text-brand-800 border border-brand-200 hover:bg-brand-100 transition-all"
                    >
                      <span>Request Similar System</span>
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
