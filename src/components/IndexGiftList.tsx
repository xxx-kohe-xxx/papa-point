// eslint-disable-next-line no-use-before-define
import React, { FC, useContext } from 'react';
import { Card, CardMedia, makeStyles } from '@material-ui/core';
import { GiftListContext } from 'contexts';
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
  const { giftList } = useContext(GiftListContext);

  return (
    <>
      <h2>ごほうび一覧</h2>
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
