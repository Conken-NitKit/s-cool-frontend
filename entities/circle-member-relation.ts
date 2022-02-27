export type CircleMemberRelation = {
  relationId: string;
  circleId: string;
  trainerId: string; // トレーナーのID
  traineeId: string; // トレーニーのID
  isActive: boolean;
  shouldInterview: boolean; // 1on1MTG をやるか否か
  interviewIntervalDay: number; // 1on1MTG の頻度
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export type CircleMemberInterview = {
  interviewId: string;
  relationId: string;
  circleId: string;
  title: string;
  note: string;
  trainerId: string; // トレーナーのID
  traineeId: string; // トレーニーのID
  openedAt: Date; // 会議の実施日
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};
