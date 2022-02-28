export type CircleMember = {
  memberId: string;
  userId: string;
  circleId: string;
  inviteId: string;
  aliasCode?: string;
  displayName: string;
  role: MemberRole;
  status: MemberStatus; // 出席状況
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export const MEMBER_ROLE = {
  OWNER: 'owner',
  ADMIN: 'admin',
  MEMBER: 'member',
} as const;
export type MemberRole = typeof MEMBER_ROLE[keyof typeof MEMBER_ROLE];

// 出席状況
export const MEMBER_STATUS = {
  ATTENDANCE: 'attendance', // 出席
  NON_ATTENDANCE: 'non-attendance', // 欠席
} as const;
export type MemberStatus = typeof MEMBER_STATUS[keyof typeof MEMBER_STATUS];

export const isAttendance = (status: MemberStatus): boolean =>
  status === MEMBER_STATUS.ATTENDANCE;
