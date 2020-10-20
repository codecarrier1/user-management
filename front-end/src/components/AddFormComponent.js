import React from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import SuccessComponent from "./SuccessComponent";
import { API_URL } from "../config";

const AddFormComponent = () => {

  const [user, setUser] = React.useState({
    name: '',
    email: '',
    phone: ''
  });
  const [open, setOpen] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const confirm = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.phone) {
      setError('All fields are required!');
    } else {
      setError('');
      fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(user)
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setOpen(false);
          setSuccess(true);
        }
        return response.json();
      })
      .then((json) => console.log(json));
    }
  };

  const handleChange = (value, type) => {
    setUser({...user, [type]: value});
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Dialog 
        open={open} 
        fullWidth maxWidth='sm' 
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create A User</DialogTitle>
        <DialogContent>
          <TextField
            label='Name'
            onChange={(e) => handleChange(e.target.value, 'name')}
            defaultValue={user.name}
            margin='normal'
            fullWidth
            variant='outlined'
          />
          <br />
          <TextField
            label='Email'
            onChange={(e) => handleChange(e.target.value, 'email')}
            defaultValue={user.email}
            margin='normal'
            fullWidth
            variant='outlined'
          />
          <br />
          <TextField
            label='Phone'
            onChange={(e) => handleChange(e.target.value, 'phone')}
            defaultValue={user.phone}
            margin='normal'
            fullWidth
            variant='outlined'
          />
          {error && <p> {error}</p>}
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button style={{ margin: 10 }} color='primary' variant='contained' onClick={confirm}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {success && <SuccessComponent values={user}/>}
    </>
  );

}

export default AddFormComponent;
