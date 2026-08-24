import React from "react";
import { Layers, Store, BrainCircuit, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      title: "Custom Software & B2B SaaS",
      icon: Layers,
      tag: "Product Studio",
      description:
        "Turn your product concept or internal workflow into a reliable, custom web application that scales effortlessly.",
      features: [
        "Custom web platforms and customer portals",
        "Role-based internal admin dashboards and back-offices",
        "High-performance databases engineered for zero data loss",
        "Low-cost cloud infrastructure with zero vendor lock-in",
      ],
      link: "#contact",
      color: "bg-brand-50 text-brand-700 border-brand-200",
      tagColor: "bg-brand-50 text-brand-800 border-brand-200",
    },
    {
      title: "Local Search & Customer Growth",
      icon: Store,
      tag: "Revenue Acceleration",
      description:
        "High-impact local search visibility and automated WhatsApp conversion funnels designed for established service businesses.",
      features: [
        "Google Business Profile optimization & #1 local SEO rankings",
        "Lightning-fast landing pages optimized for customer calls",
        "WhatsApp CRM with automated lead capture & qualification",
        "Digital job cards, instant invoicing & customer records",
      ],
      link: "#contact",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      title: "AI Workflows & Cloud Systems",
      icon: BrainCircuit,
      tag: "Systems & Automation",
      description:
        "Save your team 15+ hours every week by automating repetitive back-office data processing and business logic.",
      features: [
        "Automated data extraction and structured document parsing",
        "Intelligent customer query routing and AI assistants",
        "Secure cloud microservices with sub-second response times",
        "Continuous backups, monitoring, and 99.9% uptime setups",
      ],
      link: "#contact",
      color: "bg-sky-50 text-sky-700 border-sky-200",
      tagColor: "bg-sky-50 text-sky-800 border-sky-200",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-600 mb-4">
            <span>WHAT WE DO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Three Ways We Help <span className="text-brand-600">Your Business Grow</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We don&apos;t build generic templates. We deliver custom software and automated workflows engineered to resolve your specific business bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white border border-stone-200 p-8 card-clean-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${service.tagColor}`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-stone-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-stone-700">
                        <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-stone-50 border border-stone-200 hover:border-brand-500 hover:bg-brand-50/50 text-sm font-semibold text-stone-800 hover:text-brand-800 transition-all group"
                >
                  <span>Get Quotation</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-brand-700 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
