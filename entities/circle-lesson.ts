export type CircleLesson = {
  lessonId: string;
  circleId: string;
  displayName: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export type CircleLessonTask = {
  lessonId: string;
  circleId: string;
  displayName: string;
  link: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export type CircleLessonTaskStatus = {
  statusId: string;
  lessonId: string;
  userId: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};