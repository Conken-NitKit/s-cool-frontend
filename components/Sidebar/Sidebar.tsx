import React from 'react';

type Props = {
  title?: string;
};

export const Sidebar: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="px-4 h-full">
      {!!title && <div>{title}</div>}
      <div className="space-y-1">{children}</div>
    </div>
  );
};
