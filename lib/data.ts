import type {
  ActivityMetric,
  HeartRatePoint,
  PerformanceMetric,
  PersonalRecord,
  UserProfile,
} from "../types";

export const userProfile: UserProfile = {
  id: "user_001",
  name: "Jordan Diaz",
  email: "jordan.diaz@raizehealth.com",
  avatarUrl:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=200&h=200&q=80",
  location: "Austin, TX",
  membership: "Pro Athlete",
  stats: {
    steps: 12450,
    calories: 2150,
    workouts: 6,
    recoveryScore: 82,
  },
  devices: [
    {
      id: "device_watch_01",
      name: "Raize Apex",
      type: "watch",
      model: "Series X",
      status: "connected",
      batteryLevel: 86,
      lastSync: "2024-06-12T10:15:00-05:00",
      isPrimary: true,
    },
    {
      id: "device_ring_01",
      name: "Recovery Ring",
      type: "ring",
      model: "Nova+",
      status: "syncing",
      batteryLevel: 58,
      lastSync: "2024-06-12T07:45:00-05:00",
    },
    {
      id: "device_scale_01",
      name: "Smart Scale",
      type: "scale",
      model: "Balance S2",
      status: "offline",
      batteryLevel: 32,
      lastSync: "2024-06-10T18:05:00-05:00",
    },
  ],
};

export const performanceData: PerformanceMetric[] = [
  {
    id: "readiness",
    label: "Readiness Score",
    value: 88,
    unit: "pts",
    change: 6.4,
    trend: "up",
    target: 90,
  },
  {
    id: "vo2max",
    label: "VO2 Max",
    value: 48.2,
    unit: "ml/kg/min",
    change: 2.1,
    trend: "up",
  },
  {
    id: "hrv",
    label: "HRV",
    value: 68,
    unit: "ms",
    change: -1.2,
    trend: "down",
    target: 70,
  },
  {
    id: "resting_hr",
    label: "Resting HR",
    value: 52,
    unit: "bpm",
    change: -3.0,
    trend: "up",
  },
];

export const activityData: ActivityMetric[] = [
  {
    id: "move",
    label: "Move",
    value: 620,
    goal: 700,
    unit: "kcal",
    color: "#ef4444",
  },
  {
    id: "exercise",
    label: "Exercise",
    value: 48,
    goal: 45,
    unit: "min",
    color: "#22c55e",
  },
  {
    id: "stand",
    label: "Stand",
    value: 12,
    goal: 12,
    unit: "hrs",
    color: "#0ea5e9",
  },
];

export const heartRateData: HeartRatePoint[] = [
  { timestamp: "2024-06-12T06:00:00-05:00", bpm: 48, zone: "resting" },
  { timestamp: "2024-06-12T07:30:00-05:00", bpm: 72, zone: "fat-burn" },
  { timestamp: "2024-06-12T08:15:00-05:00", bpm: 94, zone: "fat-burn" },
  { timestamp: "2024-06-12T09:00:00-05:00", bpm: 108, zone: "cardio" },
  { timestamp: "2024-06-12T09:30:00-05:00", bpm: 134, zone: "cardio" },
  { timestamp: "2024-06-12T10:00:00-05:00", bpm: 162, zone: "peak" },
  { timestamp: "2024-06-12T10:30:00-05:00", bpm: 148, zone: "cardio" },
  { timestamp: "2024-06-12T11:00:00-05:00", bpm: 116, zone: "cardio" },
  { timestamp: "2024-06-12T12:00:00-05:00", bpm: 88, zone: "fat-burn" },
  { timestamp: "2024-06-12T13:30:00-05:00", bpm: 72, zone: "resting" },
  { timestamp: "2024-06-12T15:00:00-05:00", bpm: 80, zone: "fat-burn" },
  { timestamp: "2024-06-12T20:00:00-05:00", bpm: 56, zone: "resting" },
];

export const personalRecords: PersonalRecord[] = [
  {
    id: "pr-5k",
    metric: "5K Tempo",
    value: 20.9,
    unit: "min",
    achievedOn: "2024-05-18",
    context: "Town Lake tempo session",
  },
  {
    id: "pr-bench",
    metric: "Bench Press",
    value: 245,
    unit: "lb",
    achievedOn: "2024-04-02",
    context: "Downtown Strength Lab",
  },
  {
    id: "pr-hrv",
    metric: "Highest HRV",
    value: 74,
    unit: "ms",
    achievedOn: "2024-06-09",
    context: "Recovery week peak",
  },
  {
    id: "pr-longride",
    metric: "Longest Ride",
    value: 128,
    unit: "km",
    achievedOn: "2024-05-05",
    context: "Hill Country endurance block",
  },
];
