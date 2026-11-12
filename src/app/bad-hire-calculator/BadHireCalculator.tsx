"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator as CalculatorIcon, Clock, Hourglass, Receipt, Route } from "lucide-react";
import {
    PRESETS,
    SALESFUEL_URL,
    SURVEY_AVERAGE,
    compareLine,
    computeHireCost,
    money,
    plainNumber,
    sameInputs,
    summaryText,
    type HireInputs,
    type PresetId,
} from "@/lib/bad-hire";

type FieldProps = {
    id: string;
    label: string;
    hint?: React.ReactNode;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
    display: string;
};

function Field({ id, label, hint, value, min, max, step, onChange, display }: FieldProps) {
    const sliderMax = Math.max(max, value);
    return (
        <div>
            <div className="mb-2 flex items-baseline justify-between gap-3">
                <label htmlFor={id} className="font-semibold text-slate-700">
                    {label}
                </label>
                <span className="font-bold text-blue-600 tabular-nums">{display}</span>
            </div>
            <input
                id={id}
                type="range"
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-300 accent-blue-600"
                min={min}
                max={sliderMax}
                step={step}
                value={Math.min(value, sliderMax)}
                aria-valuetext={display}
                onChange={(event) => onChange(event.target.valueAsNumber)}
            />
            {hint ? <p className="mt-2 text-xs text-slate-500">{hint}</p> : null}
        </div>
    );
}

function share(part: number, total: number) {
    if (total <= 0) return 0;
    return Math.round((part / total) * 100);
}

const salesFuelLink = "font-semibold text-blue-accent hover:underline";

