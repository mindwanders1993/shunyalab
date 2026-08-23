import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ClientFit() {
  const goodFit = [
    "Founders launching their first custom SaaS product or MVP in 4–8 weeks",
    "Growing service businesses wanting to rank on Google and capture customer leads",
    "Companies that have outgrown spreadsheets and require custom internal portals",
    "Leaders who value talking directly to senior engineers without agency middlemen",
  ];

  const notFit = [
    "Large conglomerates requiring 50-person vendor teams and multi-month RFP cycles",
    "Projects shopping purely for the cheapest outsourcing rather than reliable engineering",
    "Unclear ideas without any defined target audience or business objective",
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-600 mb-4 shadow-sm">
            <span>MUTUAL QUALIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Who We Work <span className="text-brand-600">Best With</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We value high-trust, high-impact partnerships. Here is how to know if we are the right fit for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Great Fit Box */}
          <div className="rounded-2xl bg-brand-50/40 border border-brand-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">We are a great fit if you:</h3>
                <span className="text-xs text-brand-800 font-medium">Ideal Partnership Profile</span>
              </div>
            </div>

            <div className="space-y-4">
              {goodFit.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700 leading-relaxed font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Right Fit Box */}
          <div className="rounded-2xl bg-stone-50 border border-stone-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-stone-300 text-stone-700 flex items-center justify-center font-bold">
                ✕
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">We may not be right if you:</h3>
                <span className="text-xs text-stone-500 font-medium">Alternative Options Advised</span>
              </div>
            </div>

            <div className="space-y-4">
              {notFit.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-600 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
