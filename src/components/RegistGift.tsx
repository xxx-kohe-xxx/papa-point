// eslint-disable-next-line no-use-before-define
import React, { FC, useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  // CardMedia,
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
  input: {
    display: 'none',
  },
  media: {
    backgroundSize: 'cover',
    height: '25vh',
    display: 'block',
    margin: '0 auto',
  },
  button: {
    width: '90%',
    display: 'block',
    margin: `${cssConst.spaceS}px auto ${cssConst.spaceM}px`,
    textAlign: 'center',
  },
});

export const RegistGift: FC = () => {
  const classes = useStyles();
  const [image, setImage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event != null && event.target != null && event.target.files != null) {
      const loadedImages = URL.createObjectURL(event.target.files[0]);
      setImage(loadedImages);
    }
  };

  const registrationGift = () => {
    console.log('登録します');
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
      {!image ? false : <img className={classes.media} src={image} alt="" />}
      <input
        accept="image/*"
        className={classes.input}
        id="registration-image"
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="registration-image">
        <Button className={classes.button} variant="outlined" component="span">
          画像を選択する
        </Button>
      </label>
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
