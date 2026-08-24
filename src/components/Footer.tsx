import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 py-16 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand & Summary */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-900/50 border border-brand-700 flex items-center justify-center text-brand-400 font-bold text-sm">
                0
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Shunya<span className="text-brand-400">Labs</span>
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              *Shunya* represents the foundational zero from which reliable, scalable systems are built.
              We are an independent software consulting studio engineering custom platforms, digital growth engines, and automated workflows.
            </p>
            <div className="text-xs text-stone-400 flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>Bangalore, India • Global Remote Delivery</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-stone-200 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-brand-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-brand-400 transition-colors">
                  The Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-400 transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Live Ecosystem */}
          <div>
            <h4 className="text-xs font-bold text-stone-200 uppercase tracking-widest mb-4">
              Live Projects
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://hoppingcars.com/car-painting-begur-bangalore.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Hopping Cars (Begur)
                </a>
              </li>
              <li>
                <a
                  href="https://kaizencodes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  KaizenCodes (SaaS)
                </a>
              </li>
              <li>
                <span className="text-stone-400">
                  MSME Local Growth Engine
                </span>
              </li>
              <li>
                <span className="text-stone-400">
                  WhatsApp CRM &amp; Lead Qualification
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} ShunyaLabs Studio. All rights reserved. 100% Client Code &amp; Data Ownership.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with precision for growing businesses</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
