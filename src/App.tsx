// eslint-disable-next-line no-use-before-define
import React, { FC, useState } from 'react';
import './App.css';
import { TotalPointsDisplay } from 'components/TotalPointsDisplay';
import { AddPoints } from 'components/AddPoints';
import { IndexGiftList } from 'components/IndexGiftList';
import useGetTotalPoint from 'hooks/use-get-total-points';

const App: FC = () => {
  // totalPoint取得
  const getCurrentPoint = useGetTotalPoint();
  const [totalPoint, setTotalPoint] = useState(0);
  const currentPoint = async () => {
    getCurrentPoint.then((point) => setTotalPoint(point));
  };
  currentPoint();

  return (
    <>
      <TotalPointsDisplay totalPoint={totalPoint} />
      <AddPoints totalPoint={totalPoint} setTotalPoint={setTotalPoint} />
      <IndexGiftList totalPoint={totalPoint} setTotalPoint={setTotalPoint} />
    </>
  );
};

export default App;
