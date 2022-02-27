export type CircleMission = {
  missionId: string;
  circleId: string;
  title: string;
  description: string;
  status: MissionStatus;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export const MISSION_STATUS = {
  READY: 'ready', // 着手予定
  INPROGRESS: 'inprogress', // 進行中
  WAITING: 'waiting', // 諸事情により進行停止
  COMPLETE: 'complete', // 完了
  FAILED: 'failed', // 失敗
} as const;
export type MissionStatus = typeof MISSION_STATUS[keyof typeof MISSION_STATUS];

export type CircleMissionAssignee = {
  assigneeId: string;
  circleId: string;
  missionId: string;
  userId: string;
  role: AssigneeRole;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export const ASSIGNEE_ROLE = {
  OWNER: 'owner',
  ADMIN: 'admin',
  MEMBER: 'member',
} as const;
export type AssigneeRole = typeof ASSIGNEE_ROLE[keyof typeof ASSIGNEE_ROLE];
