import styled from "@emotion/styled";
import { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import { addUser } from "./services/api";
const Container = styled(FormGroup)`
  width: 50%;

  // margin: auto; is a commonly used technique to horizontally center an element within its parent container.
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const UserDefault = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = (e) => {
  const [user, setUser] = useState({ UserDefault });

  const OnValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser();
  };

  return (
    <>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => OnValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input onChange={(e) => OnValueChange(e)} name="UserName" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => OnValueChange(e)} name="Email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => OnValueChange(e)} name="phone" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => addUserDetails()}>
            Add User
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddUser;
