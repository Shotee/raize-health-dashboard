import { UserProfile } from '@/components/UserProfile';
import { DeviceCard } from '@/components/DeviceCard';
import { PerformanceOverview } from '@/components/PerformanceOverview';
import { ActivityRings } from '@/components/ActivityRings';
import { HeartRateChart } from '@/components/HeartRateChart';
import { PersonalRecords } from '@/components/PersonalRecords';
import { userProfile, performanceData, activityData, heartRateData, personalRecords } from '@/lib/data';

export default function HomePage() {
  const primaryDevice = userProfile.devices.find(d => d.isPrimary) || userProfile.devices[0];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl p-6 space-y-6">
        {/* User Profile & Device */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <UserProfile profile={userProfile} />
          </div>
          <div className="lg:col-span-2">
            {primaryDevice && <DeviceCard device={primaryDevice} />}
          </div>
        </div>

        {/* Performance Overview */}
        <PerformanceOverview metrics={performanceData} />

        {/* Activity Rings & Heart Rate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivityRings rings={activityData.map(a => ({
            label: a.label,
            value: a.value,
            goal: a.goal,
            unit: a.unit,
            color: a.color
          }))} />
          <HeartRateChart data={heartRateData.map(h => ({
            time: h.timestamp,
            bpm: h.bpm
          }))} />
        </div>

        {/* Personal Records */}
        <PersonalRecords records={personalRecords.map(r => ({
          id: r.id,
          title: r.metric,
          description: r.context,
          achievedAt: r.achievedOn,
          value: r.value,
          unit: r.unit
        }))} />
      </div>
    </div>
  );
}
