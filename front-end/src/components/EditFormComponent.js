import React, { useEffect } from "react";
import { Button, TextField, Dialog } from "@material-ui/core";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const EditFormComponent = (props) => {

  const [user, setUser] = React.useState({});
  const [error, setError] = React.useState('');
  
  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  const handleChange = (value, type) => {
    setUser({...user, [type]: value});
  }

  const confirm = (e) => {
    e.preventDefault();

    const {name, email, phone} = user;

    if (!name || !email || !phone) {
      setError('All fields are required!');
    } else {
      setError('');
      props.confirmEdit(user);
    }
  };

  return (
    <Dialog 
      open={props.open} 
      fullWidth 
      maxWidth={'sm'} 
      onClose={props.handleClose} 
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit User Data</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can update the user data here.
        </DialogContentText>
          <TextField
            label='Name'
            onChange={(e) => handleChange(e.target.value, 'name')}
            defaultValue={user.name}
            margin='dense'
            fullWidth
          />
          <br />
          <TextField
            label='Email'
            onChange={(e) => handleChange(e.target.value, 'email')}
            defaultValue={user.email}
            margin='dense'
            fullWidth
          />
          <br />
          <TextField
            label='Phone'
            onChange={(e) => handleChange(e.target.value, 'phone')}
            defaultValue={user.phone}
            margin='dense'
            fullWidth
          />
          {error && <p> {error}</p>}
          <br />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button style={{ margin: 10 }} color='primary' variant='contained' onClick={confirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );

}

export default EditFormComponent;
