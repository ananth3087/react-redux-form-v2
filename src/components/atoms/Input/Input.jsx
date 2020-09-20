import React from "react";
import { TextField, Typography, Box } from "@material-ui/core";
const Input = (props) => {
  const {
    placeholder = "Please Enter",
    input,
    meta,
    name,
    disabled = false,
    allowPattern = null,
    label,
    arrayField = false,
  } = props;
  const onChange = (event) => {
    if (allowPattern) {
      const regex = new RegExp(allowPattern);
      if (!regex.test(event.target.value)) {
        event.target.value = input.value;
      }
    }
    input.onChange(event);
  };

  if (disabled) {
    return <div>{input.disabled}</div>;
  } else {
    return (
      <div>
        <Typography>{label}</Typography>
        <div>
          <Box pb={2}>
            <TextField
              label={name}
              value={input.value}
              onChange={onChange}
              placeholder={placeholder}
            />
            {/*{meta.submitFailed && <ErrorMessage>{meta.error}</ErrorMessage>}*/}
            {(meta.submitFailed ||
              meta.touched ||
              (arrayField && (meta.touched || meta.error))) && (
              <Box color="red">{meta.error}</Box>
            )}
          </Box>
        </div>
      </div>
    ); /*
    return (
      <>
        <input
          value={input.value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {meta.submitFailed && <span>{meta.error}</span>}
      </>
    );*/
  }
};

export default Input;
