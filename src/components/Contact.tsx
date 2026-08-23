"use client";

import React, { useState } from "react";
import { MessageSquare, Send, CheckCircle2, AlertCircle, Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    track: "saas",
    budget: "50k-100k",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send inquiry. Please reach out via WhatsApp directly.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const whatsAppText = encodeURIComponent(
    `Hi ShunyaLabs! I would like to discuss a project.\nName: ${formData.name || "Client"}\nTrack: ${formData.track}\nMessage: ${formData.message || "Let's connect!"}`
  );

  return (
    <section id="contact" className="py-24 relative bg-zinc-950/80 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-4">
                <span>DIRECT TO ENGINEERS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
                Let’s Build Something <span className="text-brand-400">Exceptional</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                Whether you need a custom B2B SaaS platform, an end-to-end MSME revenue transformation, or high-throughput AI backends, we are ready to build.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/919999999999?text=${whatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-accent-emerald/50 glass-panel-hover group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30 flex items-center justify-center text-accent-emerald">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-200 group-hover:text-accent-emerald transition-colors">
                      Instant WhatsApp Connect
                    </div>
                    <div className="text-xs font-mono text-zinc-400">
                      Direct line to engineering leads
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-accent-emerald group-hover:translate-x-1 transition-all" />
              </a>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-200">Official Inquiries</div>
                  <div className="text-xs font-mono text-zinc-400">hello@shunyalabs.com</div>
                </div>
              </div>
            </div>

            {/* Teal Guarantee Note */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 text-xs font-mono text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-brand-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>The ShunyaLabs Direct Commitment</span>
              </div>
              <p className="text-zinc-400">
                You will receive a detailed technical assessment and architectural breakdown within 24 hours directly from a lead engineer.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-100">Inquiry Received!</h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Thank you for contacting ShunyaLabs. One of our autonomous engineers will review your requirements and follow up within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        track: "saas",
                        budget: "50k-100k",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-zinc-100 mb-2">Project Intake Form</h3>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/50 border border-red-800/80 text-red-300 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Aditi Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-500 focus:outline-none text-zinc-100 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="aditi@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-500 focus:outline-none text-zinc-100 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2">
                        Company / Project Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        placeholder="e.g. Apex Staffing"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-500 focus:outline-none text-zinc-100 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-2">
                        Primary Track
                      </label>
                      <select
                        name="track"
                        value={formData.track}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-500 focus:outline-none text-zinc-100 text-sm"
                      >
                        <option value="saas">Custom B2B SaaS & Autonomous Platforms</option>
                        <option value="msme">MSME Local SEO & WhatsApp CRM</option>
                        <option value="ai-cloud">AI Microservices & Cloud Architecture</option>
                        <option value="other">Other / Custom Strategy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">
                      Estimated Budget Range (INR)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-500 focus:outline-none text-zinc-100 text-sm"
                    >
                      <option value="50k">₹50,000 (Phase 1 MVP Package)</option>
                      <option value="50k-100k">₹50,000 – ₹1,00,000</option>
                      <option value="100k-300k">₹1,00,000 – ₹3,00,000</option>
                      <option value="300k+">₹3,00,000+ (Custom Enterprise / Studio)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2">
                      Project Goals & Context *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us what you're building, key challenges, target timelines, or existing systems..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-brand-500 focus:outline-none text-zinc-100 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-brand-500 text-zinc-950 hover:bg-brand-400 disabled:opacity-50 transition-all shadow-[0_0_25px_rgba(20,184,166,0.35)]"
                  >
                    {loading ? (
                      <span className="font-mono text-sm">Transmitting to Engineers...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
