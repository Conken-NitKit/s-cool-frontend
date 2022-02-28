export type Circle = {
  circleId: string;
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
export type CircleDirectInvite = {
  inviteId: string;
  targetUserId: string;
  circleId: string;
  canceled: boolean;
  createBy: Date;
  createdAt: Date;
};

// 招待リンク
export type CircleInviteRequest = {
  requestId: string;
  circleId: string;
  isActive: boolean;
  createBy: Date; // 発行者のユーザーID
  createdAt: Date;
};

// 招待リンク経由での加入申請
export type CircleInviteResponse = {
  responseId: string;
  requestId: string;
  circleId: string;
  userId: string;
  createdAt: Date;
};
