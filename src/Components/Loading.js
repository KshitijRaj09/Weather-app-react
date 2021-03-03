import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#52b202',
  },
  
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div>
      <CircularProgress className={classes.root} style={{margin: '30px 45% 10px'}}/>
    </div>
  );
}
