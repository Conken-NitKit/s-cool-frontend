export type Student = {
  studentId: string;
  userId: string;
  classId: string;
  aliasCode?: string;
  displayName: string;
  role: ClassRole; // 所属クラスのアクセス権限
  createdAt: Date;
  updatedAt: Date;
  joinedBy: string; // 招待者 or 承認者 のユーザーID
};

// 所属クラスのアクセス権限
export const CLASS_ROLE = {
  OWNER: 'owner',
  ADMIN: 'admin',
  MEMBER: 'member',
} as const;
export type ClassRole = typeof CLASS_ROLE[keyof typeof CLASS_ROLE];
