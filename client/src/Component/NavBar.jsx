import styled from "@emotion/styled";
import { AppBar, Typography, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: black;
  // color: white;
`;
const Tabs = styled(NavLink)`
  color: inherit;

  text-decoration: none;
  margin-right: 20px;
`;

const NavBar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">Crud-Operation...</Tabs>
          <Tabs to="/all">AllUser</Tabs>
          <Tabs to="/add">AddUser</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};

export default NavBar;
