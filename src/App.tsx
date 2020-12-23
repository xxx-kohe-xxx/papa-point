// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import './App.css';
import { TotalPointsDisplay } from 'components/TotalPointsDisplay';
import { AddPoints } from 'components/AddPoints';
import { IndexGiftList } from 'components/IndexGiftList';

const App: FC = () => {
  return (
    <>
      <TotalPointsDisplay />
      <AddPoints />
      <IndexGiftList />
    </>
  );
};

export default App;
