import classNames from 'classnames';
import React from 'react';

import { clamp } from 'utils/clamp';

type Props = {
  className?: string;
  progress: number;
};

export const ProgressBar: React.FC<Props> = ({ className, progress }) => {
  return (
    <div
      className={classNames(className, 'overflow-hidden bg-tertiary-regular')}
    >
      <div
        className="h-full bg-accent-primary-regular"
        style={{ width: `${clamp(progress, 0, 100)}%` }}
      />
    </div>
  );
};
