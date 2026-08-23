import React from "react";
import { PhoneCall, FileText, Rocket, ArrowRight } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      icon: PhoneCall,
      title: "Free Discovery Call",
      timeframe: "30 Minutes",
      description:
        "We discuss your current bottlenecks, target goals, and timeline. You get direct architectural feedback with zero sales pressure.",
      color: "bg-brand-50 text-brand-700 border-brand-200",
    },
    {
      number: "02",
      icon: FileText,
      title: "Clear Plan & Fixed Quote",
      timeframe: "Within 3–5 Days",
      description:
        "You receive an exact technical roadmap, visual wireframes, and a fixed-price proposal. No surprise hourly overages.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Build, Test & Launch",
      timeframe: "4–8 Weeks Delivery",
      description:
        "We develop your software with weekly live demos. You receive 100% code ownership, deployment assistance, and 30-day post-launch support.",
      color: "bg-sky-50 text-sky-700 border-sky-200",
    },
  ];

  return (
    <section id="process" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-600 mb-4 shadow-sm">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            From First Call to <span className="text-brand-600">Production Launch</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We follow a streamlined, transparent process designed to get working software into your hands quickly without corporate bureaucracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative rounded-2xl bg-white border border-stone-200 p-8 card-clean-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${step.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-stone-300 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <div className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded bg-stone-100 text-stone-600 mb-2">
                    {step.timeframe}
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 text-xs font-medium text-stone-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-600" />
                  <span>Transparent milestone progress</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700 shadow-sm transition-all"
          >
            <span>Book Your Free Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
