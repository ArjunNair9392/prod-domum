import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { orange } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PollIcon from '@material-ui/icons/Poll';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    color: orange[400],
  },
}));

function icon(props) {
  if(props.PhotoLibraryIcon){
    return <PhotoLibraryIcon />;
  }else if(props.AddShoppingCartIcon){
    return <AddShoppingCartIcon />;
  }else if(props.PollIcon){
    return <PollIcon />;
  }else if(props.SendIcon){
    return <SendIcon />;
  }else if(props.CloseIcon){
    return <CloseIcon />;
  }
}
export default function DomumFloatingButton(props) {
  const classes = useStyles();
  return (
      <IconButton aria-label="add a photo" className={classes.fab} size="small" onClick={props.handleSubmit}>
        {icon(props)}
      </IconButton>
  );
}
