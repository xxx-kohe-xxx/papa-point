// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import useChangeGiftListStatus from 'hooks/use-change-gift-list-status';
import { cssConst } from '../constants';

const useStyles = makeStyles({
  button: {
    width: '90%',
    display: 'block',
    margin: `${cssConst.spaceM}px auto`,
  },
});

type Props = {
  exchangePoint: number;
  docId: string;
};

const ExchangeButton: FC<Props> = (props) => {
  const classes = useStyles();
  const { exchangePoint, docId } = props;
  const changeGiftListStatus = useChangeGiftListStatus(exchangePoint, docId);

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
