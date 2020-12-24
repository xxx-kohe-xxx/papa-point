// eslint-disable-next-line no-use-before-define
import React, { FC, useEffect, useState } from 'react';
import useGetGiftListDoc from 'hooks/use-get-gift-list-doc';
import { GiftList } from 'models/gift-list';
import { GiftListContext } from './contexts';

const GiftListApp: FC = ({ children }) => {
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
    <GiftListContext.Provider value={{ giftList, setGiftList }}>
      {children}
    </GiftListContext.Provider>
  );
};

export default GiftListApp;
