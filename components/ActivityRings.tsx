"use client";

import type { FC } from "react";

type ActivityRing = {
  label: string;
  value: number;
  goal: number;
  unit: string;
  color: string;
};

type ActivityRingsProps = {
  dateLabel?: string;
  rings: ActivityRing[];
};

const VIEWBOX_SIZE = 240;
const CENTER = VIEWBOX_SIZE / 2;
const BASE_RADIUS = 90;
const STROKE_WIDTH = 12;
const RING_SPACING = 18;

const formatPercent = (value: number) => `${Math.round(value * 100)}%`;

export const ActivityRings: FC<ActivityRingsProps> = ({
  dateLabel = "Today",
  rings
}) => {
  const progressValues = rings.map((ring) => Math.min(ring.value / ring.goal, 1));
  const avgProgress =
    progressValues.length > 0
      ? progressValues.reduce((sum, value) => sum + value, 0) / progressValues.length
      : 0;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Activity Rings
          </p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">Daily Progress</p>
          <p className="text-sm text-slate-500">{dateLabel}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {formatPercent(avgProgress)} of goals
        </span>
      </header>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex items-center justify-center">
          <svg
            role="img"
            aria-label="Activity ring progress"
            viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
            className="h-64 w-64"
          >
            {rings.map((ring, index) => {
              const radius = BASE_RADIUS - index * RING_SPACING;
              const circumference = 2 * Math.PI * radius;
              const progress = Math.min(ring.value / ring.goal, 1);
              const offset = circumference * (1 - progress);

              return (
                <g key={ring.label}>
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={radius}
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth={STROKE_WIDTH}
                  />
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={radius}
                    fill="none"
                    stroke={ring.color}
                    strokeWidth={STROKE_WIDTH}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${CENTER} ${CENTER})`}
                  />
                </g>
              );
            })}
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              className="fill-slate-400 text-sm font-medium"
            >
              Completed
            </text>
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              className="fill-slate-900 text-4xl font-semibold"
            >
              {formatPercent(avgProgress)}
            </text>
          </svg>
        </div>

        <ul className="space-y-4">
          {rings.map((ring) => {
            const progress = Math.min(ring.value / ring.goal, 1);
            return (
              <li
                key={ring.label}
                className="rounded-2xl border border-slate-100 p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{ring.label}</p>
                    <p className="text-xs text-slate-500">
                      {ring.value} / {ring.goal} {ring.unit}
                    </p>
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: ring.color }}
                  >
                    {formatPercent(progress)}
                  </span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full"
                    style={{ width: formatPercent(progress), backgroundColor: ring.color }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ActivityRings;
