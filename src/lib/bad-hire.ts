/**
 * Cost of a bad sales hire. Three non-overlapping core lines (ramp time,
 * lost revenue, manager hours) plus an optional "Other costs" line the user
 * enters (severance, re-search, and so on). Ported from the standalone
 * calculator Grok built; logic unchanged apart from Other costs and the
 * "Lost pipeline" -> "Lost revenue" rename.
 */

export const SURVEY_AVERAGE = 177_171;
export const SALESFUEL_URL =
  "https://salesfuel.com/177000-new-salesfuel-research-shows-a-bad-sales-hire-costs-sales-managers-more-than-a-luxury-car/";

export type PresetId = "sdr" | "ae" | "enterprise";

export type HireInputs = {
  monthlySeatCost: number;
  monthsInSeat: number;
  attainmentPct: number;
  includeRestart: boolean;
  restartRampMonths: number;
  rampEffectivenessPct: number;
  pipelineAtRisk: number;
  closeRatePct: number;
  managerHoursPerWeek: number;
  managerHourlyValue: number;
  otherCosts: number;
};

export type HireResult = {
  seatShortfall: number;
  restartGap: number;
  ramp: number;
  lostRevenue: number;
  manager: number;
  other: number;
  weeks: number;
  total: number;
  unproductivePct: number;
};

export type Preset = {
  id: PresetId;
  label: string;
  inputs: HireInputs;
};

const WEEKS_PER_MONTH = 52 / 12;

function finite(n: number, fallback = 0) {
  return Number.isFinite(n) ? n : fallback;
}

function dollars(n: number) {
  return Math.round(finite(n));
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, finite(n, min)));
}

export const PRESETS: Record<PresetId, Preset> = {
  sdr: {
    id: "sdr",
    label: "SDR",
    inputs: {
      monthlySeatCost: 7_500,
      monthsInSeat: 4,
      attainmentPct: 35,
      includeRestart: true,
      restartRampMonths: 3,
      rampEffectivenessPct: 50,
      pipelineAtRisk: 80_000,
      closeRatePct: 15,
      managerHoursPerWeek: 4,
      managerHourlyValue: 140,
      otherCosts: 0,
    },
  },
  ae: {
    id: "ae",
    label: "AE",
    inputs: {
      monthlySeatCost: 12_500,
      monthsInSeat: 6,
      attainmentPct: 28,
      includeRestart: true,
      restartRampMonths: 6,
      rampEffectivenessPct: 50,
      pipelineAtRisk: 250_000,
      closeRatePct: 24,
      managerHoursPerWeek: 6,
      managerHourlyValue: 160,
      otherCosts: 0,
    },
  },
  enterprise: {
    id: "enterprise",
    label: "Enterprise AE",
    inputs: {
      monthlySeatCost: 20_000,
      monthsInSeat: 8,
      attainmentPct: 25,
      includeRestart: true,
      restartRampMonths: 8,
      rampEffectivenessPct: 50,
      pipelineAtRisk: 600_000,
      closeRatePct: 18,
      managerHoursPerWeek: 8,
      managerHourlyValue: 200,
      otherCosts: 0,
    },
  },
};

export function computeHireCost(input: HireInputs): HireResult {
  const months = Math.max(0, finite(input.monthsInSeat));
  const seat = Math.max(0, finite(input.monthlySeatCost));
  const attainment = clamp(input.attainmentPct, 0, 100);
  const rampEff = clamp(input.rampEffectivenessPct, 0, 100);
  const close = clamp(input.closeRatePct, 0, 100);
  const unproductivePct = 100 - attainment;

  const seatShortfall = dollars((seat * months * unproductivePct) / 100);
  const restartGap = input.includeRestart
    ? dollars((seat * Math.max(0, finite(input.restartRampMonths)) * (100 - rampEff)) / 100)
    : 0;
  const lostRevenue = dollars((Math.max(0, finite(input.pipelineAtRisk)) * close) / 100);
  const weeks = months * WEEKS_PER_MONTH;
  const manager = dollars(
    weeks * Math.max(0, finite(input.managerHoursPerWeek)) * Math.max(0, finite(input.managerHourlyValue)),
  );
  const other = dollars(Math.max(0, finite(input.otherCosts)));

  const ramp = seatShortfall + restartGap;
  return {
    seatShortfall,
    restartGap,
    ramp,
    lostRevenue,
    manager,
    other,
    weeks,
    total: ramp + lostRevenue + manager + other,
    unproductivePct,
  };
}

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function money(n: number) {
  return usd.format(dollars(n));
}

