import React from "react";
import { ActionWrapper } from "./FormActions.styles";
import { Button, Box } from "@material-ui/core";
const FormActions = (props) => {
  return (
    <ActionWrapper>
      <Box mt={2}>
        {props.displayBack && <Button onClick={props.handleBack}>Back</Button>}
        {props.displayNext && (
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={props.handleSubmit}
            disabled={props.pristine || props.submitting}
          >
            {props.nextLabel}
          </Button>
        )}

        {/*<Button variant="contained" color="primary" onClick={handleNext}>
      {activeStep === steps.length - 1 ? "Place order" : "Next"}
</Button>*/}
      </Box>
    </ActionWrapper>
  );
};

export default FormActions;
