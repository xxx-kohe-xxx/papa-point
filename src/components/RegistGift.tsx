// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import {
  Button,
  Card,
  CardHeader,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { cssConst } from '../constants';

const useStyles = makeStyles({
  card: {
    margin: '24px auto',
    width: '90%',
  },
  textInput: {
    width: '90%',
    margin: `${cssConst.spaceS}px 5%`,
  },
  button: {
    width: '90%',
    display: 'block',
    margin: `${cssConst.spaceS}px auto ${cssConst.spaceM}px`,
  },
});

export const RegistGift: FC = () => {
  const classes = useStyles();
  const registrationGift = () => {
    console.log('登録します');
  };
  const uploadFile = () => {
    console.log('画像アップロード');
  };

  return (
    <Card className={classes.card}>
      <CardHeader title="ごほうび登録" />
      <TextField
        className={classes.textInput}
        id="gift-name"
        label="ごほうび名"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        className={classes.textInput}
        id="required-points"
        label="必要ポイント"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <Button
        className={classes.button}
        variant="outlined"
        onClick={uploadFile}
      >
        画像を選択する
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        onClick={registrationGift}
      >
        登録する
      </Button>
    </Card>
  );
};
