import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import Input from "../../atoms/Input/Input";
import Constants from "../../../utils/js/Constants";
import { Button, Typography, Box, Paper } from "@material-ui/core";
import FormActions from "../../organisms/FormActions/FormActions";
import { addExperienceDetails } from "../../../store/actions";
import { CardWrapper, TitleWrapper } from "./ExperienceDetails.styles";
import { WrapperPaper } from "../../atoms/WrapperPaper/WrapperPaper";
import { ErrorMessage } from "../../atoms/Input/Input.Styles";

const FIELDS = Constants.EXPERIENCE_DETAILS.FIELDS;

const validate = (values) => {
  const errors = {};

  if (!values.experience || !values.experience.length) {
    errors.experience = { _error: "At least one experience must be entered" };
  } else {
    const experienceArrayErrors = [];
    values.experience.forEach((experience, experienceIndex) => {
      const experienceErrors = {};
      FIELDS.forEach((item, itemIndex) => {
        if (!experience || !experience[item.NAME]) {
          experienceErrors[item.NAME] = `${item.LABEL} is required`;
          experienceArrayErrors[experienceIndex] = experienceErrors;
        }
      });
    });
    if (experienceArrayErrors.length) {
      errors.experience = experienceArrayErrors;
    }
  }
  return errors;
};

const renderExperience = ({
  fields,
  meta: { touched, error, submitFailed },
}) => (
  <div>
    <Button color="primary" variant="contained" onClick={() => fields.push({})}>
      Add Experience
    </Button>
    {(touched || submitFailed) && error && <Box color="red">{error}</Box>}

    {fields.map((experience, index) => (
      <Paper>
        <Box m={2} p={2} key={index}>
          <Box mt={2}>
            <Typography variant="h6">Experience #{index + 1}</Typography>
          </Box>

          {FIELDS.map((item, itemIndex) => {
            //const name = item.NAME + "_" + index;
            const name = `${experience}.${item.NAME}`;
            const key = name + "_" + itemIndex;
            const label = `${item.LABEL}`;
            return (
              <Field
                name={name}
                type="text"
                component={Input}
                label={label}
                key={key}
                arrayField={true}
              />
            );
          })}
          <Button
            variant="contained"
            color="primary"
            title="Remove Experience"
            onClick={() => fields.remove(index)}
          >
            Remove Experience
          </Button>
        </Box>
      </Paper>
    ))}
  </div>
);

const ExperienceDetails = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  const onSubmit = (values, dispatch) => {
    dispatch(addExperienceDetails(values && values.experience));
  };
  const handleBack = () => {
    props.history.push(Constants.URL.ROUTES.ADDRESS_DETAILS);
  };
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {Constants.EXPERIENCE_DETAILS.TITLE}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldArray name="experience" component={renderExperience} />
        <FormActions
          displayBack={true}
          displayNext={true}
          nextLabel={"Submit"}
          handleSubmit={handleSubmit(onSubmit)}
          handleBack={handleBack}
          pristine={pristine}
          submitting={submitting}
        />
      </form>
    </div>
  );
};

export default reduxForm({
  form: "experience-details-form", // a unique identifier for this form
  validate,
})(ExperienceDetails);
