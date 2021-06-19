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
  const [points, setPoints] = useState<number>();
  const [isFocusName, setIsFocusName] = useState<boolean>(false);
  // const [isFocusPoints, setIsFocusPoints] = useState<boolean>(false);
  const storeImage = useStoreGiftImage(image);
  const registerGift = useResisterGift();

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleBlurName = () => {
    setIsFocusName(Boolean(!name.trim()));
  };

  const handleChangePoints = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setPoints(Number(event.target.value));
  };
  // const handleBlurPoints = () => {
  //   setIsFocusPoints(Boolean(!points));
  // };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null) {
      const loadedImages = event.target.files[0];
      setPreview(URL.createObjectURL(loadedImages));
      setImage(loadedImages);
    }
  };

  // eslint-disable-next-line consistent-return
  const registrationGift = async () => {
    if (name && points) {
      const url = await storeImage();
      await registerGift(name, points, url);
      setImage(undefined);
      setPreview('');
      setName('');
      setPoints(0);
    } else {
      alert(
        `${name.trim() ? '' : 'ごほうび名を入力して下さい。\n'}${
          points ? '' : '必須ポイントを入力して下さい。\n'
        }`,
      );
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader title="ごほうび登録" />
      <form>
        <TextField
          className={classes.textInput}
          id="gift-name"
          label="ごほうび名(入力必須)"
          value={name}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          error={!name.trim() && isFocusName}
          onChange={handleChangeName}
          onBlur={handleBlurName}
        />
        <TextField
          className={classes.textInput}
          id="required-points"
          label="必要ポイント(入力必須)"
          value={points}
          margin="normal"
          name="points"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          // error={!points && isFocusPoints}
          onChange={handleChangePoints}
          // onBlur={handleBlurPoints}
        />
        {!image ? (
          false
        ) : (
          <img className={classes.media} src={preview} alt="" />
        )}
        <input
          accept="image/*"
          className={classes.input}
          id="registration-image"
          type="file"
          onChange={handleChangeImage}
        />
        <label htmlFor="registration-image">
          <Button
            className={classes.button}
            variant="outlined"
            component="span"
          >
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
      </form>
    </Card>
  );
};
