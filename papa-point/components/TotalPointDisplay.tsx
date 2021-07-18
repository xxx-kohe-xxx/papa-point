import { Card, CardContent, CardHeader } from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      textAlign: 'right',
    },
    point: {
      fontSize: '64px',
    },
  }),
);

const TotalPoint =  ({totalPoint}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title="現在の合計PaPaPointは" disableTypography />
      <CardContent className={classes.content}>
          <span className={classes.point}>{ totalPoint }</span>
          <span>papapo</span>
      </CardContent>
    </Card>
  )
}



export default TotalPoint;