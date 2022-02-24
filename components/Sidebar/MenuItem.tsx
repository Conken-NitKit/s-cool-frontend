import classNames from 'classnames';
import React from 'react';

type Props = {
  label: string;
  icon?: string; // TODO: アイコン名のみに制限する
  active?: boolean;
  onClick?: VoidFunction;
};
export type MenuItemProps = Props;

export const MenuItem: React.FC<Props> = ({ label, icon, active, onClick }) => {
  return (
    <li
      className={classNames(
        'cursor-pointer select-none list-none rounded-lg px-4 py-2	text-primary-regular',
        {
          'bg-accent-primary-regular text-primary-inverted shadow-md': active,
          'hover:bg-secondary-regular': !active,
        },
      )}
      onClick={onClick}
    >
      {icon && <span></span>}
      {label}
    </li>
  );
};
