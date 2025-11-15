'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { SVGProps } from 'react';

type NavItem = {
  label: string;
  href: string;
  badge?: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const primaryNavigation: NavItem[] = [
  { label: 'Overview', href: '/' as any, icon: PulseIcon },
  { label: 'Patients', href: '/patients' as any, icon: UsersIcon, badge: '32' },
  { label: 'Devices', href: '/devices' as any, icon: DeviceIcon },
  { label: 'Performance', href: '/performance' as any, icon: TrendIcon },
  { label: 'Activity', href: '/activity' as any, icon: RingsIcon }
];

const secondaryNavigation: NavItem[] = [
  { label: 'Personal Records', href: '/records' as any, icon: TrophyIcon },
  { label: 'Reports', href: '/reports' as any, icon: ReportsIcon },
  { label: 'Settings', href: '/settings' as any, icon: SettingsIcon }
];

export default function Sidebar() {
  const pathname = usePathname();

  const renderNavItem = (item: NavItem) => {
    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
    const baseClasses = 'flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-all';
    const visualState = isActive
      ? 'bg-emerald-50 text-emerald-700 shadow-sm'
      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900';

    return (
      <Link key={item.label} href={item.href} className={`${baseClasses} ${visualState}`}>
        <div className={`flex h-8 w-8 items-center justify-center rounded-xl border ${isActive ? 'border-emerald-200 bg-white text-emerald-600' : 'border-transparent bg-emerald-50/30 text-emerald-500'}`}>
          <item.icon className="h-4 w-4" />
        </div>
        <span className="flex-1">{item.label}</span>
        {item.badge ? (
          <span className="rounded-full bg-emerald-100 px-2 text-xs font-semibold text-emerald-700">
            {item.badge}
          </span>
        ) : null}
      </Link>
    );
  };

  return (
    <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white/80 px-6 py-8 backdrop-blur lg:flex">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-lg font-semibold text-white">
          RH
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Raize Health</p>
          <p className="text-xs text-slate-500">Wellness Intelligence</p>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        {primaryNavigation.map(renderNavItem)}
      </div>

      <div className="mt-8 space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Insights</div>
        {secondaryNavigation.map(renderNavItem)}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-500 via-emerald-500 to-emerald-600 p-5 text-white shadow-sm">
        <p className="text-sm font-semibold">Wellness Programs</p>
        <p className="mt-1 text-xs text-emerald-50">
          Curated coaching paths for mobility, recovery, and peak performance.
        </p>
        <button className="mt-4 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-emerald-600 shadow-sm">
          Create Plan
        </button>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
          EP
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">Dr. Elena Parker</p>
          <p className="text-xs text-slate-500">Lead Physiologist</p>
        </div>
        <div className="text-sm text-emerald-600">•••</div>
      </div>
    </aside>
  );
}

function PulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M3 13h3.5l2-5 4 10 2-5h6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 7a4 4 0 0 0-6 0l-2 2-2-2a4 4 0 0 0-6 6l8 8 8-8a4 4 0 0 0 0-6z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="9" cy="8" r="4" />
      <path d="M17 11a3 3 0 1 0-3-3" />
      <path d="M4 19a5 5 0 0 1 10 0" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 19a4.5 4.5 0 0 1 5.5 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DeviceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="4" y="3" width="16" height="12" rx="2" />
      <path d="M8 21h8" strokeLinecap="round" />
      <path d="M10 15v6" strokeLinecap="round" />
      <path d="M14 15v6" strokeLinecap="round" />
    </svg>
  );
}

function TrendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M4 16 10 10l4 4 6-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20h16" strokeLinecap="round" />
    </svg>
  );
}

function RingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TrophyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M8 4h8v4a4 4 0 1 1-8 0z" strokeLinejoin="round" />
      <path d="M12 12v4" strokeLinecap="round" />
      <path d="M9 20h6" strokeLinecap="round" />
      <path d="M4 6h4v2a4 4 0 0 1-4-4z" strokeLinejoin="round" />
      <path d="M20 6h-4v2a4 4 0 0 0 4-4z" strokeLinejoin="round" />
    </svg>
  );
}

function ReportsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6" strokeLinecap="round" />
      <path d="M9 12h6" strokeLinecap="round" />
      <path d="M9 16h4" strokeLinecap="round" />
    </svg>
  );
}

function SettingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="m19.4 15-.9 1.6a1 1 0 0 1-1.2.4l-1.8-.7a6.7 6.7 0 0 1-1.5.9l-.3 1.9a1 1 0 0 1-1 .9h-1.8a1 1 0 0 1-1-.9l-.3-1.9a6.7 6.7 0 0 1-1.5-.9l-1.8.7a1 1 0 0 1-1.2-.4L4.6 15a1 1 0 0 1 0-1l.9-1.5a7 7 0 0 1 0-1.6L4.6 9.4a1 1 0 0 1 0-1L5.5 6.8a1 1 0 0 1 1.2-.4l1.8.7a6.7 6.7 0 0 1 1.5-.9l.3-1.9a1 1 0 0 1 1-.9h1.8a1 1 0 0 1 1 .9l.3 1.9a6.7 6.7 0 0 1 1.5.9l1.8-.7a1 1 0 0 1 1.2.4l.9 1.6a1 1 0 0 1 0 1l-.9 1.5a7 7 0 0 1 0 1.6l.9 1.5a1 1 0 0 1 0 1z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
