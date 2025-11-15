"use client";

import type { FC } from "react";

type HeartRatePoint = {
  time: string;
  bpm: number;
};

type HeartRateChartProps = {
  data: HeartRatePoint[];
  restingBpm?: number;
  highBpmAlert?: number;
};

const SVG_WIDTH = 600;
const SVG_HEIGHT = 220;
const PADDING_X = 24;
const PADDING_Y = 20;

const formatBpm = (value: number) => `${value} bpm`;

export const HeartRateChart: FC<HeartRateChartProps> = ({
  data,
  restingBpm,
  highBpmAlert
}) => {
  if (data.length === 0) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-500">No heart rate data available.</p>
      </section>
    );
  }

  const values = data.map((point) => point.bpm);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const avgValue = Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  const range = Math.max(maxValue - minValue, 1);

  const toY = (value: number) => {
    const clamped = Math.min(Math.max(value, minValue), maxValue);
    const yRatio = (clamped - minValue) / range;
    return SVG_HEIGHT - PADDING_Y - yRatio * (SVG_HEIGHT - PADDING_Y * 2);
  };

  const points = data.map((point, index) => {
    const xFraction = data.length === 1 ? 0 : index / (data.length - 1);
    const x = PADDING_X + xFraction * (SVG_WIDTH - PADDING_X * 2);
    const y = toY(point.bpm);
    return { ...point, x, y };
  });

  const polylinePoints = points.map((point) => `${point.x},${point.y}`).join(" ");
  const areaPoints = `${PADDING_X},${SVG_HEIGHT - PADDING_Y} ${polylinePoints} ${
    SVG_WIDTH - PADDING_X
  },${SVG_HEIGHT - PADDING_Y}`;

  const lastPoint = points[points.length - 1];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Heart Rate
          </p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">24hr Trend</p>
          <p className="text-sm text-slate-500">
            Average {formatBpm(avgValue)} · Last reading {formatBpm(lastPoint.bpm)}
          </p>
        </div>
        {highBpmAlert && lastPoint.bpm > highBpmAlert ? (
          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
            Above {formatBpm(highBpmAlert)}
          </span>
        ) : (
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
            Stable
          </span>
        )}
      </header>

      <div className="mt-6">
        <svg
          role="img"
          aria-label="Heart rate line chart"
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          className="h-56 w-full"
        >
          <defs>
            <linearGradient id="heartRateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={areaPoints} fill="url(#heartRateGradient)" />
          {restingBpm && (
            <line
              x1={PADDING_X}
              x2={SVG_WIDTH - PADDING_X}
              y1={toY(restingBpm)}
              y2={toY(restingBpm)}
              stroke="#cbd5f5"
              strokeDasharray="6 6"
            />
          )}
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="#0284c7"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {points.map((point) => (
            <circle
              key={point.time}
              cx={point.x}
              cy={point.y}
              r={3.5}
              fill="#fff"
              stroke="#0284c7"
              strokeWidth={1.5}
            />
          ))}
        </svg>
      </div>

      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Min</dt>
          <dd className="text-lg font-semibold text-slate-900">{formatBpm(minValue)}</dd>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Avg</dt>
          <dd className="text-lg font-semibold text-slate-900">{formatBpm(avgValue)}</dd>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Max</dt>
          <dd className="text-lg font-semibold text-slate-900">{formatBpm(maxValue)}</dd>
        </div>
      </dl>
    </section>
  );
};

export default HeartRateChart;
