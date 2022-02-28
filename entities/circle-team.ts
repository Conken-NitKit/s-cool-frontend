export type CircleTeam = {
  teamId: string;
  circleId: string;
  title: string;
  description: string;
  shouldMeetUp: boolean; // 交流イベントの開催が必須か否か
  MeetUpIntervalDay: number; // 交流イベントの頻度（日）
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

// 交流イベント
export type CircleTeamMeetUP = {
  interviewId: string;
  relationId: string;
  circleId: string;
  title: string;
  note: string;
  openedAt: Date; // 交流イベントの実施日
  announced: boolean; // 参加者に交流イベントの開催をアナウンスしたか否か
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};
