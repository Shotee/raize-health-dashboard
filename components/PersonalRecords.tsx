"use client";

import type { FC } from "react";

type PersonalRecord = {
  id: string;
  title: string;
  description: string;
  value: string | number;
  unit?: string;
  icon?: string;
  achievedAt: string;
  delta?: {
    value: string;
    label: string;
    positive?: boolean;
  };
};

type PersonalRecordsProps = {
  headline?: string;
  records: PersonalRecord[];
};

export const PersonalRecords: FC<PersonalRecordsProps> = ({
  headline = "Personal Bests",
  records
}) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Personal Records
          </p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">{headline}</p>
          <p className="text-sm text-slate-500">
            Captured from your last training cycle
          </p>
        </div>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
          {records.length} records
        </span>
      </header>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {records.map((record) => (
          <article
            key={record.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-100 p-4 transition hover:border-indigo-200"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-lg">
                  {record.icon ?? "🏅"}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{record.title}</p>
                  <p className="text-xs text-slate-500">{record.description}</p>
                </div>
              </div>
              <div className="mt-5 flex items-end gap-2">
                <p className="text-3xl font-semibold text-slate-900">
                  {record.value}
                  {record.unit && <span className="text-lg text-slate-500">{record.unit}</span>}
                </p>
                {record.delta && (
                  <span
                    className={`text-sm font-semibold ${record.delta.positive ? "text-emerald-600" : "text-rose-600"}`}
                  >
                    {record.delta.value}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
              <span>Achieved {record.achievedAt}</span>
              {record.delta?.label && (
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">
                  {record.delta.label}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PersonalRecords;
