import type { FC } from "react";

import type { ConnectedDevice } from "../types";

type DeviceCardProps = {
  device: ConnectedDevice;
};

const statusStyles: Record<ConnectedDevice["status"], string> = {
  connected: "bg-emerald-50 text-emerald-700",
  syncing: "bg-amber-50 text-amber-700",
  offline: "bg-slate-100 text-slate-500"
};

const deviceIcon: Record<ConnectedDevice["type"], string> = {
  watch: "⌚️",
  ring: "💍",
  band: "📶",
  scale: "⚖️",
  sensor: "🩺"
};

export const DeviceCard: FC<DeviceCardProps> = ({ device }) => {
  const lastSync = new Date(device.lastSync).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <article
      className={`rounded-2xl border ${
        device.isPrimary ? "border-emerald-200 bg-emerald-50/50" : "border-slate-100 bg-white"
      } p-4 shadow-sm transition hover:-translate-y-0.5`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">{device.name}</p>
          <p className="text-xs text-slate-500">
            {device.model} · {device.type}
          </p>
        </div>
        <span className={`rounded-full px-2 py-1 text-xs font-semibold capitalize ${statusStyles[device.status]}`}>
          {device.status}
        </span>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-lg">
            {deviceIcon[device.type]}
          </div>
          <div>
            <p className="text-xs text-slate-500">Battery</p>
            <p className="text-lg font-semibold text-slate-900">{device.batteryLevel}%</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">Last Sync</p>
          <p className="text-sm font-medium text-slate-900">{lastSync}</p>
        </div>
      </div>
    </article>
  );
};

export default DeviceCard;
