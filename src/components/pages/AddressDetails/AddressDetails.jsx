import React from "react";
import { Typography } from "@material-ui/core";
import { reduxForm } from "redux-form";
import Constants from "../../../utils/js/Constants";
import { addAddressDetails } from "../../../store/actions/index";
import { WrapperPaper } from "../../atoms/WrapperPaper/WrapperPaper";
import FormActions from "../../organisms/FormActions/FormActions";
import RenderFields from "../../organisms/RenderFields/RenderFields";

const AddressDetails = (props) => {
  const FIELDS = Constants.ADDRESS_DETAILS.FIELDS;

  const { handleSubmit, pristine, submitting } = props;
  const handleBack = () => {
    props.history.push(Constants.URL.ROUTES.HOME);
  };
  const onSubmit = (values, dispatch) => {
    dispatch(
      addAddressDetails(values.current_address, values.permanent_address)
    );
    props.history.push(Constants.URL.ROUTES.EXPERIENCE_DETAILS);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {Constants.ADDRESS_DETAILS.TITLE}
      </Typography>

      <RenderFields fields={FIELDS} />
      {/* {FIELDS &&
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
        })} */}

      <FormActions
        displayBack={true}
        displayNext={true}
        nextLabel={"Next"}
        handleSubmit={handleSubmit(onSubmit)}
        handleBack={handleBack}
        pristine={pristine}
        submitting={submitting}
      />
    </div>
  );
};
export default reduxForm({
  form: "address-details-form",
  //validate
})(AddressDetails);
