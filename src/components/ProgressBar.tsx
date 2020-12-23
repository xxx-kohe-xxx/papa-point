// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { LinearProgress, makeStyles } from '@material-ui/core';
import { cssConst } from '../constants';
import ExchangeButton from './ExchangeButton';

const useStyles = makeStyles({
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
  exchangePoint: number;
  totalPoint: number;
  docId: string;
  setTotalPoint: (value: number) => void;
};

const ProgressBar: FC<Props> = (props) => {
  const classes = useStyles();
  const { exchangePoint, totalPoint, docId, setTotalPoint } = props;
  // 合計ポイントが交換ポイントを上回っている場合にTrue(交換可能)
  const isExchangeable: boolean = totalPoint >= exchangePoint;
  const upToTargetPoint: number = exchangePoint - totalPoint;
  // 進捗率(単位は%)
  const progressRate: number = (totalPoint / exchangePoint) * 100;

  if (isExchangeable) {
    return (
      <ExchangeButton
        totalPoint={totalPoint}
        exchangePoint={exchangePoint}
        docId={docId}
        setTotalPoint={setTotalPoint}
      />
    );
  }

  return (
    <>
      <LinearProgress
        classes={{ root: classes.progress, bar: classes.progressBar }}
        variant="determinate"
        value={progressRate}
      />
      <p className={classes.point}>
        あと {upToTargetPoint} / {exchangePoint} papapo
      </p>
    </>
  );
};

export default ProgressBar;
