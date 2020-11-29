// eslint-disable-next-line no-use-before-define
import React, { ChangeEvent, FC, useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  NativeSelect,
} from '@material-ui/core';
import useAddPoints from 'hooks/use-add-points';

const useStyles = makeStyles({
  formControl: {
    display: 'flex',
    margin: '24px auto',
    width: '90%',
  },
  nativeSelect: {
    fontSize: '24px',
    textAlign: 'center',
  },
  papapoUnit: {
    color: '#999',
  },
  button: {
    // paddingLeft: '24px',
  },
});

export const AddPoints: FC = () => {
  const classes = useStyles();
  const [point, setPoint] = useState(5);
  const papapoUnit = <span className={classes.papapoUnit}>papapo</span>;
  const addPoint = useAddPoints(point);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setPoint(Number(event.target.value));
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          あげるポイントを選択してください。
        </InputLabel>
        <NativeSelect
          className={classes.nativeSelect}
          defaultValue={point}
          onChange={handleChange}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </NativeSelect>
        <FormHelperText>{papapoUnit}</FormHelperText>
      </FormControl>
      <Button className={classes.button} variant="contained" onClick={addPoint}>
        ポイントをあげる
      </Button>
    </>
  );
};
