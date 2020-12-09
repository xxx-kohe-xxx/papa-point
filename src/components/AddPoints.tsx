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
import useUpdateTotalPoints from 'hooks/use-update-total-points';

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

type Props = {
  totalPoint: number;
  setTotalPoint: (totalPoint: number) => void;
};

export const AddPoints: FC<Props> = (props) => {
  const { totalPoint, setTotalPoint } = props;
  const classes = useStyles();
  const [addPoint, setAddPoint] = useState(5);
  const papapoUnit = <span className={classes.papapoUnit}>papapo</span>;
  const updatePoint = useUpdateTotalPoints(addPoint, totalPoint, setTotalPoint);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setAddPoint(Number(event.target.value));
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          あげるポイントを選択してください。
        </InputLabel>
        <NativeSelect
          className={classes.nativeSelect}
          defaultValue={addPoint}
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
      <Button
        className={classes.button}
        variant="contained"
        onClick={updatePoint}
      >
        ポイントをあげる
      </Button>
    </>
  );
};
