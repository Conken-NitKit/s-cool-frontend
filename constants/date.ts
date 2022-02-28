export const WEEK_ID = {
  SUN: 'sunday',
  MON: 'monday',
  TUE: 'tuesday',
  WED: 'wednesday',
  THU: 'thursday',
  FRI: 'friday',
  SAT: 'saturday',
} as const;
export type WeekId = typeof WEEK_ID[keyof typeof WEEK_ID];
