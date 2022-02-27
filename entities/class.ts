export type SchoolClass = {
  classId: string;
  schoolId: string;
  name: string;
  description?: string;
  suggestionJoinMessage?: string; // 加入時の確認画面で表示されるメッセージ
  needAliasCode: boolean; // 識別コードの登録が必須か否か
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

// アカウントIDを用いた直接招待
export type ClassDirectInvite = {
  inviteId: string;
  targetUserId: string;
  classId: string;
  canceled: boolean;
  createBy: Date;
  createdAt: Date;
};

// 招待リンク
export type ClassInviteRequest = {
  requestId: string;
  classId: string;
  isActive: boolean;
  createBy: Date; // 発行者のユーザーID
  createdAt: Date;
};

// 招待リンク経由での加入申請
export type ClassInviteResponse = {
  responseId: string;
  requestId: string;
  classId: string;
  userId: string;
  createdAt: Date;
};
