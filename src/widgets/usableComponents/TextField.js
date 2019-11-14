import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';



const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#ffa726',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#ffa726',
        },
      },
    },
  })(TextField);

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [`& fieldset`]: {
      borderRadius: 0,
    },
  },
  dense: {
    marginTop: theme.spacing(0),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();

  return (
      <CssTextField
        id={props.id}
        label={props.label}
        className={clsx(classes.textField, classes.dense)}
        value={props.value}
        onChange={props.onEdit}
        margin="dense"
        variant={props.variant}
        fullWidth = {props.fullWidth}
        placeholder = {props.placeholder}
        />
  );
}
