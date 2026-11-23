"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2, Clock, TrendingDown, Users, Target, XCircle } from "lucide-react";
import { FORMSPREE_ENDPOINT, isFormspreeConfigured } from "@/lib/contact-config";
import {
  fireContactFormConversion,
  getFirstTouch,
  leadSourceFormFields,
} from "@/lib/lead-source";

type Scenario = "new-category" | "experienced-new" | "exact-match";
type FormStatus = "idle" | "submitting" | "success" | "error";

const SCENARIOS: Record<Scenario, { label: string; startEff: number; rampMonths: number; description: string }> = {
  "new-category": {
    label: "First-time in this category",
    startEff: 0.20,
    rampMonths: 7,
    description: "Never sold this product type. Starts low, longer curve.",
  },
  "experienced-new": {
    label: "Experienced, new to your product",
    startEff: 0.35,
    rampMonths: 5,
    description: "Sold similar, but not this exact offer. Faster start.",
  },
  "exact-match": {
    label: "Sold this exact category before",
    startEff: 0.55,
    rampMonths: 3.5,
    description: "Knows the motion and buyer. Shortest ramp.",
  },
};

// Logistic S-curve. Steepest around 35% of the way through the ramp,
// so the first stretch stays near the start, then it jumps, then it tails to 100%.
const CURVE_STEEPNESS = 8;
const CURVE_MIDPOINT = 0.35;

const EMAIL_EMPTY_ERROR = "Please enter your email.";
const EMAIL_INVALID_ERROR = "Please enter a valid email.";

function logistic(progress: number) {
  return 1 / (1 + Math.exp(-CURVE_STEEPNESS * (progress - CURVE_MIDPOINT)));
}

