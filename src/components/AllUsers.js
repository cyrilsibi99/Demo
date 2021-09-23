import { React, useEffect, useState } from "react";
import { deleteUser, getUsers } from "../Services/Api";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    margin: "50px 0px 0px 50px",
  },
  thead: {
    "&>*": {
      backgroundColor: "#000000",
    },
  },
});

export default function AllUsers() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
}
  return (
    <>
      <Table className={classes.table} style={{ width: "90%" }}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell style={{ color: "#FFFFFF" }}>Id</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}>Name</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}>Username</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}>Email</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}>Phone</TableCell>
            <TableCell style={{ color: "#FFFFFF" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant='contained' color="primary" style={{marginRight:"10px"}} component={Link} to={`/edit/${user.id}`}>Update</Button>
                  <Button variant='contained' color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