export default function BadHireCalculator() {
    const baseId = useId();
    const [preset, setPreset] = useState<PresetId>("ae");
    const [inputs, setInputs] = useState<HireInputs>(PRESETS.ae.inputs);
    const [otherText, setOtherText] = useState("0");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const timer = window.setTimeout(() => setCopied(false), 2000);
        return () => window.clearTimeout(timer);
    }, [copied]);

    const result = computeHireCost(inputs);
    const active = PRESETS[preset];
    const adjusted = !sameInputs(inputs, active.inputs);
    const scale = Math.max(result.total, SURVEY_AVERAGE, 1);

    function patch(partial: Partial<HireInputs>) {
        setInputs((current) => ({ ...current, ...partial }));
    }

    function applyPreset(id: PresetId) {
        setPreset(id);
        setInputs(PRESETS[id].inputs);
        setOtherText(String(PRESETS[id].inputs.otherCosts));
    }

    function onOtherChange(text: string) {
        const cleaned = text.replace(/[^0-9.]/g, "");
        setOtherText(cleaned);
        const n = Number.parseFloat(cleaned);
        patch({ otherCosts: Number.isFinite(n) && n > 0 ? n : 0 });
    }

    async function copySummary() {
        try {
            await navigator.clipboard.writeText(summaryText(inputs, result));
            setCopied(true);
        } catch {
            setCopied(false);
        }
    }

    const rows = [
        {
            key: "ramp",
            label: "Ramp time",
            amount: result.ramp,
            icon: Hourglass,
            card: "border-red-100 bg-red-50",
            iconClass: "text-red-500",
            amountClass: "text-red-600",
        },
        {
            key: "lostRevenue",
            label: "Lost revenue",
            amount: result.lostRevenue,
            icon: Route,
            card: "border-orange-100 bg-orange-50",
            iconClass: "text-orange-500",
            amountClass: "text-orange-600",
        },
        {
            key: "manager",
            label: "Manager hours",
            amount: result.manager,
            icon: Clock,
            card: "border-yellow-100 bg-yellow-50",
            iconClass: "text-yellow-600",
            amountClass: "text-yellow-600",
        },
        {
            key: "other",
            label: "Other costs",
            amount: result.other,
            icon: Receipt,
            card: "border-slate-200 bg-slate-50",
            iconClass: "text-slate-500",
            amountClass: "text-slate-700",
        },
    ] as const;

    return (
        <div id="calculator" className="flex scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl lg:flex-row">
            <div className="w-full border-slate-200 bg-slate-50 p-6 sm:p-8 lg:w-1/2 lg:border-r lg:p-12">
                <div className="mb-8 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                            <CalculatorIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Configure scenario</h2>
                    </div>
                    {adjusted ? (
                        <button type="button" className="text-sm font-semibold text-blue-accent hover:underline" onClick={() => applyPreset(preset)}>
                            Reset
                        </button>
                    ) : null}
                </div>

                <div role="radiogroup" aria-label="Starting point" className="mb-8 flex rounded-lg bg-slate-900 p-1 shadow-inner">
                    {(Object.keys(PRESETS) as PresetId[]).map((id) => {
                        const selected = id === preset;
                        return (
                            <button
                                key={id}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                onClick={() => applyPreset(id)}
                                className={
                                    selected
                                        ? "min-h-11 flex-1 rounded-md bg-blue-500/20 px-2 py-2 text-sm font-medium whitespace-nowrap text-blue-400"
                                        : "min-h-11 flex-1 rounded-md px-2 py-2 text-sm font-medium whitespace-nowrap text-slate-400 hover:text-slate-200"
                                }
                            >
                                {id === "enterprise" ? "Enterprise" : PRESETS[id].label}
                            </button>
                        );
                    })}
                </div>

                <div className="space-y-8">
                    <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">Ramp time</p>
                    <Field
                        id={`${baseId}-seat`}
                        label="Monthly cost of the seat"
                        hint="Fully loaded cost while they were here. Your number, not a search fee."
                        value={inputs.monthlySeatCost}
                        min={0}
                        max={40_000}
                        step={250}
                        display={money(inputs.monthlySeatCost)}
                        onChange={(monthlySeatCost) => patch({ monthlySeatCost })}
                    />
                    <Field
                        id={`${baseId}-months`}
                        label="Months in the seat"
                        value={inputs.monthsInSeat}
                        min={0}
                        max={18}
                        step={0.5}
                        display={`${plainNumber(inputs.monthsInSeat, 1)} Months`}
                        onChange={(monthsInSeat) => patch({ monthsInSeat })}
                    />
                    <Field
                        id={`${baseId}-attain`}
                        label="Attainment while they were here"
                        hint={
                            <>
                                <a href={SALESFUEL_URL} target="_blank" rel="noopener noreferrer" className={salesFuelLink}>
                                    SalesFuel
                                </a>{" "}
                                put struggling hires near 28% of quota before a manager acted. Use yours.
                            </>
                        }
                        value={inputs.attainmentPct}
                        min={0}
                        max={100}
                        step={1}
                        display={`${plainNumber(inputs.attainmentPct, 0)}%`}
                        onChange={(attainmentPct) => patch({ attainmentPct })}
                    />

                    <div className="flex items-center justify-between gap-4">
                        <span id={`${baseId}-restart-label`} className="font-semibold text-slate-700">
                            Count the replacement ramp
                        </span>
                        <button
                            type="button"
                            role="switch"
                            aria-checked={inputs.includeRestart}
                            aria-labelledby={`${baseId}-restart-label`}
                            onClick={() => patch({ includeRestart: !inputs.includeRestart })}
                            className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-accent ${inputs.includeRestart ? "bg-blue-accent" : "bg-slate-300"}`}
                        >
                            <span
                                className={`block size-5 rounded-full bg-white transition-transform duration-150 ${inputs.includeRestart ? "translate-x-6" : "translate-x-1"}`}
                            />
                        </button>
                    </div>

                    {inputs.includeRestart ? (
                        <>
                            <Field
                                id={`${baseId}-next`}
                                label="Months to ramp the replacement"
                                hint="Leave this on if you will refill the seat."
                                value={inputs.restartRampMonths}
                                min={0}
                                max={18}
                                step={0.5}
                                display={`${plainNumber(inputs.restartRampMonths, 1)} Months`}
                                onChange={(restartRampMonths) => patch({ restartRampMonths })}
                            />
                            <Field
                                id={`${baseId}-eff`}
                                label="Production during a normal ramp"
                                hint="The Sales Territory Optimization Calculator uses 50% unless you change it."
                                value={inputs.rampEffectivenessPct}
                                min={0}
                                max={100}
                                step={5}
                                display={`${plainNumber(inputs.rampEffectivenessPct, 0)}%`}
                                onChange={(rampEffectivenessPct) => patch({ rampEffectivenessPct })}
                            />
                        </>
                    ) : (
                        <p className="text-xs text-slate-500">Replacement ramp is off. Ramp time counts only the seat you already paid for.</p>
                    )}

                    <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">Lost revenue</p>
                    <Field
                        id={`${baseId}-book`}
                        label="Pipeline that will not be worked"
                        hint="If another rep inherited the deals, leave those dollars out."
                        value={inputs.pipelineAtRisk}
                        min={0}
                        max={1_000_000}
                        step={5_000}
                        display={money(inputs.pipelineAtRisk)}
                        onChange={(pipelineAtRisk) => patch({ pipelineAtRisk })}
                    />
                    <Field
                        id={`${baseId}-close`}
                        label="Close rate you would have expected"
                        value={inputs.closeRatePct}
                        min={0}
                        max={100}
                        step={1}
                        display={`${plainNumber(inputs.closeRatePct, 0)}%`}
                        onChange={(closeRatePct) => patch({ closeRatePct })}
                    />

                    <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">Manager hours</p>
                    <Field
                        id={`${baseId}-hours`}
                        label="Hours per week on this hire"
                        hint="Count only the extra time."
                        value={inputs.managerHoursPerWeek}
                        min={0}
                        max={20}
                        step={0.5}
                        display={`${plainNumber(inputs.managerHoursPerWeek, 1)} Hours`}
                        onChange={(managerHoursPerWeek) => patch({ managerHoursPerWeek })}
                    />
                    <Field
                        id={`${baseId}-rate`}
                        label="What one of those hours is worth"
                        hint="Use your own estimate. We do not price it for you."
                        value={inputs.managerHourlyValue}
                        min={0}
                        max={400}
                        step={5}
                        display={money(inputs.managerHourlyValue)}
                        onChange={(managerHourlyValue) => patch({ managerHourlyValue })}
                    />

                    <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">Other costs (optional)</p>
                    <div>
                        <label htmlFor={`${baseId}-other`} className="mb-2 block font-semibold text-slate-700">
                            Other costs
                        </label>
                        <div className="relative">
                            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center font-semibold text-slate-500">$</span>
                            <input
                                id={`${baseId}-other`}
                                type="text"
                                inputMode="decimal"
                                autoComplete="off"
                                value={otherText}
                                onChange={(event) => onOtherChange(event.target.value)}
                                onBlur={() => setOtherText(String(inputs.otherCosts))}
                                className="w-full rounded-xl border border-slate-300 bg-white py-3 pr-4 pl-8 text-lg font-semibold text-slate-900 tabular-nums focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                aria-describedby={`${baseId}-other-hint`}
                            />
                        </div>
                        <p id={`${baseId}-other-hint`} className="mt-2 text-xs text-slate-500">
                            Add severance, a re-search, or anything else you can put a number on. It adds straight to the total.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex w-full flex-col justify-center bg-white p-6 sm:p-8 lg:w-1/2 lg:p-12">
                <h3 className="mb-2 text-sm font-bold tracking-wider text-slate-400 uppercase">Total cost of this hire</h3>
                <div className="mb-6 text-5xl font-extrabold tracking-tighter text-slate-900 tabular-nums lg:text-6xl" aria-live="polite">
                    {money(result.total)}
                </div>

                <div className="mb-8 rounded-2xl border-2 border-blue-accent bg-blue-accent/5 p-5">
                    <p className="text-base font-bold text-navy-900">Want to avoid the next one?</p>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <Link
                            href="/hiring-scorecard"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
                        >
                            Build a hiring scorecard
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/contact#contact-form"
                            className="inline-flex items-center justify-center rounded-full border border-navy-900 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
                        >
                            Schedule a consultation
                        </Link>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={copySummary}
                    className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                    {copied ? "Copied summary" : "Copy result summary"}
                </button>

                <div className="mb-10 space-y-4">
                    {rows.map((row) => {
                        const Icon = row.icon;
                        return (
                            <div key={row.key} className={`flex items-center justify-between gap-3 rounded-xl border p-4 ${row.card}`}>
                                <div className="flex items-center gap-3">
                                    <Icon className={`h-5 w-5 shrink-0 ${row.iconClass}`} aria-hidden="true" />
                                    <span className="font-semibold text-slate-700">
                                        {row.label}
                                        <span className="mt-0.5 block text-xs font-medium text-slate-500">{share(row.amount, result.total)}% of the total</span>
                                    </span>
                                </div>
                                <span className={`font-bold tabular-nums ${row.amountClass}`}>{money(row.amount)}</span>
                            </div>
                        );
                    })}
                </div>

                <div>
                    <h4 className="mb-3 text-sm font-bold tracking-wider text-slate-500 uppercase">Vs survey average</h4>
                    <div className="relative h-4 overflow-hidden rounded-full bg-slate-100 shadow-inner">
                        <div className="h-full rounded-full bg-blue-accent transition-all duration-500" style={{ width: `${(result.total / scale) * 100}%` }} />
                    </div>
                    <p className="mt-3 text-sm text-slate-500">
                        {compareLine(result.total)} The survey average is{" "}
                        <a href={SALESFUEL_URL} target="_blank" rel="noopener noreferrer" className={salesFuelLink}>
                            {money(SURVEY_AVERAGE)}, from SalesFuel
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
