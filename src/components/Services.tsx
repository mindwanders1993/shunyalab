import React from "react";
import { Layers, Store, BrainCircuit, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      title: "B2B SaaS & Autonomous Platforms",
      icon: Layers,
      tag: "Product Studio",
      description:
        "We build, test, and deploy bespoke modular SaaS software tailored to modern business workflows.",
      features: [
        "Modular B2B SaaS & Workflow Automation Portals",
        "Multi-Agent Web Crawlers & Knowledge Harvesters",
        "Bespoke Internal Admin Dashboards & CRM Engines",
        "Zero-Egress Cloud Storage (Cloudflare R2 / S3)",
      ],
      link: "#contact",
      color: "border-brand-500/30 text-brand-400 bg-brand-500/10",
    },
    {
      title: "MSME Digital Growth Engine",
      icon: Store,
      tag: "Revenue Acceleration",
      description:
        "Full-funnel digital transformation for high-potential local businesses (₹1–2 Cr ARR).",
      features: [
        "Google Business Profile (GBP) & Hyper-Local SEO",
        "High-Conversion Static Landing Pages & Lead Capture",
        "WhatsApp Cloud API CRM with Automated AI Qualification",
        "Digital Job Cards, Invoicing & Back-Office Ledger",
      ],
      link: "#contact",
      color: "border-accent-emerald/30 text-accent-emerald bg-accent-emerald/10",
    },
    {
      title: "AI & Scalable Cloud Engineering",
      icon: BrainCircuit,
      tag: "Systems Architecture",
      description:
        "Enterprise-grade modern stacks engineered for zero latency, rock-solid security, and effortless scaling.",
      features: [
        "FastAPI (Python) Async High-Throughput Microservices",
        "Next.js 14/15 React Server Components & Edge SSR",
        "PostgreSQL 15+ ACID Relational + JSONB Architecture",
        "LLM & Semantic Search Integration (Gemini / Claude)",
      ],
      link: "#contact",
      color: "border-accent-cyan/30 text-accent-cyan bg-accent-cyan/10",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-zinc-950 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-4">
            <span>OUR CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
            Bespoke Engineering for <span className="text-gradient-brand">Modern Growth</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We don't offer generic templates. We deliver custom software infrastructure that solves specific revenue bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 mb-3">{service.title}</h3>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-brand-500/40 text-sm font-medium text-zinc-300 hover:text-brand-300 transition-all group"
                >
                  <span>Inquire for this track</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
