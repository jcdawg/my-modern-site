"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Clock, TrendingDown, Users, Target } from "lucide-react";

type Scenario = "new-category" | "experienced-new" | "exact-match";

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

export default function RampTimeCalculatorClient({ children }: { children?: React.ReactNode }) {
  const [scenario, setScenario] = useState<Scenario>("experienced-new");
  const [monthlyQuota, setMonthlyQuota] = useState(100000);
  const [onboardingWeeks, setOnboardingWeeks] = useState(3);
  const [experienceYears, setExperienceYears] = useState(5);
  const [demosToClose, setDemosToClose] = useState(8);
  const [userEmail, setUserEmail] = useState("");

  const [weeksToFirstDeal, setWeeksToFirstDeal] = useState(0);
  const [weeksToFull, setWeeksToFull] = useState(0);
  const [rampLeak, setRampLeak] = useState(0);
  const [cumulativeLeak, setCumulativeLeak] = useState(0);

  useEffect(() => {
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

    setWeeksToFirstDeal(Math.round(firstDealWeeks));
    setWeeksToFull(roundedWeeks);
    setRampLeak(leak);
    setCumulativeLeak(leak);
  }, [scenario, monthlyQuota, onboardingWeeks, experienceYears, demosToClose]);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Math.round(val));

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;
    const subject = encodeURIComponent("Ramp Time Calculator Follow-up");
    const body = encodeURIComponent(
      `Hi Chris,\n\nI ran the Ramp Time Calculator on your site.\n\nScenario: ${SCENARIOS[scenario].label}\nMonthly quota: ${formatCurrency(monthlyQuota)}\nWeeks to first deal: ${weeksToFirstDeal}\nWeeks to full: ${weeksToFull}\nEstimated ramp leak: ${formatCurrency(rampLeak)}\n\nPlease contact me at: ${userEmail}\n\nThanks!`
    );
    window.location.href = `mailto:chris@thekasgroup.com?subject=${subject}&body=${body}`;
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
                className="inline-flex flex-row items-center gap-3 px-8 py-5 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 hover:-translate-y-1"
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
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
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
                            ? "border-blue-500 bg-blue-50"
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
                    <span className="font-bold text-blue-600">{formatCurrency(monthlyQuota)}</span>
                  </div>
                  <input
                    type="range"
                    min="20000"
                    max="300000"
                    step="5000"
                    value={monthlyQuota}
                    onChange={(e) => setMonthlyQuota(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">Onboarding Length (Weeks)</label>
                    <span className="font-bold text-blue-600">{onboardingWeeks} weeks</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={onboardingWeeks}
                    onChange={(e) => setOnboardingWeeks(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">Prior Sales Experience (Years)</label>
                    <span className="font-bold text-blue-600">{experienceYears} years</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">Avg Demos / Calls to Close</label>
                    <span className="font-bold text-blue-600">{demosToClose}</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="20"
                    step="1"
                    value={demosToClose}
                    onChange={(e) => setDemosToClose(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
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
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-slate-700">Weeks to first deal</span>
                  </div>
                  <span className="font-bold text-blue-600">{weeksToFirstDeal}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-slate-500" />
                    <span className="font-semibold text-slate-700">Weeks to full productivity</span>
                  </div>
                  <span className="font-bold text-slate-700">{weeksToFull}</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Live cumulative leak</h4>
                <div className="text-4xl font-bold text-red-600">{formatCurrency(cumulativeLeak)}</div>
                <p className="text-xs text-slate-500 mt-1">Updates as you change inputs. Longer ramp = bigger gap.</p>
              </div>

              <form onSubmit={handleAuditSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email for a follow-up"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors"
                >
                  Get this scenario reviewed
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-2 text-center">100% confidential. We don't share your data.</p>
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