function rampEffectiveness(startEff: number, rampProgress: number) {
  const clamped = Math.min(1, Math.max(0, rampProgress));
  const floor = logistic(0);
  const ceiling = logistic(1);
  const t = (logistic(clamped) - floor) / (ceiling - floor);
  return startEff + (1 - startEff) * t;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-accent disabled:opacity-60 disabled:pointer-events-none";

export default function RampTimeCalculatorClient({ children }: { children?: React.ReactNode }) {
  const [scenario, setScenario] = useState<Scenario>("experienced-new");
  const [monthlyQuota, setMonthlyQuota] = useState(100000);
  const [onboardingWeeks, setOnboardingWeeks] = useState(3);
  const [experienceYears, setExperienceYears] = useState(5);
  const [demosToClose, setDemosToClose] = useState(8);
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const { weeksToFirstDeal, weeksToFull, rampLeak } = useMemo(() => {
    const preset = SCENARIOS[scenario];
    const expFactor = Math.max(0.7, 1 - (experienceYears * 0.03));
    const demoFactor = Math.max(0.8, 1 + ((demosToClose - 8) * 0.04));
    const adjustedRampMonths = preset.rampMonths * expFactor * demoFactor;
    const rampWeeks = adjustedRampMonths * 4.33;
    const totalWeeks = onboardingWeeks + rampWeeks;
    const roundedWeeks = Math.max(1, Math.round(totalWeeks));

    const firstDealWeeks = onboardingWeeks + Math.max(2, Math.ceil(demosToClose / (2.5 * preset.startEff)));

    let actualProduction = 0;
    let fullProduction = 0;
    const weeklyFull = monthlyQuota / 4.33;
    for (let w = 1; w <= roundedWeeks; w++) {
      const eff = w > onboardingWeeks
        ? rampEffectiveness(preset.startEff, (w - onboardingWeeks) / rampWeeks)
        : 0;
      actualProduction += weeklyFull * eff;
      fullProduction += weeklyFull;
    }
    const leak = Math.max(0, fullProduction - actualProduction);

    return {
      weeksToFirstDeal: Math.round(firstDealWeeks),
      weeksToFull: roundedWeeks,
      rampLeak: leak,
    };
  }, [scenario, monthlyQuota, onboardingWeeks, experienceYears, demosToClose]);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Math.round(val));

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = userEmail.trim();
    if (!email) {
      setEmailError(EMAIL_EMPTY_ERROR);
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError(EMAIL_INVALID_ERROR);
      return;
    }
    setEmailError("");

    if (!isFormspreeConfigured()) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          _replyto: email,
          _subject: "Ramp Time Calculator Follow-up",
          scenario: SCENARIOS[scenario].label,
          monthly_quota: formatCurrency(monthlyQuota),
          onboarding_weeks: String(onboardingWeeks),
          experience_years: String(experienceYears),
          demos_to_close: String(demosToClose),
          weeks_to_first_deal: String(weeksToFirstDeal),
          weeks_to_full: String(weeksToFull),
          estimated_ramp_leak: formatCurrency(rampLeak),
          ...leadSourceFormFields(getFirstTouch()),
        }),
      });
      if (res.ok) {
        fireContactFormConversion(getFirstTouch(), { form_name: "ramp_time_calculator" });
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <section className="relative px-6 pt-24 pb-32 md:pt-32 md:pb-40 lg:px-8 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <Link href="/tools" className="inline-block text-sm font-semibold text-blue-400 hover:text-blue-300 mb-4">
              More hiring tools
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              How Long Until <br className="hidden md:block" /> Your New Hire <br className="hidden md:block" /> Actually Produces?
            </h1>
            <p className="mt-8 text-lg border-l-[3px] border-slate-700 pl-6 text-slate-300 leading-relaxed max-w-xl">
              Estimate weeks to first deal and full quota. See the revenue gap while they ramp. Every company is different — adjust the numbers to your motion.
            </p>
            <div className="mt-10">
              <a
                href="#calculator"
                className={`${primaryButton} h-14 px-8 text-lg shadow-lg shadow-blue-900/50`}
              >
                Run the Ramp Time Calculator
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-visible transform lg:translate-x-4 lg:rotate-1 hover:rotate-0 transition-transform duration-500 bg-slate-800 p-8 border border-slate-700">
            <div className="text-center">
              <Clock className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <p className="text-3xl font-bold text-white">{weeksToFull} weeks</p>
              <p className="text-slate-400 mt-2">to full productivity</p>
              <p className="text-xl font-semibold text-blue-300 mt-4">{formatCurrency(rampLeak)} leak</p>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-12 bg-white relative z-20 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-slate-50 border-r border-slate-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-accent">
                  <Calculator className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Configure Scenario</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="font-semibold text-slate-700 block mb-3">Experience scenario</label>
                  <div className="space-y-2">
                    {(Object.keys(SCENARIOS) as Scenario[]).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setScenario(key)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${
                          scenario === key
                            ? "border-blue-accent bg-blue-accent/5"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="font-semibold text-slate-900">{SCENARIOS[key].label}</div>
                        <div className="text-xs text-slate-500 mt-1">{SCENARIOS[key].description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">Monthly Quota ($)</label>
                    <span className="font-bold text-blue-accent">{formatCurrency(monthlyQuota)}</span>
                  </div>
                  <input
                    type="range"
                    min="20000"
                    max="300000"
                    step="5000"
                    value={monthlyQuota}
                    onChange={(e) => setMonthlyQuota(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-accent"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">Onboarding Length (Weeks)</label>
                    <span className="font-bold text-blue-accent">{onboardingWeeks} weeks</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={onboardingWeeks}
                    onChange={(e) => setOnboardingWeeks(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-accent"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">Prior Sales Experience (Years)</label>
                    <span className="font-bold text-blue-accent">{experienceYears} years</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-accent"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">Avg Demos / Calls to Close</label>
                    <span className="font-bold text-blue-accent">{demosToClose}</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="20"
                    step="1"
                    value={demosToClose}
                    onChange={(e) => setDemosToClose(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-accent"
                  />
                  <p className="text-xs text-slate-500 mt-2">Higher number = longer cycle, slower early production.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center">
              <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-2">Estimated Ramp Cost</h3>
              <div className="text-6xl lg:text-7xl font-extrabold text-slate-900 mb-2 tracking-tighter">
                {formatCurrency(rampLeak)}
              </div>
              <p className="text-sm text-slate-500 mb-6">Revenue gap vs a fully productive rep over the ramp window</p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-accent" />
                    <span className="font-semibold text-slate-700">Weeks to first deal</span>
                  </div>
                  <span className="font-bold text-blue-accent">{weeksToFirstDeal}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-slate-500" />
                    <span className="font-semibold text-slate-700">Weeks to full productivity</span>
                  </div>
                  <span className="font-bold text-slate-700">{weeksToFull}</span>
                </div>
              </div>

              {formStatus === "success" ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-4 flex items-center gap-3 font-semibold text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  Thanks! Your message is on its way. We&apos;ll get back to you within one business day.
                </div>
              ) : (
                <form onSubmit={handleAuditSubmit} noValidate className="space-y-3">
                  {formStatus === "error" && (
                    <div className="rounded-2xl bg-red-50 border border-red-200 text-red-800 px-4 py-4 flex items-center gap-3 font-semibold text-sm">
                      <XCircle className="h-5 w-5 shrink-0 text-red-600" />
                      Something went wrong sending your message. Please email us directly at chris@thekasgroup.com.
                    </div>
                  )}
                  <div>
                    <label htmlFor="ramp-follow-up-email" className="sr-only">
                      Your email for a follow-up
                    </label>
                    <input
                      id="ramp-follow-up-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      aria-invalid={emailError ? true : undefined}
                      aria-describedby={emailError ? "ramp-email-error" : undefined}
                      placeholder="Your email for a follow-up"
                      value={userEmail}
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-accent ${
                        emailError ? "border-red-400" : "border-slate-300"
                      }`}
                    />
                    {emailError ? (
                      <p id="ramp-email-error" role="alert" className="mt-2 text-sm font-medium text-red-700">
                        {emailError}
                      </p>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className={`${primaryButton} h-12 w-full`}
                  >
                    {formStatus === "submitting" ? "Sending…" : "Get this scenario reviewed"}
                  </button>
                  <p className="text-xs text-slate-500 mt-2 text-center">100% confidential. We don&apos;t share your data.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {children}

      <section className="py-24 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
              <TrendingDown className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">The Ramp Gap</h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              A new hire produces little or nothing during onboarding, then climbs. That gap against a fully ramped rep is pure quota you do not collect. On enterprise seats it compounds fast.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-blue-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500/30 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Hire for the motion</h3>
              <p className="text-blue-100 leading-relaxed text-lg mb-6">
                Matching prior experience to your product category and ACV shortens the curve more than generic sales skill. That is the difference between 3 months and 7.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
