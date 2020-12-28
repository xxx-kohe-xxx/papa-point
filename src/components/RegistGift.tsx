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
  const storeImage = useStoreGiftImage(image);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      const loadedImages = event.target.files[0];
      setPreview(URL.createObjectURL(loadedImages));
      setImage(loadedImages);
    }
  };

  const registrationGift = async () => {
    if (image) {
      const url = await storeImage();
      console.log(url);
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
      {!image ? false : <img className={classes.media} src={preview} alt="" />}
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
