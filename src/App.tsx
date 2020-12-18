// eslint-disable-next-line no-use-before-define
import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { TotalPointsDisplay } from 'components/TotalPointsDisplay';
import { AddPoints } from 'components/AddPoints';
import { IndexGiftList } from 'components/IndexGiftList';
import useGetTotalPoint from 'hooks/use-get-total-points';
import useGetGiftListDoc from 'hooks/use-get-gift-list-doc';
import { GiftList } from 'models/gift-list';

const App: FC = () => {
  // totalPoint取得
  const getCurrentPoint = useGetTotalPoint();
  const [totalPoint, setTotalPoint] = useState(0);
  const currentPoint = async () => {
    getCurrentPoint.then((point) => setTotalPoint(point));
  };
  currentPoint();

  // GiftList取得
  const getGiftListDoc = useGetGiftListDoc();
  const [giftList, setGiftList] = useState<GiftList>([]);
  const getGiftList = async () => {
    getGiftListDoc.then((response) => setGiftList(response));
  };
  useEffect(() => {
    getGiftList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TotalPointsDisplay totalPoint={totalPoint} />
      <AddPoints totalPoint={totalPoint} setTotalPoint={setTotalPoint} />
      <IndexGiftList giftList={giftList} setGiftList={setGiftList} />
    </>
  );
};

export default App;
