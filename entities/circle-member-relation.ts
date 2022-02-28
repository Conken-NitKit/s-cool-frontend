export type CircleMemberRelation = {
  relationId: string;
  circleId: string;
  trainerId: string; // トレーナーのID
  traineeId: string; // トレーニーのID
  isActive: boolean;
  shouldInterview: boolean; // 1on1MTG をやるか否か
  interviewIntervalDay: number; // 1on1MTG の頻度（日）
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

// 1on1MTG
export type CircleMemberInterview = {
  interviewId: string;
  relationId: string;
  circleId: string;
  title: string;
  note: string;
  trainerId: string; // トレーナーのID
  traineeId: string; // トレーニーのID
  openedAt: Date; // 1on1MTGの実施日
  announced: boolean; // 参加者に1on1MTGの開催をアナウンスしたか否か
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};
