import React from "react";
import { ArrowRight, CheckCircle2, Sparkles, Layers, TrendingUp, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-soft-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs sm:text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
            <span>Software Consulting · Direct Engineer Collaboration</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.1] mb-6">
            We build the software{" "}
            <span className="text-gradient-brand">
              your business needs
            </span>{" "}
            to grow.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Custom software platforms, intelligent automations, and digital growth systems — engineered and delivered by seasoned builders in 4–8 weeks.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-stone-700 bg-white border border-stone-300 hover:border-stone-400 hover:bg-stone-50 shadow-sm transition-all"
            >
              <span>See Our Work</span>
            </a>
          </div>

          {/* Outcome Guarantees Ticker */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t border-stone-200">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-stone-700 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
              <span>4–8 Week Production Delivery</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-stone-700 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
              <span>100% Code & Data Ownership</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-stone-700 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
              <span>Direct Access to Senior Engineers</span>
            </div>
          </div>
        </div>

        {/* Business Outcome Preview Cards */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-clean card-clean-hover p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">Custom Software & Portals</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Replace rigid SaaS tools or messy spreadsheets with a tailored platform that fits your exact company workflow.
            </p>
          </div>

          <div className="card-clean card-clean-hover p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">Digital Customer Inbound</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Rank #1 on Google for high-intent keywords and automatically capture customer bookings straight to WhatsApp.
            </p>
          </div>

          <div className="card-clean card-clean-hover p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">Automated Operations</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Automate back-office reporting, invoicing, and data extraction to save your team hours of manual grunt work every week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
