import type { FC } from "react";

import type { PerformanceMetric } from "../types";

type PerformanceOverviewProps = {
  metrics: PerformanceMetric[];
};

const trendColors: Record<PerformanceMetric["trend"], string> = {
  up: "text-emerald-600",
  down: "text-rose-600",
  flat: "text-slate-500"
};

const trendIcons: Record<PerformanceMetric["trend"], string> = {
  up: "▲",
  down: "▼",
  flat: "▬"
};

const formatChange = (metric: PerformanceMetric) => {
  const magnitude = Math.abs(metric.change);
  const sign = metric.change > 0 ? "+" : metric.change < 0 ? "−" : "";
  const formattedMagnitude = Number.isInteger(magnitude) ? magnitude.toString() : magnitude.toFixed(1);
  return `${sign}${formattedMagnitude} ${metric.unit}`;
};

export const PerformanceOverview: FC<PerformanceOverviewProps> = ({ metrics }) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Performance Overview
          </p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">Key Biomarkers</p>
          <p className="text-sm text-slate-500">Tracked against personalized training targets</p>
        </div>
        <button className="hidden rounded-full border border-slate-200 px-4 py-1.5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900 sm:inline-flex">
          Export
        </button>
      </header>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => {
          const target = metric.target ?? metric.value;
          const progress = target > 0 ? Math.min((metric.value / target) * 100, 100) : 0;

          return (
            <article
              key={metric.id}
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition hover:border-emerald-200"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">{metric.label}</p>
                <span className={`text-xs font-semibold ${trendColors[metric.trend]}`}>
                  {trendIcons[metric.trend]} {formatChange(metric)}
                </span>
              </div>
              <div className="mt-3 flex items-end gap-2">
                <p className="text-3xl font-semibold text-slate-900">
                  {metric.value}
                  <span className="ml-1 text-lg text-slate-500">{metric.unit}</span>
                </p>
                {metric.target ? (
                  <span className="text-sm text-slate-500">Target {metric.target}</span>
                ) : null}
              </div>
              <div className="mt-4 h-2 rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PerformanceOverview;
