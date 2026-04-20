"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertTriangle, Clock, TrendingDown, MoveRight, Calculator, Users, Shield, Target } from "lucide-react";

export default function PipCalculator() {
  // --- State for Calculator Inputs ---
  const [targetQuota, setTargetQuota] = useState(100000); // Monthly Rep Quota ($)
  const [attainment, setAttainment] = useState(40); // Current Quota Attainment (%)
  // const [salesCycle, setSalesCycle] = useState(3); // Average Sales Cycle (Months)
  const [pipDuration, setPipDuration] = useState(60); // PIP Duration (Days)
  const [timeToHire, setTimeToHire] = useState(60); // Time to Hire Replacement (Days)
  const [rampUpMonths, setRampUpMonths] = useState(3); // New Hire Ramp-Up (Months)
  const [userEmail, setUserEmail] = useState("");

  // --- Derived Values ---
  const [pipLoss, setPipLoss] = useState(0);
  const [emptyChairLoss, setEmptyChairLoss] = useState(0);
  const [rampLoss, setRampLoss] = useState(0);
  const [totalLeak, setTotalLeak] = useState(0);

  // --- Calculation Logic ---
  useEffect(() => {
    // 1. Quota lost during PIP (Loss is the gap: 100% - attainment%)
    const dailyQuota = targetQuota / 30;
    const calcPipLoss = (dailyQuota * pipDuration) * ((100 - attainment) / 100);

    // 2. Quota lost during Empty Chair
    const calcEmptyChairLoss = dailyQuota * timeToHire;

    // 3. Quota gap during Ramp-up (assuming 50% effectiveness during ramp period)
    const calcRampLoss = (targetQuota * rampUpMonths) * 0.5;

    // Totals
    setPipLoss(calcPipLoss);
    setEmptyChairLoss(calcEmptyChairLoss);
    setRampLoss(calcRampLoss);
    setTotalLeak(calcPipLoss + calcEmptyChairLoss + calcRampLoss);
  }, [targetQuota, attainment, pipDuration, timeToHire, rampUpMonths]);

  // --- Formatting Helpers ---
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Math.round(val));

  // --- Form Handler ---
  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;
    
    // Assemble the email body with the inputted email 
    const subject = encodeURIComponent("Free Sales Territory Audit Request");
    const body = encodeURIComponent(`Hi Chris,\n\nI was running the Territory Optimization Calculator on the website and would like to request a free sales territory audit.\n\nPlease contact me via: ${userEmail}\n\nThanks!`);
    
    // Trigger local email client
    window.location.href = `mailto:chris@thekasgroup.com?subject=${subject}&body=${body}`;
  };

  // --- Timeline Chart Calculation ---
  const totalDays = pipDuration + timeToHire + (rampUpMonths * 30);
  const pipPct = (pipDuration / totalDays) * 100;
  const emptyPct = (timeToHire / totalDays) * 100;
  const rampPct = ((rampUpMonths * 30) / totalDays) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      {/* Dark Hero Section */}
      <section className="relative px-6 pt-24 pb-32 md:pt-32 md:pb-40 lg:px-8 bg-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
               Swap Out <br className="hidden md:block"/> Underperforming <br className="hidden md:block"/> Sales Talent <br className="hidden md:block"/> Without Leaving <br className="hidden md:block"/> Territories Exposed
            </h1>
            <p className="mt-8 text-lg border-l-[3px] border-slate-700 pl-6 text-slate-300 leading-relaxed max-w-xl">
              Use this interactive calculator to measure the true financial drain of an underperforming rep, and discover how a targeted, confidential search can upgrade your roster with zero downtime.
            </p>
            <div className="mt-10">
              <a 
                href="#calculator"
                className="inline-flex flex-row items-center gap-3 px-8 py-5 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 hover:-translate-y-1"
              >
                Run the Sales Territory Optimization Calculator
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-visible transform lg:translate-x-4 lg:rotate-1 hover:rotate-0 transition-transform duration-500">
             <InteractiveHeroChart />
          </div>

        </div>
      </section>

      {/* Main Calculator Section */}
      <section id="calculator" className="py-12 bg-white relative z-20 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
            {/* Left Column: Sliders */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-slate-50 border-r border-slate-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Calculator className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Configure Scenario</h2>
              </div>

              <div className="space-y-8">
                {/* Slider 1 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">Monthly Target Quota ($)</label>
                    <span className="font-bold text-blue-600">{formatCurrency(targetQuota)}</span>
                  </div>
                  <input 
                    type="range" min="10000" max="300000" step="5000" 
                    value={targetQuota} onChange={(e) => setTargetQuota(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Attainment Slider */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">Current Rep Attainment (%)</label>
                    <span className="font-bold text-blue-600">{attainment}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="100" step="5" 
                    value={attainment} onChange={(e) => setAttainment(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <p className="text-xs text-slate-500 mt-2">Adjusts the &quot;Loss during PIP&quot; gap.</p>
                </div>

                {/* Slider 2 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">PIP Duration (Days)</label>
                    <span className="font-bold text-blue-600">{pipDuration} Days</span>
                  </div>
                  <input 
                    type="range" min="30" max="120" step="15" 
                    value={pipDuration} onChange={(e) => setPipDuration(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Slider 3 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">Time to Hire Replacement (Days)</label>
                    <span className="font-bold text-blue-600">{timeToHire} Days</span>
                  </div>
                  <input 
                    type="range" min="30" max="180" step="15" 
                    value={timeToHire} onChange={(e) => setTimeToHire(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <p className="text-xs text-slate-500 mt-2">Time from termination to new hire start date.</p>
                </div>

                {/* Slider 4 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-slate-700">New Hire Ramp-Up (Months)</label>
                    <span className="font-bold text-blue-600">{rampUpMonths} Months</span>
                  </div>
                  <input 
                    type="range" min="1" max="12" step="1" 
                    value={rampUpMonths} onChange={(e) => setRampUpMonths(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <p className="text-xs text-slate-500 mt-2">Assuming 50% effectiveness during ramp period.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Output */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center">
              <h3 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-2">Total Revenue Leak</h3>
              <div className="text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter">
                {formatCurrency(totalLeak)}
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="flex items-center gap-3">
                    <TrendingDown className="h-5 w-5 text-red-500" />
                    <span className="font-semibold text-slate-700">Loss during PIP</span>
                  </div>
                  <span className="font-bold text-red-600">{formatCurrency(pipLoss)}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="font-semibold text-slate-700">Empty Chair Loss</span>
                  </div>
                  <span className="font-bold text-orange-600">{formatCurrency(emptyChairLoss)}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                  <div className="flex items-center gap-3">
                    <MoveRight className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold text-slate-700">Ramp-up Gap Loss</span>
                  </div>
                  <span className="font-bold text-yellow-600">{formatCurrency(rampLoss)}</span>
                </div>
              </div>

              {/* Timeline Visualization */}
              <div>
                <h4 className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Revenue Recovery Timeline</h4>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
                  <div style={{ width: `${pipPct}%` }} className="bg-red-500 h-full transition-all duration-500" title="PIP Period" />
                  <div style={{ width: `${emptyPct}%` }} className="bg-orange-500 h-full transition-all duration-500" title="Empty Chair" />
                  <div style={{ width: `${rampPct}%` }} className="bg-yellow-400 h-full transition-all duration-500" title="Ramp Up" />
                </div>
                <div className="flex justify-between text-xs font-semibold text-slate-400 mt-2">
                  <span>Start PIP</span>
                  <span>Fully Ramped ({totalDays} Days)</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* The Death Spiral */}
          <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 mb-6">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">The Death Spiral</h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Once a representative goes on a PIP, expect an immediate halt in consistent pipeline generation. Their daily focus shifts to surviving minimum activity metrics, or worse, interviewing for their next role on your dime. Factor in the typical 60-day cycle to source and recruit a replacement, and that territory has effectively flatlined for an entire fiscal quarter.
            </p>
          </div>

          {/* The Bench Solution */}
          <div className="p-10 rounded-3xl bg-blue-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500/30 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">The Bench Solution</h3>
              <p className="text-blue-100 leading-relaxed text-lg mb-6">
                What if you didn&apos;t wait until the PIP resulted in a termination to start recruiting? By maintaining a &quot;warm bench&quot; of pre-vetted, top-tier talent, you can slash the Empty Chair cost by over 50%. A ready-to-hire candidate network means no gaps in territory coverage.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Confidential Upgrade Section (Dark Mode) */}
      <section className="py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>The Kas Group Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Confidential Sales Talent Upgrade</h2>
            <p className="text-slate-300 leading-relaxed text-lg mb-8">
              The Kas Group conducts confidential searches while the current rep continues covering the territory. Experience a seamless transition without the operational risks of standard replacement strategies.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Territory coverage remains completely intact",
                "Pipeline momentum continues without disruption",
                "Leadership retains total control over the timing of change",
                "Headcount approvals remain protected and secure",
                "Upgrade conducted in as little as 30 days*"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Target className="h-4 w-4" />
                  </div>
                  <span className="text-slate-300 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm italic">
              * if all stakeholders in the interviewing process conduct interviews in a timely manner
            </p>
          </div>

          {/* Right Side: Visual Card */}
          <div className="relative mt-8 lg:mt-0">
            {/* Pop-out Badge */}
            <div className="absolute -top-4 md:-top-6 -right-2 md:-right-6 z-20 bg-blue-600 text-white font-bold px-6 py-2 rounded-xl shadow-xl transform rotate-3 border border-blue-500">
              Zero Operational Risk
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-700 shadow-2xl relative z-10 w-full">
              <h3 className="text-2xl font-bold text-white mb-10">Traditional vs. Confidential</h3>
              
              <div className="space-y-10">
                {/* Traditional Bar */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-slate-400 font-medium">Traditional Replacement</span>
                    <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full">3-6 Months Vacant</span>
                  </div>
                  <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden shadow-inner">
                    <div className="w-1/4 h-full bg-red-500 rounded-full" />
                  </div>
                </div>

                {/* divider */}
                <div className="h-px w-full bg-slate-700" />

                {/* Confidential Bar */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-white font-bold">The Kas Group Upgrade</span>
                    <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full">Continuous Coverage</span>
                  </div>
                  <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden shadow-inner">
                    <div className="w-full h-full bg-blue-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Stop Bleeding Revenue.</h2>
          <p className="text-xl text-slate-600 mb-10">
            Let us audit your territory performance and introduce you to our elite network of pre-vetted sales professionals before you need them.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto items-center justify-center" onSubmit={handleAuditSubmit}>
            <input 
              type="email" 
              placeholder="Your Work Email" 
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full sm:w-2/3 px-6 py-4 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg"
              required
            />
            <button 
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
            >
              Get Free Audit
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
          <p className="text-slate-400 text-sm mt-4">100% confidential. We don&apos;t share your data.</p>
        </div>
      </section>

    </div>
  );
}

function InteractiveHeroChart() {
  const [isConfidential, setIsConfidential] = useState(true);

  return (
    <div className="w-full h-full min-h-[350px] bg-slate-800 p-8 flex flex-col relative rounded-2xl overflow-visible shadow-2xl border border-slate-700 mt-8 lg:mt-0">
       {/* chart title / toggle */}
       <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-4 mb-10 relative z-20">
          <h3 className="text-white font-bold text-lg">Revenue Trajectory Example</h3>
          <div className="flex bg-slate-900 rounded-lg p-1 shadow-inner">
            <button 
              onClick={() => setIsConfidential(false)}
              className={`px-4 py-2 text-sm rounded-md transition-colors font-medium whitespace-nowrap ${!isConfidential ? 'bg-red-500/20 text-red-400' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Traditional
            </button>
            <button 
              onClick={() => setIsConfidential(true)}
              className={`px-4 py-2 text-sm rounded-md transition-colors font-medium whitespace-nowrap ${isConfidential ? 'bg-blue-500/20 text-blue-400' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Confidential Upgrade
            </button>
          </div>
       </div>

       {/* SVG chart container */}
       <div className="flex-1 relative w-full h-48 mt-4">
         {/* grid lines */}
         <div className="absolute inset-0 flex flex-col justify-between z-0">
           {[0,1,2,3,4].map(i => <div key={i} className="w-full h-px bg-slate-700/50" />)}
         </div>

         {/* X axis labels */}
         <div className="absolute -bottom-8 left-0 w-full flex justify-between text-xs font-semibold text-slate-500 px-2 pb-2">
           <span>Month 1</span>
           <span>Month 2</span>
           <span>Month 3</span>
           <span>Month 4</span>
           <span>Month 5</span>
         </div>

         <div className="absolute inset-0 w-full h-full z-10 bottom-2">
           <svg className="w-full h-[120%] overflow-visible -mt-[10%]" preserveAspectRatio="none" viewBox="0 0 100 100">
             
             {/* Path for Traditional */}
             <path 
               d="M 0 40 L 25 60 L 40 90 L 60 90 L 80 60 L 100 20" 
               fill="none" 
               stroke="rgb(248 113 113)" 
               strokeWidth="4"
               strokeLinecap="round"
               strokeLinejoin="round"
               className={`transition-all duration-700 ease-in-out ${isConfidential ? 'opacity-10 stroke-[2]' : 'opacity-100'}`}
             />
             
             {/* Path for Confidential */}
             <path 
               d="M 0 40 L 25 50 L 50 45 L 75 30 L 100 10" 
               fill="none" 
               stroke="rgb(59 130 246)" 
               strokeWidth="4"
               strokeLinecap="round"
               strokeLinejoin="round"
               className={`transition-all duration-700 ease-in-out ${!isConfidential ? 'opacity-10 stroke-[2]' : 'opacity-100'}`}
             />

             {/* Highlight Nodes */}
             {!isConfidential && (
               <circle cx="50" cy="90" r="3" fill="rgb(248 113 113)" className="animate-pulse" />
             )}
             {isConfidential && (
               <circle cx="50" cy="45" r="3" fill="rgb(59 130 246)" className="animate-pulse" />
             )}
           </svg>
         </div>

         {/* Callouts */}
         <div className={`absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-30 ${isConfidential ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
           <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap mt-4 border border-red-400">
             Empty Chair Gap
           </div>
         </div>

         <div className={`absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-30 ${!isConfidential ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
           <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap border border-blue-400">
             Seamless Transition
           </div>
         </div>
       </div>

    </div>
  )
}
