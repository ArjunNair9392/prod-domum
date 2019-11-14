import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
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
  }else if(props.EditIcon){
    return <EditIcon />;
  }else if(props.AddIcon){
    return <AddIcon />;
  }else if(props.AddCircleIcon){
    return <AddCircleIcon />;
  }else if(props.RemoveIcon){
    return <RemoveIcon />;
  }else if(props.RemoveCircleIcon){
    return <RemoveCircleIcon />;
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
