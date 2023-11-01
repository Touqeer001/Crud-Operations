import { useEffect } from "react"; //useEffect ye 3 chizo se mil kr bana h ek "componentDidMount,ekComponentUpdate,or Ek ComponentMount."
import { Table, TableHead, TableCell, TableRow } from "@mui/material";
import { getUsers } from "../Component/services/api.js";

const AllUser = () => {
  useEffect(() => {
    getAllUsers();
  }, []); //ye wali condition componentdidMount ki hoti h Empty array is liye pass kiye h ki ek baar call ho

  const getAllUsers = async () => {
    await getUsers(); //ye api h jo aa rhi h api.js file se.
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </>
  );
};

export default AllUser;
