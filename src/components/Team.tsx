import React from "react";
import { Linkedin, Github, Globe, Terminal, Shield, ArrowUpRight } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Ranadeep Murmu",
      role: "Systems & Product Architect",
      focus: "Autonomous AI Agents • Distributed Backends • FastAPI • PostgreSQL",
      bio: "Leads technical architecture, multi-agent frameworks, and high-throughput backend infrastructure. Passionate about autonomous engineering systems and zero-overhead software design.",
      linkedin: "https://www.linkedin.com/in/ranadeep-murmu-2636251b6/",
      initials: "RM",
      color: "from-brand-500/20 to-teal-500/10",
      badgeColor: "border-brand-500/30 text-brand-300",
    },
    {
      name: "Biswa",
      role: "Full-Stack & Growth Systems Lead",
      focus: "Next.js • Tailwind CSS • Local SEO Architecture • UI/UX",
      bio: "Engineers high-conversion user storefronts, client growth pipelines, and streamlined MSME back-office automations. Specializes in turning complex business workflows into simple digital interfaces.",
      linkedin: "https://www.linkedin.com/in/biswa-ranjan-nayak-798835269/",
      initials: "BN",
      color: "from-accent-emerald/20 to-emerald-500/10",
      badgeColor: "border-accent-emerald/30 text-accent-emerald",
    },
    {
      name: "Apoorv Harsh",
      role: "Platform & Cloud Systems Engineer",
      focus: "Cloud Infrastructure • DevOps • S3/R2 • Pipeline Reliability",
      bio: "Focuses on infrastructure reliability, low-egress cloud storage systems, CI/CD orchestration, and multi-tenant security architecture.",
      linkedin: "https://www.linkedin.com/in/apoorv-harsh-4b5321151/",
      initials: "AH",
      color: "from-accent-cyan/20 to-cyan-500/10",
      badgeColor: "border-accent-cyan/30 text-accent-cyan",
    },
  ];

  return (
    <section id="team" className="py-24 relative bg-zinc-950 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-4">
            <span>THE AUTONOMOUS BUILDERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
            Directly from <span className="text-gradient-brand">Engineers to Founders</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            No bloated account management tiers. You partner with experienced system builders who write the code and take end-to-end accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-8 glass-panel-hover flex flex-col justify-between group"
            >
              <div>
                {/* Header Avatar & Social */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} border border-zinc-700 flex items-center justify-center text-lg font-mono font-bold text-zinc-200 group-hover:scale-105 transition-transform`}
                  >
                    {member.initials}
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-brand-400 hover:border-brand-500/40 transition-all"
                    title={`Connect with ${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-zinc-100 mb-1">{member.name}</h3>
                <p className="text-xs font-mono text-brand-400 mb-4">{member.role}</p>

                <div className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-xs font-mono text-zinc-400 mb-4">
                  {member.focus}
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">{member.bio}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">Autonomous Unit</span>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-400 hover:text-brand-300 flex items-center gap-1 transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
