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
import useStoreGiftImage from 'hooks/use-store-gift-image';
import useResisterGift from 'hooks/use-register-gift';
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
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState('');
  const [name, setName] = useState<string>('');
  const [points, setPoints] = useState<number>(0);
  const storeImage = useStoreGiftImage(image);
  const registerGift = useResisterGift();

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangePoints = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(Number(event.target.value));
  };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      const loadedImages = event.target.files[0];
      setPreview(URL.createObjectURL(loadedImages));
      setImage(loadedImages);
    }
  };

  const registrationGift = async () => {
    if (image) {
      const url = await storeImage();
      await registerGift(name, points, url);
      setImage(undefined);
      setPreview('');
      setName('');
      setPoints(0);
    } else {
      alert('画像を選択してください');
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader title="ごほうび登録" />
      <TextField
        className={classes.textInput}
        id="gift-name"
        label="ごほうび名"
        value={name}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={handleChangeName}
      />
      <TextField
        className={classes.textInput}
        id="required-points"
        label="必要ポイント"
        value={points}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        onChange={handleChangePoints}
      />
      {!image ? false : <img className={classes.media} src={preview} alt="" />}
      <input
        accept="image/*"
        className={classes.input}
        id="registration-image"
        type="file"
        onChange={handleChangeImage}
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
