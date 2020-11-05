// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '24px auto',
    width: '90%',
  },

  content: {
    fontSize: '64px',
    marginRight: '24px',
    textAlign: 'right',
  },

  unit: {
    fontSize: '16px',
    margin: '4px',
  },
});

export const TotalPointsDisplay: FC = () => {
  const classes = useStyles();
  const unit = <span className={classes.unit}>papapo</span>;
  const totalPoint = 95;

  return (
    <Card className={classes.root}>
      <CardHeader title="現在の合計PapaPointは" disableTypography />
      <CardContent className={classes.content}>
        {totalPoint}
        {unit}
      </CardContent>
    </Card>
  );
};
