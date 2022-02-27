// 取り組んでほしいカリキュラム
export type CircleCurriculum = {
  curriculumId: string;
  circleId: string;
  name: string;
  description?: string;
  publishTarget: CurriculumPublishTarget;
  teamIds: string[]; // カリキュラムが登録されているチーム一覧のID。
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export const CURRICULUM_PUBLISH_TARGET = {
  LIMITED: 'limited', // 公開対象を制限せず、サークルメンバー全員に共有
  UNLIMITED: 'unlimited', // 公開対象を teamIds で指定されたチームのメンバーのみに制限
  OWN: 'own', // 公開対象を自分だけに制限
} as const;
export type CurriculumPublishTarget =
  typeof CURRICULUM_PUBLISH_TARGET[keyof typeof CURRICULUM_PUBLISH_TARGET];

// カリキュラム内に登録されている課題
export type CircleCurriculumTask = {
  taskId: string;
  circleId: string;
  curriculumId: string;
  name: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

// カリキュラム内に登録されている課題の完了状況
export type CircleCurriculumTaskStatus = {
  statusId: string;
  circleId: string;
  curriculumId: string;
  taskId: string;
  userId: string;
  completed: boolean; // 完了状況
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};
