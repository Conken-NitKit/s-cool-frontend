export const SNS = {
  LINE: 'line',
  DISCORD: 'discord',
  TWITTER: 'twitter',
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
  TIKTOK: 'tiktok',
  GITHUB: 'github',
  ATCODER: 'atcoder',
  QIITA: 'qiita',
  ZENN: 'zenn',
  AMAZON_WISHLIST: 'amazon-wishlist',
  MASH_MALLOW: 'mash-mallow',
  PEING: 'peing',
} as const;

export const SNS_INFO = {
  [SNS.LINE]: {
    id: [SNS.LINE],
    label: 'LINE',
  },
  [SNS.DISCORD]: {
    id: [SNS.DISCORD],
    label: 'Discord',
  },
  [SNS.TWITTER]: {
    id: [SNS.TWITTER],
    label: 'Twitter',
  },
  [SNS.FACEBOOK]: {
    id: [SNS.FACEBOOK],
    label: 'Facebook',
  },
  [SNS.INSTAGRAM]: {
    id: [SNS.INSTAGRAM],
    label: 'Instagram',
  },
  [SNS.TIKTOK]: {
    id: [SNS.TIKTOK],
    label: 'TikTok',
  },
  [SNS.GITHUB]: {
    id: [SNS.GITHUB],
    label: 'GitHub',
  },
  [SNS.ATCODER]: {
    id: [SNS.ATCODER],
    label: 'AtCoder',
  },
  [SNS.QIITA]: {
    id: [SNS.QIITA],
    label: 'Qiita',
  },
  [SNS.ZENN]: {
    id: [SNS.ZENN],
    label: 'Zenn',
  },
  [SNS.AMAZON_WISHLIST]: {
    id: [SNS.AMAZON_WISHLIST],
    label: '欲しいものリスト/Amazon',
  },
  [SNS.MASH_MALLOW]: {
    id: [SNS.MASH_MALLOW],
    label: 'マシュマロ',
  },
  [SNS.PEING]: {
    id: [SNS.PEING],
    label: '質問箱',
  },
} as const;
