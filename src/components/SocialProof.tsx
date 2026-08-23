import React from "react";

export default function SocialProof() {
  return (
    <section className="py-10 bg-stone-100/80 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-stone-500">
              Trusted by Ambitious Founders & Growing Businesses
            </span>
            <p className="text-sm text-stone-700 font-medium mt-0.5">
              Delivering verified production software across India and global remote teams
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-2 font-bold text-stone-800 text-lg tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Hopping Cars</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-stone-800 text-lg tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
              <span>KaizenCodes</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-stone-800 text-lg tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              <span>Local MSME Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
