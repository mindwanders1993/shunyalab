import React from "react";
import { UserCheck, ShieldCheck, RefreshCw } from "lucide-react";

export default function Philosophy() {
  const pillars = [
    {
      title: "Direct Access to Your Builder",
      icon: UserCheck,
      subtitle: "Zero Middlemen or Account Managers",
      description:
        "You communicate directly with senior software engineers who write the code and architect your system. No games of telephone, no misaligned specs, and zero communication delay.",
      badge: "Direct Collaboration",
      color: "bg-brand-50 text-brand-700 border-brand-200",
    },
    {
      title: "100% Code & Data Ownership",
      icon: ShieldCheck,
      subtitle: "Your Git Repositories, Your Cloud",
      description:
        "You retain complete ownership of all source code, databases, and cloud infrastructure from Day 1. We build on open, standard technologies with strictly zero proprietary lock-in.",
      badge: "Full Independence",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      title: "Fixed Milestones & Weekly Demos",
      icon: RefreshCw,
      subtitle: "Predictable Timelines, Zero Surprises",
      description:
        "We structure projects into clear, deliverable milestones with working demos every week. You see tangible software running in real time and have full visibility into progress.",
      badge: "Predictable Delivery",
      color: "bg-sky-50 text-sky-700 border-sky-200",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-600 mb-4 shadow-sm">
            <span>WHY CHOOSE SHUNYALABS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Direct Engineering. <span className="text-brand-600">Zero Bureaucracy.</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Traditional agencies hide behind layers of account managers and inflated billable hours. We pair you directly with experienced software builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="relative rounded-2xl bg-white border border-stone-200 p-8 card-clean-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${pillar.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200 text-stone-600">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-400 mb-4">{pillar.subtitle}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{pillar.description}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-stone-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>Guaranteed in every engagement</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
