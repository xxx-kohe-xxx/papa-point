// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Card, CardMedia, LinearProgress, makeStyles } from '@material-ui/core';
import { GiftList } from 'models/gift-list';
import { cssConst } from '../constants';

const useStyles = makeStyles({
  root: {
    margin: '24px auto',
    width: '90%',
  },
  media: {
    backgroundSize: 'cover',
    height: '25vh',
  },
  progress: {
    width: '90%',
    display: 'block',
    margin: `${cssConst.spaceM}px auto`,
    borderRadius: '14px',
    height: '1rem',
    backgroundColor: 'whiteSmoke',
  },
  progressBar: {
    backgroundColor: 'skyblue',
    borderRadius: '14px',
  },
  point: {
    textAlign: 'end',
    margin: cssConst.spaceS,
  },
});

type Props = {
  giftList: GiftList;
  setGiftList: (giftList: GiftList) => void;
};

export const IndexGiftList: FC<Props> = (props) => {
  const classes = useStyles();
  const progress = 90;
  const { giftList } = props;

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
            <div>
              <LinearProgress
                classes={{ root: classes.progress, bar: classes.progressBar }}
                variant="determinate"
                value={progress}
              />
              <p className={classes.point}>
                あと 20 / {gift.exchangePoint}papapo
              </p>
            </div>
          </Card>
        );
      })}
    </>
  );
};
