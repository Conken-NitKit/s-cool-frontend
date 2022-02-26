import { SNS } from 'constants/sns';

export type UserSnsName = {
  userId: string;
} & SnsName;

export type SnsName = {
  [SNS.LINE]: string;
  [SNS.DISCORD]: string;
};

export type UserSnsAccount = {
  userId: string;
} & SnsAccount;

export type SnsAccount = {
  [SNS.TWITTER]: string;
  [SNS.TWITTER]: string;
  [SNS.FACEBOOK]: string;
  [SNS.INSTAGRAM]: string;
  [SNS.TIKTOK]: string;
  [SNS.GITHUB]: string;
  [SNS.ATCODER]: string;
  [SNS.QIITA]: string;
  [SNS.ZENN]: string;
};

export type UserSnsUrl = {
  userId: string;
} & SnsUrl;

export type SnsUrl = {
  [SNS.AMAZON_WISHLIST]: string;
  [SNS.MASH_MALLOW]: string;
  [SNS.PEING]: string;
};
