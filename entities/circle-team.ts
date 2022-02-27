export type CircleTeam = {
  teamId: string;
  circleId: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export type CircleTeamMember = {
  assigneeId: string;
  circleId: string;
  missionId: string;
  userId: string;
  role: MemberRole;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string; // ここがチームに追加してくれた人のuserIDになる
  updatedBy: string;
};

export const MEMBER_ROLE = {
  OWNER: 'owner',
  ADMIN: 'admin',
  MEMBER: 'member',
} as const;
export type MemberRole = typeof MEMBER_ROLE[keyof typeof MEMBER_ROLE];
