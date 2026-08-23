import React from "react";
import Link from "next/link";
import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand & Manifesto */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 font-mono font-bold text-sm">
                0
              </div>
              <span className="text-xl font-bold font-mono text-zinc-100">
                Shunya<span className="text-brand-400">Labs</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              *Shunya* (शून्य) represents the foundational zero from which infinite architectures arise.
              We are an autonomous engineering studio building resilient SaaS platforms and transforming MSMEs through Teal self-management.
            </p>
            <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-emerald inline-block" />
              <span>Bangalore, India • Global Remote Delivery</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold font-mono text-zinc-200 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#philosophy" className="hover:text-brand-400 transition-colors">
                  Teal Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-400 transition-colors">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-400 transition-colors">
                  Case Studies & Proof
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-brand-400 transition-colors">
                  Engineering Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-400 transition-colors">
                  Direct Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecosystem Products */}
          <div>
            <h4 className="text-sm font-semibold font-mono text-zinc-200 uppercase tracking-wider mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-sm font-mono text-xs">
              <li>
                <a
                  href="https://hoppingcars.com/car-painting-begur-bangalore.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-emerald transition-colors"
                >
                  → Hopping Cars (Begur)
                </a>
              </li>
              <li>
                <a
                  href="https://dev.kaizencodes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-cyan transition-colors"
                >
                  → KaizenCodes (AI Prep)
                </a>
              </li>
              <li>
                <span className="text-zinc-500">
                  → Autonomous Harvester Studio
                </span>
              </li>
              <li>
                <span className="text-zinc-500">
                  → WhatsApp AI CRM Engine
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} ShunyaLabs Studio. All rights reserved. Zero proprietary lock-in.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with precision & Teal autonomy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
