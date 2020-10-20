import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const SimpleTable = (props) => {
  //Rendering Data In Browser
    const { name, email, phone} = props.values;
    return (
      <TableContainer component={Paper}>
        <h5 style={{ margin: 10 }}>User Added Successfully</h5>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>
                {name}
              </TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{phone}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default SimpleTable;