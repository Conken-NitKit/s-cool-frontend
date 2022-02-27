// 取り組んでほしいカリキュラム
export type CircleCurriculum = {
  curriculumId: string;
  circleId: string;
  name: string;
  description?: string;
  isPrivate: boolean;
  teamIds: string[]; // カリキュラムが登録されているチーム一覧のID。
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

// カリキュラム内に登録されている課題
export type CircleCurriculumTask = {
  taskId: string;
  circleId: string;
  curriculumId: string;
  name: string;
  link: string;
  published: boolean; // 公開状況
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
