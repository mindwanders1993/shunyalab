import React from "react";
import { Linkedin, ArrowUpRight } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Ranadeep Murmu",
      role: "Principal Systems & AI Architect",
      focus: "High-Throughput Backends • AI Workflows • PostgreSQL • Cloud Scale",
      bio: "Leads systems architecture, automated data pipelines, and scalable backend infrastructure. Focuses on building high-performance, cost-efficient software systems with zero operational bloat.",
      linkedin: "https://www.linkedin.com/in/ranadeep-murmu-2636251b6/",
      initials: "RM",
      color: "bg-brand-100 text-brand-800 border-brand-200",
      experience: "Core Systems Lead",
    },
    {
      name: "Biswa",
      role: "Full-Stack & Growth Systems Lead",
      focus: "Next.js • Conversion UI/UX • Local Search Inbound • Web Portals",
      bio: "Engineers high-conversion web platforms, customer growth funnels, and streamlined internal admin systems. Specializes in turning complex business operations into intuitive, fast user interfaces.",
      linkedin: "https://www.linkedin.com/in/biswa-ranjan-nayak-798835269/",
      initials: "BN",
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
      experience: "Full-Stack Lead",
    },
    {
      name: "Apoorv Harsh",
      role: "Platform & Cloud Systems Engineer",
      focus: "Cloud Architecture • DevOps • Data Storage • Infrastructure Reliability",
      bio: "Ensures uptime, secure backups, database performance, and cost-effective cloud infrastructure setups. Builds automated continuous deployment pipelines for frictionless production releases.",
      linkedin: "https://www.linkedin.com/in/apoorv-harsh-4b5321151/",
      initials: "AH",
      color: "bg-sky-100 text-sky-800 border-sky-200",
      experience: "Platform Lead",
    },
  ];

  return (
    <section id="team" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-600 mb-4 shadow-sm">
            <span>MEET THE BUILDERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            The People Who Will <span className="text-brand-600">Build Your Product</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Small team, complete accountability. When you partner with ShunyaLabs, you collaborate directly with the engineers writing your code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl bg-white border border-stone-200 p-8 card-clean-hover flex flex-col justify-between"
            >
              <div>
                {/* Header Avatar & Social */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-lg font-bold ${member.color}`}
                  >
                    {member.initials}
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-500 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-all"
                    title={`Connect with ${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-brand-700 mb-4">{member.role}</p>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium text-stone-600 mb-4 leading-relaxed">
                  {member.focus}
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">{member.bio}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-400">{member.experience}</span>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-stone-600 hover:text-brand-700 flex items-center gap-1 transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
