import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();

//   const handleChange = name => event => {
//     setValues({ ...values, [name]: event.target.value });
//   };

  return (
      <TextField

        label="Name"
        className={classes.textField}
        //value={}
        onChange={this.props.handleChange}
        margin="normal"
        variant="outlined"
      />
  );
}