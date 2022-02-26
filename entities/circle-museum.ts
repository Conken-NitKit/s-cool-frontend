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

export type CircleMuseumProduct = {
  productId: string;
  lessonId: string;
  title: string;
  description?: string;
  thumbnailUrl: string;
  link?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
};
