export type User = {
  userId: string;
  displayName: string;
  serviceRole: ServiceRole; // サービス全体のアクセス権限
  regionStatus: RegionStatus; // 外出状況
  createdAt: Date;
  updatedAt: Date;
  accessAt: Date;
};

// サービス全体のアクセス権限
export const SERVICE_ROLE = {
  OWNER: 'owner',
  ADMIN: 'admin',
  DEVELOPER: 'develop',
  USER: 'user',
} as const;
export type ServiceRole = typeof SERVICE_ROLE[keyof typeof SERVICE_ROLE];

// 外出状況
export const REGION_STATUS = {
  OUT: '外出中',
  SCHOOL: '登校中',
  HOME: '在宅',
} as const;
export type RegionStatus = typeof REGION_STATUS[keyof typeof REGION_STATUS];
