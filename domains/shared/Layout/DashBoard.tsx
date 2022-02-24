import React, { useCallback, useEffect, useRef } from 'react';

import { MenuId } from 'constants/menu';
import { MainSidebar } from 'domains/shared/MainSidebar';

type Props = {
  activeMenuId?: MenuId;
};

export const DashBoard: React.FC<Props> = ({ children, activeMenuId }) => {
  const sidebarRef = useRef<HTMLDivElement>();
  const bodyRef = useRef<HTMLDivElement>();

  useEffect(() => {
    bodyRef.current.scrollIntoView();
  }, []);

  // HACK:
  // 横スクロールした際に snap がうまく聞かない場合があるので、
  // その場合は時間差で強制的に正常な位置にスクロールさせる処理
  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      const scrollLeft = sidebarRef.current.scrollLeft;
      const bodyPosition = bodyRef.current.offsetLeft;

      if (scrollLeft !== 0 && scrollLeft !== bodyPosition) {
        bodyRef.current.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 600);
  }, []);

  const handleBodyClick = useCallback(() => {
    bodyRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  const handleSidebarItemClick = useCallback(() => {
    bodyRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  return (
    <div
      ref={sidebarRef}
      onTouchEnd={handleTouchEnd}
      className="flex h-screen w-screen snap-x overflow-x-scroll bg-secondary-regular"
    >
      <div className="h-full w-10/12 max-w-xs shrink-0 snap-end overflow-scroll bg-primary-regular">
        <MainSidebar
          activeMenuId={activeMenuId}
          itemClick={handleSidebarItemClick}
        />
      </div>
      <div
        ref={bodyRef}
        className="h-full w-screen shrink-0 snap-start overflow-y-scroll lg:w-full lg:shrink"
        onClick={handleBodyClick}
      >
        {children}
      </div>
    </div>
  );
};
