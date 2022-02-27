import { WeekId } from 'constants/date';

// 学校の授業
export type ClassCurriculum = {
  curriculumId: string;
  classId: string;
  name: string;
  description?: string;
  timeTable: TimeTableCell[]; // 授業があるコマの一覧
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

// {week}曜日 / {period}限目
export type TimeTableCell = {
  week: WeekId;
  period: number;
};

// 授業の成績
export type ClassCurriculumStatus = {
  statusId: string;
  classId: string;
  curriculumId: string;
  userId: string;
  attendanceCount: number; // 出席日数
  nonAttendanceCount: number; // 欠席日数
  lateCount: number; // 遅刻日数
  earlyCount: number; // 早退日数
  updatedAt: Date;
};

// 授業のテスト結果
export type ClassCurriculumTestResult = {
  resultId: string;
  classId: string;
  curriculumId: string;
  userId: string;
  title: string;
  score: number; // 獲得点数
  note?: string; // メモ
};

// 授業課題
export type ClassCurriculumTask = {
  taskId: string;
  classId: string;
  curriculumId: string;
  name: string;
  description?: string;
  deadLine?: Date; // 提出期限
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

// 授業課題の提出状況
export type ClassCurriculumTaskStatus = {
  statusId: string;
  classId: string;
  curriculumId: string;
  taskId: string;
  userId: string;
  completed: boolean;
  updatedAt: Date;
};