export function plainNumber(n: number, digits = 1) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  }).format(finite(n));
}

function monthsLabel(n: number) {
  const shown = plainNumber(n, 1);
  return `${shown} ${n === 1 ? "month" : "months"}`;
}

export function compareLine(total: number) {
  const delta = dollars(total) - SURVEY_AVERAGE;
  const near = Math.abs(delta) / SURVEY_AVERAGE < 0.08;
  if (near) return "This scenario lands next to that survey average.";
  if (delta > 0) return `This scenario runs ${money(delta)} above that survey average.`;
  return `This scenario runs ${money(Math.abs(delta))} under that survey average.`;
}

export function summaryText(input: HireInputs, result: HireResult) {
  const rampDetail = input.includeRestart
    ? `${money(input.monthlySeatCost)} a month × ${monthsLabel(input.monthsInSeat)} × ${plainNumber(result.unproductivePct, 0)}% not at plan (${money(result.seatShortfall)}), plus a ${monthsLabel(input.restartRampMonths)} replacement ramp at ${plainNumber(input.rampEffectivenessPct, 0)}% production (${money(result.restartGap)}).`
    : `${money(input.monthlySeatCost)} a month × ${monthsLabel(input.monthsInSeat)} × ${plainNumber(result.unproductivePct, 0)}% not at plan (${money(result.seatShortfall)}). Replacement ramp is not included.`;

  return [
    "Cost of a bad sales hire",
    "",
    `Ramp time: ${money(result.ramp)}`,
    `Lost revenue: ${money(result.lostRevenue)}`,
    `Manager hours: ${money(result.manager)}`,
    `Other costs: ${money(result.other)}`,
    `Total: ${money(result.total)}`,
    "",
    `Ramp: ${rampDetail}`,
    `Lost revenue: ${money(input.pipelineAtRisk)} pipeline that will not be worked × ${plainNumber(input.closeRatePct, 0)}% close rate.`,
    `Manager: ${plainNumber(input.managerHoursPerWeek, 1)} hours a week × ${plainNumber(result.weeks, 1)} weeks × ${money(input.managerHourlyValue)} an hour.`,
    `Other costs: ${money(result.other)} you entered (severance, re-search, and similar).`,
    "",
    "No recruiting fee is included unless you entered one under Other costs.",
    "The Kas Group · https://www.thekasgroup.com/bad-hire-calculator",
  ].join("\n");
}

export function sameInputs(a: HireInputs, b: HireInputs) {
  return (Object.keys(a) as (keyof HireInputs)[]).every((key) => a[key] === b[key]);
}

export function sanitizeInputs(value: unknown): HireInputs | null {
  if (!value || typeof value !== "object") return null;
  const v = value as Partial<HireInputs>;
  const base = PRESETS.ae.inputs;
  const num = (x: unknown, fallback: number) =>
    typeof x === "number" && Number.isFinite(x) ? x : fallback;
  return {
    monthlySeatCost: Math.max(0, num(v.monthlySeatCost, base.monthlySeatCost)),
    monthsInSeat: clamp(num(v.monthsInSeat, base.monthsInSeat), 0, 36),
    attainmentPct: clamp(num(v.attainmentPct, base.attainmentPct), 0, 100),
    includeRestart: typeof v.includeRestart === "boolean" ? v.includeRestart : base.includeRestart,
    restartRampMonths: clamp(num(v.restartRampMonths, base.restartRampMonths), 0, 24),
    rampEffectivenessPct: clamp(num(v.rampEffectivenessPct, base.rampEffectivenessPct), 0, 100),
    pipelineAtRisk: Math.max(0, num(v.pipelineAtRisk, base.pipelineAtRisk)),
    closeRatePct: clamp(num(v.closeRatePct, base.closeRatePct), 0, 100),
    managerHoursPerWeek: clamp(num(v.managerHoursPerWeek, base.managerHoursPerWeek), 0, 40),
    managerHourlyValue: Math.max(0, num(v.managerHourlyValue, base.managerHourlyValue)),
    otherCosts: Math.max(0, num(v.otherCosts, 0)),
  };
}

export function isPresetId(value: unknown): value is PresetId {
  return value === "sdr" || value === "ae" || value === "enterprise";
}
