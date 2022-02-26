import { AppProps } from 'next/app';
import React from 'react';

import { DashBoard } from 'domains/shared/Layout';

export const Home: React.FC<AppProps> = () => {
  return (
    <DashBoard>
      <div></div>
    </DashBoard>
  );
};

export default Home;
