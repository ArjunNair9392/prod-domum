import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));

const Btn = withStyles(theme => ({
  root: {
    backgroundColor: orange[400],
  },
}))(Button);


export default function DomumButton(props) {
  const classes = useStyles();
  return (
    <Btn className={classes.button} size="small" square>
        {props.Content}
    </Btn>
  );
}
