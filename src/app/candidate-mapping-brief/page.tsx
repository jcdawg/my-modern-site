"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ShieldAlert, 
  UserCheck, 
  MapPin, 
  Layers, 
  Award, 
  CheckSquare, 
  Square,
  Send,
  Sparkles,
  Zap,
  ClipboardCheck,
  CheckCircle2,
  Printer
} from "lucide-react";
import Logo from "@/components/Logo";

// Pre-configured anonymized, high-level candidate profiles
const CANDIDATES = [
  {
    id: "TKS-GTM-982",
    alignment: "Enterprise GTM Director",
    region: "Northeast (NY/Boston)",
    progression: "Mid-Market to Enterprise Lead",
    summary: "Proven revenue leader with 10+ years of GTM execution at high-growth DevOps and Cloud Security platforms. Vetted track record building repeatable outbound frameworks and leading technical, multi-stakeholder sales motions.",
    metrics: [
      { label: "Tenure", value: "3+ Years at Tier-1 Competitor" },
      { label: "ACV Range", value: "$150k - $500k+" },
      { label: "Competencies", value: "MEDDPICC, DevSecOps, C-Suite Outbound" }
    ]
  },
  {
    id: "TKS-AI-508",
    alignment: "Principal AI/ML Architect",
    region: "San Francisco / Remote",
    progression: "Senior Scientist to Principal Lead",
    summary: "Ph.D.-vetted AI engineering leader with 8+ years of production experience building LLM pipelines and RAG systems. Custom CUDA kernel optimization specialist who led core ML infrastructure departments.",
    metrics: [
      { label: "Tenure", value: "4 Years (Core AI Infrastructure)" },
      { label: "Scope/Impact", value: "40% latency drop / $1.2M saved" },
      { label: "Competencies", value: "PyTorch, CUDA, Triton, vLLM" }
    ]
  },
  {
    id: "TKS-GTM-604",
    alignment: "Enterprise Sales Director",
    region: "Northeast / Hybrid",
    progression: "Strategic Accounts to Division Director",
    summary: "Top 5% GTM leader with 8+ years of SaaS execution in FinTech and Cyber Risk platforms. Expert in complex contract negotiations, champion building, and navigating multi-stakeholder procurement channels.",
    metrics: [
      { label: "Tenure", value: "3 Years (President's Club Leader)" },
      { label: "ACV Range", value: "$200k - $450k+" },
      { label: "Competencies", value: "Enterprise PLG, Cyber Risk, Procurement" }
    ]
  }
];

