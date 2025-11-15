export type DeviceType = "watch" | "ring" | "band" | "scale" | "sensor";

export type DeviceConnectionStatus = "connected" | "syncing" | "offline";

export interface ConnectedDevice {
  id: string;
  name: string;
  type: DeviceType;
  model: string;
  status: DeviceConnectionStatus;
  batteryLevel: number;
  lastSync: string;
  isPrimary?: boolean;
}

export interface UserStats {
  steps: number;
  calories: number;
  workouts: number;
  recoveryScore: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  location: string;
  membership: string;
  stats: UserStats;
  devices: ConnectedDevice[];
}

export type TrendDirection = "up" | "down" | "flat";

export interface PerformanceMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  change: number;
  trend: TrendDirection;
  target?: number;
}

export interface ActivityMetric {
  id: string;
  label: string;
  value: number;
  goal: number;
  unit: string;
  color: string;
}

export type HeartRateZone = "resting" | "fat-burn" | "cardio" | "peak";

export interface HeartRatePoint {
  timestamp: string;
  bpm: number;
  zone: HeartRateZone;
}

export interface PersonalRecord {
  id: string;
  metric: string;
  value: number;
  unit: string;
  achievedOn: string;
  context: string;
}
