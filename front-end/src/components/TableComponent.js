//Component To READ, DELETE & UPDATE
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Icon } from "@material-ui/core";
import EditFormComponent from "./EditFormComponent";
import { API_URL } from "../config";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  button: {
    margin: 10,
  },
});

export default function UserList() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [editUser, setEditUser] = useState({});


  //Fetching The Data - Using useEffect Hooks
  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [setUsers]);

  //Removing Data
  const removeData = (id) => {
    let url = `${API_URL}/users/${id}`;
    fetch(url, {
      method: "DELETE",
    }).then((res) => {
      const del = users.filter((employee) => id !== employee.id);
      setUsers(del);
    });
  };

  //Editing Data
  const editData = (user) => {
    setEditUser(user);
    setEditFormOpen(true);
  };

  const handleClose = () => {
    setEditFormOpen(false);
    setEditUser({});
  }

  const confirmEdit = (user) => {
    let url = `${API_URL}/users/${user.id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const newUsers = users;
        newUsers.forEach((user, index) => {
          if (user.id === data.id) {
            newUsers[index] = data;
          }
        });
        setUsers(newUsers);
        setEditFormOpen(false);
      });
  }

  //Rendering Data In Browser
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Email</TableCell>
              <TableCell align='right'>Phone</TableCell>
              <TableCell align='right'>Delete</TableCell>
              <TableCell align='right'>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell component='th' scope='row'>
                    {user.id}
                  </TableCell>
                  <TableCell align='right'>{user.name}</TableCell>
                  <TableCell align='right'>{user.email}</TableCell>
                  <TableCell align='right'>{user.phone}</TableCell>
                  <TableCell align='right'>
                    <Button onClick={() => removeData(user.id)}>
                      <Icon>delete</Icon>
                    </Button>
                  </TableCell>
                  <TableCell align='right'>
                    <Button onClick={() => editData(user)}>
                      <Icon>edit</Icon>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell component='th' scope='row'>
                  Loading...
                </TableCell>
                <TableCell align='right'>Loading...</TableCell>
                <TableCell align='right'>Loading...</TableCell>
                <TableCell align='right'>Loading...</TableCell>
                <TableCell align='right'>Loading...</TableCell>
                <TableCell align='right'>Loading...</TableCell>
                <TableCell align='right'>Loading...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <EditFormComponent 
        open={editFormOpen} 
        user={editUser} 
        confirmEdit={confirmEdit} 
        handleClose={handleClose}/>
    </>
  );
}
