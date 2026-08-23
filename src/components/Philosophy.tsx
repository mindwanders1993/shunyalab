import React from "react";
import { Sparkles, Cpu, ShieldCheck, HeartHandshake, RefreshCw, Layers } from "lucide-react";

export default function Philosophy() {
  const pillars = [
    {
      title: "Evolutionary Purpose",
      icon: Sparkles,
      subtitle: "Listening to the Product's Organic Growth",
      description:
        "We reject rigid, bloated waterfall contracts designed to maximize billable agency hours. Instead, we treat software as a living organism, iteratively adapting technical architecture based on real customer feedback, live market signals, and scalable traction.",
      badge: "Agile & Adaptive",
      color: "from-brand-500/20 to-teal-600/10",
      accent: "text-brand-400",
      border: "border-brand-500/30",
    },
    {
      title: "True Self-Management",
      icon: Cpu,
      subtitle: "Zero Middlemen. Direct Engineer Collaboration",
      description:
        "Every client interacts directly with autonomous, full-stack systems engineers who own both the code and the architectural decisions. No account managers playing telephone, no bureaucratic bottlenecks, and zero communication delay.",
      badge: "Direct Execution",
      color: "from-accent-emerald/20 to-emerald-700/10",
      accent: "text-accent-emerald",
      border: "border-accent-emerald/30",
    },
    {
      title: "Wholeness & Radical Transparency",
      icon: ShieldCheck,
      subtitle: "Full Code Ownership & Zero Lock-in",
      description:
        "We practice radical candor in technical trade-offs, timelines, and costs. You retain 100% ownership of your Git repositories, cloud infrastructure, and databases from Day 1. No proprietary traps or hidden lock-ins.",
      badge: "100% Open & Sovereign",
      color: "from-accent-cyan/20 to-cyan-700/10",
      accent: "text-accent-cyan",
      border: "border-accent-cyan/30",
    },
  ];

  return (
    <section id="philosophy" className="py-24 relative bg-zinc-950/60 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-4">
            <span>THE OPERATING MODEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
            Built on <span className="text-brand-400">Teal Organizational</span> Principles
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Inspired by Frederic Laloux’s pioneering research on self-organizing enterprises,
            ShunyaLabs replaces traditional agency bureaucracy with autonomous, purpose-driven engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="relative rounded-2xl bg-zinc-900/60 border border-zinc-800 p-8 glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border ${pillar.border} flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 ${pillar.accent}`} />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-400">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-1 group-hover:text-brand-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 mb-4">{pillar.subtitle}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  <span>Teal Pillar Active</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
