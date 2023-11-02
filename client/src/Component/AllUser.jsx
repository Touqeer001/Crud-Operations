import { useEffect, useState } from "react"; //useEffect ye 3 chizo se mil kr bana h ek  "componentDidMount,ekComponentUpdate,or Ek ComponentMount."
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import { getUsers } from "../Component/services/api.js";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [users, setUsers] = useState([]); //Api ka sara data users me store ho gya h

  useEffect(() => {
    getAllUsers();
  }, []); //ye wali condition componentdidMount ki hoti h Empty array is liye pass kiye h ki ek baar call ho

  const getAllUsers = async () => {
    let response = await getUsers(); //ye api h jo aa rhi h api.js file se.
    setUsers(response.data);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {/* <TableCell>Id</TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                {/* /*button ke saath routing used nhi kr sakte uske liye link to component ki trah treate kya jata hao. */}
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button variant="contained">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AllUser;
