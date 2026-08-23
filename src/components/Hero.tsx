import React from "react";
import { ArrowRight, Code2, ShieldCheck, Zap, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-emerald/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(20,184,166,0.15)]">
            <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
            <span>🌿 Teal Engineering Studio • Zero Bureaucracy</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100 leading-[1.1] mb-6">
            From Zero to Infinite Architecture:{" "}
            <span className="text-gradient-brand">
              Scalable SaaS, AI & Data Systems
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            ShunyaLabs is an autonomous technology studio and venture incubator.
            We partner directly with founders and ambitious MSMEs to deliver production-ready software, high-converting revenue engines, and intelligent automations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-brand-500 text-zinc-950 hover:bg-brand-400 shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all hover:scale-[1.02]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-100 backdrop-blur-sm transition-all"
            >
              <span>Explore Case Studies</span>
            </a>
          </div>

          {/* Live Metrics / Guarantee Ticker */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t border-zinc-800/80">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-zinc-400 text-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
              <span>100% Direct Engineer Access</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-zinc-400 text-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
              <span>0% Middle-Management Fluff</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-zinc-400 text-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Next.js 14 + FastAPI Core</span>
            </div>
          </div>
        </div>

        {/* Interactive Architecture Console Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800/80 shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/70 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-zinc-500 font-mono ml-2">shunyalabs-cluster // production</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-brand-400">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping" />
                <span>ONLINE • 99.99% UPTIME</span>
              </div>
            </div>
            <div className="p-6 font-mono text-xs sm:text-sm text-zinc-300 space-y-2 overflow-x-auto">
              <p className="text-zinc-500">// Initialize ShunyaLabs Venture Studio Runtime</p>
              <p className="text-brand-300">
                <span className="text-zinc-500">$</span> shunyalabs deploy --stack=teal-fullstack --mode=production
              </p>
              <p className="text-zinc-400">
                [OK] Discovered 3 autonomous tracks: <span className="text-accent-emerald">[Web Storefront]</span>, <span className="text-accent-cyan">[White-Label ATS]</span>, <span className="text-brand-400">[MSME Engine]</span>
              </p>
              <p className="text-zinc-400">
                [OK] Microservice routing: FastAPI (Async ASGI) + Next.js App Router + Cloudflare R2
              </p>
              <p className="text-zinc-400">
                [OK] Active portfolio pipelines: HoppingCars (Begur SEO), KaizenCodes (LLM Intelligence)
              </p>
              <p className="text-brand-400">
                ✔ Zero-overhead engineering node ready. Listening for new product challenges...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
