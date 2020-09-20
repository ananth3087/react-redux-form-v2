import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Field, reduxForm, FieldArray } from "redux-form";
import Input from "../../atoms/Input/Input";
import Constants from "../../../utils/js/Constants";
import { addExperienceDetails } from "../../../store/actions/index";
import { WrapperPaper } from "../../atoms/WrapperPaper/WrapperPaper";
import FormActions from "../../organisms/FormActions/FormActions";
import { CardWrapper, TitleWrapper } from "./ExpeirenceDetails.styles";
const FIELDS = Constants.EXPERIENCE_DETAILS.FIELDS;

const ExperienceDetails = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  const onSubmit = (values, dispatch) => {
    dispatch(addExperienceDetails(values && values.experience));
  };
  const handleBack = () => {
    props.history.push(Constants.URL.ROUTES.ADDRESS_DETAILS);
  };

  const renderExperiences = ({ fields, meta: { error } }) => (
    <div>
      <Button variant="contained" color="primary" onClick={() => fields.push()}>
        Add Experience
      </Button>

      {fields.map((exp, index) => {
        const fieldIndex = index + 1;
        const title = `Experience #${fieldIndex}`;
        const expkey = "exp_" + fieldIndex;
        return (
          <CardWrapper key={expkey}>
            <TitleWrapper>
              <Typography variant="h6">{title}</Typography>
            </TitleWrapper>

            {FIELDS.map((item, itemIndex) => {
              //const name = item.NAME + "_" + fieldIndex;
              const name = `${exp}.${item.NAME}`;
              const key = name + "_" + itemIndex;
              const label = `${item.LABEL} #${fieldIndex}`;
              return (
                <Field
                  name={name}
                  type="text"
                  component={Input}
                  label={label}
                  key={key}
                />
              );
            })}

            <Button onClick={() => fields.remove(index)} variant="outlined">
              Remove
            </Button>
            {/*</FormSection>*/}
          </CardWrapper>
        );
      })}
      {error && <li className="error">{error}</li>}
    </div>
  );

  return (
    <WrapperPaper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" gutterBottom>
          {Constants.EXPERIENCE_DETAILS.TITLE}
        </Typography>

        {/*<FieldArray
          name="experience"
          component={renderExperiences}
          validate = {validateExperience}
        />*/}
        <FieldArray name="experience" component={renderExperiences} />

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
    </WrapperPaper>
  );
};
/*

const validate = (values) => {
  const errors = {};

  if (!values.experience || !values.experience.length) {
    errors.experience = { _error: "At least one Experience must be entered" };
  } else {
    const experienceArrayErrors = [];
    values.experience.forEach((experience, experienceIndex) => {
      const experienceErrors = {};

      FIELDS.forEach((item, itemIndex) => {
        if (!experience || !experience[item.NAME]) {
          experienceErrors[item.NAME] = `${item.NAME} is required`;
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

const validateExperience = (values) => {
  if (values && !values.length) return;

  const errorsArray = [];

  values &&
    values.forEach((value) => {
      if (value) {
        const errors = {};

        FIELDS.forEach((item, itemIndex) => {
          if (!value[item.NAME]) {
            errors[item.NAME] = `${item.NAME} is required`;
          }
        });

        errorsArray.push(errors);
      }
    });

  if (errorsArray.length == 0) {
    return undefined;
  } else {
    return errorsArray;
  }
};
*/
export default reduxForm({
  form: "experience-details-form",
  //validate,
})(ExperienceDetails);
