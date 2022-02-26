export type User = {
  userId: string;
  publicName: string;
  privateName: string;
  serviceRole: ServiceRole;
  outingStatus: OutingStatus;
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
export const OUTING_STATUS = {
  OUT: '外出中',
  SCHOOL: '登校中',
  HOME: '在宅',
} as const;
export type OutingStatus = typeof OUTING_STATUS[keyof typeof OUTING_STATUS];
