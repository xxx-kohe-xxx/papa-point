// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Card, CardMedia, makeStyles } from '@material-ui/core';
import { GiftList } from 'models/gift-list';
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

type Props = {
  giftList: GiftList;
  totalPoint: number;
};

export const IndexGiftList: FC<Props> = (props) => {
  const classes = useStyles();
  const { giftList, totalPoint } = props;

  return (
    <>
      <h2>景品一覧</h2>
      {giftList.map((gift) => {
        if (!gift.id) {
          return false;
        }

        return (
          <Card className={classes.root} key={gift.id}>
            <CardMedia className={classes.media} image={gift.pic} />
            <ProgressBar
              exchangePoint={gift.exchangePoint}
              totalPoint={totalPoint}
            />
          </Card>
        );
      })}
    </>
  );
};