export default function ShortlistMatrix() {
  const [checklist, setChecklist] = useState({
    quota: true,
    technical: true,
    procurement: false,
    reference: false,
    introCall: true,
  });
  const [customBrief, setCustomBrief] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckbox = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen pb-12 text-navy-900 font-sans selection:bg-blue-accent/20 text-xs sm:text-sm">
      {/* Action Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 flex items-center justify-between border-b border-grey-200 print:hidden mb-4">
        <div className="text-xs text-grey-500 flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-amber-500 flex-shrink-0" />
          <span>Double-blinded talent profiles. Anonymized to protect candidates&apos; identities.</span>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 text-xs font-semibold text-navy-700 hover:text-blue-accent border border-grey-200 rounded-full px-4 py-1.5 hover:bg-grey-50 transition-all cursor-pointer flex-shrink-0"
        >
          <Printer className="h-3.5 w-3.5" />
          Export PDF / Print
        </button>
      </div>

      {/* --- PAGE 1 CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 print:p-0 print:m-0 print:break-after-page">
        {/* --- EXECUTIVE HEADER --- */}
        <header className="border border-navy-950 p-4 sm:p-5 bg-grey-50 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 bg-red-600 text-white font-bold text-[9px] tracking-widest uppercase px-6 py-1 rotate-45 translate-x-8 translate-y-3 shadow-sm select-none">
            CONFIDENTIAL
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Logo className="scale-95" textClass="text-navy-950" />
              <div className="h-8 w-px bg-grey-300 hidden sm:block" />
              <div className="hidden sm:block">
                <span className="text-[9px] font-bold uppercase tracking-wider text-blue-accent block">Talent Pipeline</span>
                <span className="text-[10px] font-semibold text-navy-700 block">Market Intelligence</span>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <h1 className="font-heading text-base sm:text-lg font-bold tracking-tight text-navy-950 uppercase leading-none">
                Confidential Shortlist Matrix
              </h1>
              <p className="text-[10px] text-grey-500 mt-1 font-mono uppercase tracking-wider">
                Active Cohort Mapping &bull; GTM & Technical Talent
              </p>
            </div>
          </div>
        </header>

        {/* --- THREE-COLUMN SHORTLIST MATRIX --- */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 border border-navy-950 divide-y lg:divide-y-0 lg:divide-x divide-navy-950 bg-white">
          {CANDIDATES.map((cand, idx) => (
            <div key={cand.id} className="p-4 flex flex-col justify-between hover:bg-grey-50/30 transition-colors">
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between border-b border-grey-200 pb-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-accent"></span>
                    <span className="font-mono font-bold text-navy-950">{cand.id}</span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-blue-accent/10 text-blue-accent">
                    Candidate {String.fromCharCode(65 + idx)}
                  </span>
                </div>

                <div className="space-y-1 mb-3">
                  <h3 className="font-bold text-navy-950 text-sm leading-tight">{cand.alignment}</h3>
                  <div className="flex items-center gap-1 text-[11px] text-blue-accent font-medium font-mono">
                    <MapPin className="h-3 w-3" />
                    {cand.region}
                  </div>
                  <div className="text-[10px] uppercase font-mono font-bold text-grey-400">
                    {cand.progression}
                  </div>
                </div>

                {/* 2-Sentence Executive Summary */}
                <p className="text-xs text-navy-800 leading-relaxed font-medium bg-grey-50/70 p-3 rounded-lg border border-grey-100 mb-4 min-h-[72px]">
                  {cand.summary}
                </p>
              </div>

              {/* Compact Validated Metrics Table */}
              <div className="border border-grey-200 rounded-lg overflow-hidden mt-auto">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-grey-50 border-b border-grey-200 font-bold uppercase tracking-wider text-grey-500">
                      <th className="py-2 px-3">Parameters</th>
                      <th className="py-2 px-3">Validated Metric</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-grey-100">
                    {cand.metrics.map((metric, metricIdx) => (
                      <tr key={metricIdx}>
                        <td className="py-2 px-3 font-semibold text-navy-900">{metric.label}</td>
                        <td className="py-2 px-3 text-blue-accent font-mono font-medium">{metric.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Global Metadata Alert Strip */}
        <div className="bg-navy-900 text-white font-mono text-[9px] px-4 py-2 flex items-center justify-between border-x border-b border-navy-950">
          <span className="tracking-wide uppercase">METADATA STATUS: ACTIVE PIPELINE TARGETS VETTED FOR IMMEDIATE INTERVIEW</span>
          <span className="text-grey-400">PUBLISHED: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      {/* --- PAGE 2 CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 print:m-0 print:p-0 print:mt-4 print:break-inside-avoid">
        {/* --- SECTION III: STRATEGIC ALIGNMENT & ROADMAP --- */}
        <section className="bg-gradient-to-br from-navy-950 to-navy-900 rounded-2xl p-5 text-white relative overflow-hidden shadow-md">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 bg-blue-accent/10 rounded-full blur-2xl" />
          
          <div className="flex items-center gap-2 mb-3 relative z-10">
            <Sparkles className="h-4.5 w-4.5 text-blue-accent" />
            <h2 className="font-heading text-sm font-bold tracking-tight uppercase">
              Section III: Strategic Alignment
            </h2>
          </div>

          <p className="text-grey-300 text-xs leading-relaxed max-w-4xl relative z-10 mb-4">
            Every candidate within this specific cohort has been cross-referenced with your growth parameters. Vetting confirms immediate fit across three primary dimensions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 text-xs">
            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <Zap className="h-3.5 w-3.5 text-blue-accent" />
                <h4 className="font-bold text-white">Zero Baseline Ramp Time</h4>
              </div>
              <p className="text-grey-400 leading-normal">Familiar with target buyer personas and product types. Positioned to deliver pipeline or technical execution in under 30 days.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <Layers className="h-3.5 w-3.5 text-blue-accent" />
                <h4 className="font-bold text-white">Warm Network Assets</h4>
              </div>
              <p className="text-grey-400 leading-normal">Equipped with active relationships inside tier-1 target accounts and technology platforms, reducing initial reach friction.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <Award className="h-3.5 w-3.5 text-blue-accent" />
                <h4 className="font-bold text-white">Validated Performance</h4>
              </div>
              <p className="text-grey-400 leading-normal">Vetted through our dual-track mechanism: Ph.D.-led mathematical structure assessments or verified quota achievement sheets.</p>
            </div>
          </div>
        </section>

        {/* --- SECTION IV: SCREENING DIRECTIVES --- */}
        <section className="mt-5 border border-grey-200 rounded-2xl p-5 bg-white shadow-sm print:break-inside-avoid">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="h-4.5 w-4.5 text-blue-accent" />
              <h2 className="font-heading text-sm font-bold tracking-tight text-navy-900 uppercase">
                Section IV: Next Steps & Screening Directives
              </h2>
            </div>
            <span className="text-[10px] text-grey-400 font-mono uppercase bg-grey-50 px-2 py-0.5 rounded-full border border-grey-200">
              Interactive Checklist
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Interactive Checklist Elements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div 
                onClick={() => handleCheckbox("quota")}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 select-none ${
                  checklist.quota 
                    ? "border-blue-accent bg-blue-accent/5" 
                    : "border-grey-200 hover:border-grey-300 hover:bg-grey-50"
                }`}
              >
                <div className="mt-0.5">
                  {checklist.quota ? (
                    <CheckSquare className="h-4.5 w-4.5 text-blue-accent" />
                  ) : (
                    <Square className="h-4.5 w-4.5 text-grey-400" />
                  )}
                </div>
                <div>
                  <span className="font-bold text-navy-900 block text-xs">Quota & W-2 Earnings Verification</span>
                  <span className="text-[10px] text-grey-500 block mt-0.5">Request audited commission statements and sales performance histories.</span>
                </div>
              </div>

              <div 
                onClick={() => handleCheckbox("technical")}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 select-none ${
                  checklist.technical 
                    ? "border-blue-accent bg-blue-accent/5" 
                    : "border-grey-200 hover:border-grey-300 hover:bg-grey-50"
                }`}
              >
                <div className="mt-0.5">
                  {checklist.technical ? (
                    <CheckSquare className="h-4.5 w-4.5 text-blue-accent" />
                  ) : (
                    <Square className="h-4.5 w-4.5 text-grey-400" />
                  )}
                </div>
                <div>
                  <span className="font-bold text-navy-900 block text-xs">Expert Ph.D. Technical Code Review</span>
                  <span className="text-[10px] text-grey-500 block mt-0.5">Acquire deep-dive developer feedback and architecture review score sheets.</span>
                </div>
              </div>

              <div 
                onClick={() => handleCheckbox("procurement")}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 select-none ${
                  checklist.procurement 
                    ? "border-blue-accent bg-blue-accent/5" 
                    : "border-grey-200 hover:border-grey-300 hover:bg-grey-50"
                }`}
              >
                <div className="mt-0.5">
                  {checklist.procurement ? (
                    <CheckSquare className="h-4.5 w-4.5 text-blue-accent" />
                  ) : (
                    <Square className="h-4.5 w-4.5 text-grey-400" />
                  )}
                </div>
                <div>
                  <span className="font-bold text-navy-900 block text-xs">Procurement & Reference Vetting</span>
                  <span className="text-[10px] text-grey-500 block mt-0.5">Initiate blinded reference vetting checks with past reporting managers.</span>
                </div>
              </div>

              <div 
                onClick={() => handleCheckbox("reference")}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 select-none ${
                  checklist.reference 
                    ? "border-blue-accent bg-blue-accent/5" 
                    : "border-grey-200 hover:border-grey-300 hover:bg-grey-50"
                }`}
              >
                <div className="mt-0.5">
                  {checklist.reference ? (
                    <CheckSquare className="h-4.5 w-4.5 text-blue-accent" />
                  ) : (
                    <Square className="h-4.5 w-4.5 text-grey-400" />
                  )}
                </div>
                <div>
                  <span className="font-bold text-navy-900 block text-xs">Comp Range & Notice Verification</span>
                  <span className="text-[10px] text-grey-500 block mt-0.5">Ensure expectations align with equity schedules and current targets.</span>
                </div>
              </div>
            </div>

            {/* Custom Directives Textarea */}
            <div className="pt-1 print:hidden">
              <label htmlFor="custom-brief" className="block text-[10px] font-bold uppercase tracking-wider text-grey-500 mb-1">
                Additional Vetting Directives or Cohort Questions
              </label>
              <textarea
                id="custom-brief"
                rows={2}
                value={customBrief}
                onChange={(e) => setCustomBrief(e.target.value)}
                placeholder="Include custom directives for the cohort (e.g. comp constraints, start date targets)..."
                className="w-full px-3 py-2 rounded-xl border border-grey-200 text-xs focus:outline-none focus:border-blue-accent focus:ring-1 focus:ring-blue-accent/20 bg-white transition-all text-navy-900 placeholder:text-grey-400"
              />
            </div>

            {/* Submit CTA Block */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-grey-100 print:hidden">
              <div className="flex items-center gap-2">
                <UserCheck className="h-4.5 w-4.5 text-blue-accent flex-shrink-0" />
                <span className="text-[10px] text-grey-500">
                  Vetting directives route immediately to the managing partner for coordination.
                </span>
              </div>

              {!formSubmitted ? (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-2.5 bg-navy-900 text-white font-bold rounded-full hover:bg-blue-accent transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-xs"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full"></span>
                      Submitting Vetting...
                    </>
                  ) : (
                    <>
                      Request Cohort Screening
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              ) : (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full flex items-center gap-1.5 font-semibold text-xs">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Directives Received & Vetting Scheduled.
                </div>
              )}
            </div>
          </form>
        </section>

        {/* --- FOOTER --- */}
        <footer className="mt-8 pt-4 border-t border-grey-200 text-center font-mono text-[9px] text-grey-500 space-y-3 print:break-inside-avoid">
          <p className="leading-relaxed">
            CONFIDENTIALITY NOTICE: This document contains proprietary shortlist intelligence. Unsanctioned distribution is strictly prohibited under the active search agreement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 pt-1 text-[10px] font-semibold text-navy-700">
            <span>&copy; {new Date().getFullYear()} The Kas Group. All Rights Reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <Link href="https://www.thekasgroup.com" className="text-blue-accent hover:underline">
              www.thekasgroup.com
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
