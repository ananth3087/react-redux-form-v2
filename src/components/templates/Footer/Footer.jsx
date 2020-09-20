import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Wrapper } from "./Footer.styles";
const Footer = (props) => {
  return (
    <Wrapper>
      <Box m={2} p={2}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "} Registration Demo. Powerd by Ananth Kannan.{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default Footer;
