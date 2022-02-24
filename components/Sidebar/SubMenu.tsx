import classnames from 'classnames';
import React, { useCallback, useEffect, useRef } from 'react';

import { useToggle } from 'hooks/useToggle';

type Props = {
  label: string;
  icon?: string; // TODO: アイコン名のみに制限する
  defaultOpen?: boolean;
  onOpenChange?: (_?: boolean) => void;
};

export const SubMenu: React.FC<Props> = ({
  children,
  label,
  defaultOpen = false,
  onOpenChange,
}) => {
  const [opened, toggle] = useToggle(!defaultOpen, onOpenChange);
  const outerRef = useRef<HTMLUListElement | null>();

  const startTransition = useCallback(() => {
    const prevHeight = outerRef.current.getBoundingClientRect().height;
    let endHeight = 0;

    if (opened) {
      outerRef.current.style.height = 'auto';
      endHeight = outerRef.current.getBoundingClientRect().height;
      outerRef.current.style.height = `${prevHeight}px`;
    }

    setTimeout(() => {
      outerRef.current.style.transitionProperty = 'height';
      outerRef.current.style.height = `${endHeight}px`;
    }, 50);
  }, [opened]);

  const endTransition = useCallback(() => {
    outerRef.current.style.transitionProperty = 'none';
  }, []);

  useEffect(() => {
    startTransition();
  }, [opened, startTransition]);

  const handleLabelClick = useCallback(() => {
    toggle();
  }, [toggle]);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.currentTarget === outerRef.current && e.propertyName === 'height') {
        endTransition();
      }
    },
    [endTransition],
  );

  return (
    <li className="list-none">
      {!!label && (
        <div
          className="flex cursor-pointer select-none items-center justify-between rounded-lg py-2 px-4 text-primary-regular hover:bg-secondary-regular"
          onClick={handleLabelClick}
        >
          <div>{label}</div>
          <span
            className={classnames('transition-transform duration-150 ease-in', {
              'rotate-90': opened,
            })}
          >
            {'>'}
          </span>
        </div>
      )}
      <ul
        ref={outerRef}
        className="space-y-2 overflow-hidden pl-6 duration-150"
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="space-y-1 pt-1">{children}</div>
      </ul>
    </li>
  );
};
