export type CircleMember = {
  memberId: string;
  userId: string;
  circleId: string;
  displayName: string;
  role: MemberRole;
  status: memberStatus;
  createdAt: Date;
  updatedAt: Date;
};

export const MEMBER_ROLE = {
  OWNER: 'owner',
  ADMIN: 'admin',
  MEMBER: 'member',
} as const;
export type MemberRole = typeof MEMBER_ROLE[keyof typeof MEMBER_ROLE];

export const MEMBER_STATUS = {
  ATTENDANCE: 'attendance',
  NON_ATTENDANCE: 'non-attendance',
} as const;
export type memberStatus = typeof MEMBER_STATUS[keyof typeof MEMBER_STATUS];

export const isAttendance = (status: memberStatus): boolean =>
  status === MEMBER_STATUS.ATTENDANCE;
