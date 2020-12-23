// eslint-disable-next-line no-use-before-define
import React, { FC, useEffect, useState } from 'react';
import { Card, CardMedia, makeStyles } from '@material-ui/core';
import { GiftList } from 'models/gift-list';
import useGetGiftListDoc from 'hooks/use-get-gift-list-doc';
import ProgressBar from './ProgressBar';

const useStyles = makeStyles({
  root: {
    margin: '24px auto',
    width: '90%',
  },
  media: {
    backgroundSize: 'cover',
    height: '25vh',
  },
});

export const IndexGiftList: FC = () => {
  const classes = useStyles();

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
      <h2>景品一覧</h2>
      {giftList.map((gift) => {
        if (!gift.id || gift.status) {
          return false;
        }

        return (
          <Card className={classes.root} key={gift.id}>
            <CardMedia className={classes.media} image={gift.pic} />
            <ProgressBar exchangePoint={gift.exchangePoint} docId={gift.id} />
          </Card>
        );
      })}
    </>
  );
};
