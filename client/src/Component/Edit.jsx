import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { editUser, getUser } from "./services/api";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;

  // margin: auto; is a commonly used technique to horizontally center an element within its parent container..
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

const EditUser = (e) => {
  const [user, setUser] = useState({ UserDefault });

  const navigate = useNavigate(); //useNavigate ka used is liye krte h ke ager button pe click krte hi jo appi call ho rhi h wha pe chala jaye.
  const { id } = useParams();
  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    let response = await getUser(id);
    setUser(response.data);
  };

  const OnValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const EditUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  return (
    <>
      <Container>
        <Typography variant="h4">Edit User</Typography>

        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => OnValueChange(e)}
            name="name"
            value={user.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input
            onChange={(e) => OnValueChange(e)}
            name="username"
            value={user.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => OnValueChange(e)}
            name="email"
            value={user.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => OnValueChange(e)}
            name="phone"
            value={user.phone}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => EditUserDetails()}>
            Edit User
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditUser;
