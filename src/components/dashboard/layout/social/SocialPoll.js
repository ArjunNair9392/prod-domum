import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

class SocialPoll extends Component {

  state = {
    open: false,
    days: '',
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ ...this.state, open: true });
  };

  handleClose = () => {
    this.setState({ ...this.state, open: false });
  };
  render() {
    return (
      <div>
        <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form>

              <div className="input-field">
                <label htmlFor="userMessage">
                  Option 1
                </label>
                <textarea id="option2" className="materialize-textarea" />
              </div>

              <div className="input-field">
                <label htmlFor="userMessage">
                  Option 2
                </label>
                <textarea id="option1" className="materialize-textarea"/>
              </div>

              <FormControl className="formControl">
                <InputLabel htmlFor="day-native-simple">Days</InputLabel>
                <Select
                  native
                  value={this.state.days}
                  onChange={this.handleChange('days')}
                  input={<Input id="day-native-simple" />}
                >
                  <option value="" />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SocialPoll;
