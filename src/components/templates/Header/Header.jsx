import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Constants from "../../../utils/js/Constants";
const Header = (props) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="white" noWrap>
          Registration Demo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
