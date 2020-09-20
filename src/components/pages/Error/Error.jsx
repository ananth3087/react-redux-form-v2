import React from "react";
import { Typography } from "@material-ui/core";
import { WrapperPaper } from "../../atoms/WrapperPaper/WrapperPaper";
const Error = (props) => {
  return (
    <WrapperPaper>
      <Typography variant="h3"> Error: Please try again later</Typography>
    </WrapperPaper>
  );
};

export default Error;
