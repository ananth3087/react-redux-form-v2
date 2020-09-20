import React from "react";
import { Typography } from "@material-ui/core";
import { reduxForm } from "redux-form";
import Constants from "../../../utils/js/Constants";
import { addPersonalDetails } from "../../../store/actions/index";
import { WrapperPaper } from "../../atoms/WrapperPaper/WrapperPaper";
import FormActions from "../../organisms/FormActions/FormActions";
import RenderFields from "../../organisms/RenderFields/RenderFields";
/*const formValidators = {
  firstName: [
    validators.required("Second name is not found"),
    validators.alphabet(),
    validators.maxLength(500),
  ],
  secondName: [
    validators.required("Second name is not found"),
    validators.alphabet(),
    validators.maxLength(500),
  ],
  contactNumber: [
    validators.required("Contact Number is not found"),
    validators.number(),
    validators.phoneNumber(),
  ],
  email: [validators.required("Email is not found"), validators.email()],
};*/

const PersonalDetails = (props) => {
  const FIELDS = Constants.PERSONAL_DETAILS.FIELDS;

  const { handleSubmit, pristine, submitting } = props;

  const onSubmit = (values, dispatch) => {
    dispatch(
      addPersonalDetails(
        values.firstName,
        values.secondName,
        values.contactNumber,
        values.email
      )
    );
    props.history.push(Constants.URL.ROUTES.ADDRESS_DETAILS);
  };
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {Constants.PERSONAL_DETAILS.TITLE}
      </Typography>
      <RenderFields fields={FIELDS} />
      {/*{FIELDS &&
        FIELDS.map((item, index) => {
          return (
            <div key={item.NAME}>
              <Typography>{item.LABEL}</Typography>
              <div>
                <Field
                  name={item.NAME}
                  component={Input}
                  validate={item.VALIDATORS}
                />
              </div>
            </div>
          );
        })}*/}

      {/*<div>
        <Typography>Second Name</Typography>
        <div>
          <Field
            name="secondName"
            component={Input}
            validate={formValidators.firstName}
          />
        </div>
      </div>*/}
      <FormActions
        displayBack={false}
        displayNext={true}
        nextLabel={"Next"}
        handleSubmit={handleSubmit(onSubmit)}
        pristine={pristine}
        submitting={submitting}
      />
      {/*<ActionWrapper>
        {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={pristine || submitting}
        >
          Next
        </Button>

        <Button variant="contained" color="primary" onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Place order" : "Next"}
    </Button>
      </ActionWrapper>*/}
    </div>
  );
};
export default reduxForm({
  form: "personal-details-form",
  //validate
})(PersonalDetails);
