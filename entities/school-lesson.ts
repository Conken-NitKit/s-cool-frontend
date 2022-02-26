import { WeekId } from 'constants/date';

export type ClassLesson = {
  lessonId: string;
  classId: string;
  name: string;
  description?: string;
  timeTable: TimeTableCell[];
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export type TimeTableCell = {
  week: WeekId;
  period: number;
};

export type ClassLessonStatus = {
  statusId: string;
  lessonId: string;
  userId: string;
  attendanceCount: number;
  nonAttendanceCount: number;
  lateCount: number;
  earlyCount: number;
  updatedAt: Date;
};

export type ClassLessonTestResult = {
  resultId: string;
  lessonId: string;
  userId: string;
  title: string;
  score: number;
  note?: string;
};

export type ClassLessonTask = {
  lessonId: string;
  classId: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export type ClassLessonTaskStatus = {
  statusId: string;
  lessonId: string;
  userId: string;
  completed: boolean;
  updatedAt: Date;
};
