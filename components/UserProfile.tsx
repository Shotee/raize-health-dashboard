import Image from "next/image";
import type { FC } from "react";

import type { UserProfile as UserProfileType } from "../types";

type UserProfileProps = {
  profile: UserProfileType;
};

const statConfig: Array<{
  key: keyof UserProfileType["stats"];
  label: string;
  suffix?: string;
}> = [
  { key: "steps", label: "Steps" },
  { key: "calories", label: "Calories", suffix: "kcal" },
  { key: "workouts", label: "Workouts" },
  { key: "recoveryScore", label: "Recovery", suffix: "%" }
];

export const UserProfile: FC<UserProfileProps> = ({ profile }) => {
  const primaryDevice = profile.devices.find((device) => device.isPrimary) ?? profile.devices[0];
  const lastSyncLabel = primaryDevice
    ? new Date(primaryDevice.lastSync).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    : "—";

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-slate-100">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">{profile.name}</p>
            <p className="text-sm text-slate-500">{profile.email}</p>
            <p className="text-xs font-medium text-slate-400">{profile.location}</p>
          </div>
        </div>
        <div className="sm:ml-auto">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold text-emerald-600">
            {profile.membership}
          </span>
        </div>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statConfig.map((stat) => {
          const value = profile.stats[stat.key];
          const formattedValue = typeof value === "number" ? value.toLocaleString() : value;
          return (
            <div key={stat.key} className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {stat.label}
              </p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                {formattedValue}
                {stat.suffix ? <span className="ml-1 text-sm text-slate-500">{stat.suffix}</span> : null}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-100 bg-gradient-to-r from-slate-900 to-slate-800 p-5 text-white">
        <p className="text-sm font-semibold">Weekly Momentum</p>
        <p className="mt-2 text-xs text-slate-200">
          Steps, workouts, and recovery are trending above your established baseline.
        </p>
        <div className="mt-4 flex items-center gap-4 text-sm">
          {primaryDevice ? (
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Primary Device</p>
              <p className="font-semibold text-white">{primaryDevice.name}</p>
            </div>
          ) : null}
          <div className="h-8 w-px bg-slate-700" />
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Last Sync</p>
            <p className="font-semibold text-white">{lastSyncLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
