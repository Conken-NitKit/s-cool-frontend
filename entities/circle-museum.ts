// 作品置き場（ミュージアム）
export type CircleMuseum = {
  museumId: string;
  circleId: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

// 作品
export type CircleMuseumProduct = {
  productId: string;
  circleId: string;
  museumId: string;
  title: string;
  description?: string;
  thumbnailUrl: string;
  link?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
};
