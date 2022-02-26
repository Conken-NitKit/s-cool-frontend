export type CircleMuseum = {
  museumId: string;
  circleId: string;
  displayName: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export type CircleMuseumProduct = {
  productId: string;
  lessonId: string;
  displayName: string;
  link?: string;
  thumbnailUrl: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
};
