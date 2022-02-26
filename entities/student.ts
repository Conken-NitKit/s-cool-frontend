export type Student = {
  studentId: string;
  userId: string;
  schoolId: string;
  classId: string;
  displayName: string;
  schoolRole: SchoolRole;
  classRole: ClassRole;
  createdAt: Date;
  updatedAt: Date;
};

export const SCHOOL_ROLE = {
  OWNER: 'owner',
  ADMIN: 'admin',
  MEMBER: 'member',
} as const;
export type SchoolRole = typeof SCHOOL_ROLE[keyof typeof SCHOOL_ROLE];

export const CLASS_ROLE = {
  OWNER: 'owner',
  ADMIN: 'admin',
  MEMBER: 'member',
} as const;
export type ClassRole = typeof CLASS_ROLE[keyof typeof CLASS_ROLE];
