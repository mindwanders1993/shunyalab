"use client";

import React, { useState } from "react";
import { MessageSquare, Send, CheckCircle2, AlertCircle, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    track: "saas",
    budget: "not-sure",
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
        throw new Error("Failed to send inquiry. Please connect via WhatsApp or email directly.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const whatsAppText = encodeURIComponent(
    `Hi ShunyaLabs! I would like to discuss a software project.\nName: ${formData.name || "Client"}\nLooking for: ${formData.track}\nNotes: ${formData.message || "Let's connect!"}`
  );

  return (
    <section id="contact" className="py-24 bg-stone-100/90 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-600 mb-4 shadow-sm">
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
                Ready to Build? <span className="text-brand-600">Let&apos;s Talk.</span>
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Tell us about your project, target timeline, or current business bottlenecks. We will review your goals and respond within 24 hours with an actionable roadmap.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/919999999999?text=${whatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/30 card-clean transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                      Instant WhatsApp Chat
                    </div>
                    <div className="text-xs text-stone-500">
                      Connect directly with lead engineers
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
              </a>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 flex items-center gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">Direct Email</div>
                  <div className="text-xs text-stone-600">hello@shunyalabs.com</div>
                </div>
              </div>
            </div>

            {/* Response Guarantee Note */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 text-xs text-stone-600 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-brand-700 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Our 24-Hour Commitment</span>
              </div>
              <p className="leading-relaxed">
                You will receive a thoughtful, direct architectural response and initial scope breakdown within 24 hours. Strictly zero high-pressure sales pitches.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-stone-200 p-8 sm:p-10 shadow-lg">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">Inquiry Received!</h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A senior engineer will review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        track: "saas",
                        budget: "not-sure",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-xs font-semibold text-white transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-1">Send us a message</h3>
                    <p className="text-sm text-stone-500">Fill out this quick form and we will be in touch shortly.</p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Aditi Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-600 focus:bg-white focus:outline-none text-stone-900 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="aditi@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-600 focus:bg-white focus:outline-none text-stone-900 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">
                        Company or Project Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        placeholder="e.g. Apex Enterprises"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-600 focus:bg-white focus:outline-none text-stone-900 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">
                        What Do You Need?
                      </label>
                      <select
                        name="track"
                        value={formData.track}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-600 focus:bg-white focus:outline-none text-stone-900 text-sm transition-all"
                      >
                        <option value="saas">Custom Software & B2B SaaS Platform</option>
                        <option value="msme">Local Google Inbound & WhatsApp CRM</option>
                        <option value="ai-cloud">Automated AI Workflows & Cloud Scale</option>
                        <option value="other">General Consulting / Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">
                      Target Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-600 focus:bg-white focus:outline-none text-stone-900 text-sm transition-all"
                    >
                      <option value="not-sure">Not sure yet — let&apos;s discuss scope first</option>
                      <option value="50k">₹50,000 (Phase 1 MVP Package)</option>
                      <option value="50k-150k">₹50,000 – ₹1,50,000</option>
                      <option value="150k-300k">₹1,50,000 – ₹3,00,000</option>
                      <option value="300k+">₹3,00,000+ (Comprehensive Platform)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-2 uppercase tracking-wider">
                      Project Goals & Context *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us what you want to build or improve, key requirements, and target timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-600 focus:bg-white focus:outline-none text-stone-900 text-sm resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <span className="text-sm font-semibold">Sending your message...</span>
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
