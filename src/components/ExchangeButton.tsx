// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import useChangeGiftListStatus from 'hooks/use-change-gigt-list-status';
import { cssConst } from '../constants';

const useStyles = makeStyles({
  button: {
    width: '90%',
    display: 'block',
    margin: `${cssConst.spaceM}px auto`,
  },
});

type Props = {
  totalPoint: number;
  exchangePoint: number;
  docId: string;
  setTotalPoint: (value: number) => void;
};

const ExchangeButton: FC<Props> = (props) => {
  const classes = useStyles();
  const { totalPoint, exchangePoint, docId, setTotalPoint } = props;
  const changeGiftListStatus = useChangeGiftListStatus(
    totalPoint,
    exchangePoint,
    docId,
    setTotalPoint,
  );

  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={changeGiftListStatus}
    >
      交換する
    </Button>
  );
};

export default ExchangeButton;
