import React from "react";
import { Typography } from "@material-ui/core";
import { Field, FormSection } from "redux-form";
import Input from "../../atoms/Input/Input";
import { FormSectionTitle } from "./RenderFields.styles";

const RenderFields = (props) => {
  const { fields } = props;

  const renderSingleField = (field, key) => {
    return (
      <Field
        name={field.NAME}
        component={Input}
        validate={field.VALIDATORS}
        key={key}
        label={field.LABEL}
      />
    );
  };

  return (
    fields &&
    fields.map((item, index) => {
      if (item.FIELD_SECTION) {
        const fields_list = item.FIELD_LIST;
        const sectionKey = item.FIELD_SECTION_NAME + "_section_" + index;
        return (
          <div key={sectionKey}>
            <FormSectionTitle>
              <Typography variant="h6">{item.FIELD_SECTION_TITLE}</Typography>
            </FormSectionTitle>
            <FormSection name={item.FIELD_SECTION_NAME}>
              {fields_list.map((fieldItem, fieldIndex) => {
                const key = item.FIELD_SECTION_NAME + "_" + fieldIndex;
                return renderSingleField(fieldItem, key);
              })}
            </FormSection>
          </div>
        );
      } else {
        const key = item.NAME + "_" + index;
        return renderSingleField(item, key);
      }
    })
  );
};

export default RenderFields;
