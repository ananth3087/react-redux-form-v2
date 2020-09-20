import validators from "./validators";
const ADDRESS_FIELDS = [
  {
    NAME: "line1",
    LABEL: "Line1",
    VALIDATORS: [validators.required("Line is required")],
  },
  {
    NAME: "city",
    LABEL: "City",
    VALIDATORS: [validators.required("City is required")],
  },
  {
    NAME: "state",
    LABEL: "State",
    VALIDATORS: [validators.required("State is required")],
  },
  {
    NAME: "country",
    LABEL: "Country",
    VALIDATORS: [validators.required("Country is required")],
  },
  {
    NAME: "pincode",
    LABEL: "Pincode",
    VALIDATORS: [
      validators.required("Pincode is required"),
      validators.number(),
    ],
  },
];
const Constants = {
  URL: {
    ROUTES: {
      HOME: "/",
      ADDRESS_DETAILS: "/address-details",
      EXPERIENCE_DETAILS: "/experience-details",
    },
  },
  PERSONAL_DETAILS: {
    TITLE: "Personal Details",
    FIELDS: [
      {
        NAME: "firstName",
        LABEL: "First Name",
        VALIDATORS: [
          validators.required("First name is required"),
          validators.alphabet(),
          validators.maxLength(500),
        ],
      },
      {
        NAME: "secondName",
        LABEL: "Second Name",
        VALIDATORS: [
          validators.required("Second name is required"),
          validators.alphabet(),
          validators.maxLength(500),
        ],
      },
      {
        NAME: "contactNumber",
        LABEL: "Contact Number",
        VALIDATORS: [
          validators.required("Contact Number is required"),
          validators.number(),
          validators.phoneNumber(),
        ],
      },
      {
        NAME: "email",
        LABEL: "Email",
        VALIDATORS: [
          validators.required("Email is required"),
          validators.email(),
        ],
      },
    ],
  },

  ADDRESS_DETAILS: {
    TITLE: "Address Details",
    FIELDS: [
      {
        FIELD_SECTION: true,
        FIELD_SECTION_NAME: "current_address",
        FIELD_SECTION_TITLE: "Current Address",
        FIELD_LIST: ADDRESS_FIELDS,
      },
      {
        FIELD_SECTION: true,
        FIELD_SECTION_NAME: "permanent_address",
        FIELD_SECTION_TITLE: "Permanent Address",
        FIELD_LIST: ADDRESS_FIELDS,
      },
    ],
  },
  EXPERIENCE_DETAILS: {
    TITLE: "Experience Details",
    FIELDS: [
      {
        NAME: "companyName",
        LABEL: "Company Name",
        VALIDATORS: [
          validators.required("Company name is required"),
          validators.alphabet(),
        ],
      },
      {
        NAME: "fromDate",
        LABEL: "From Date",
        VALIDATORS: [validators.required("From Date is required")],
      },
      {
        NAME: "toDate",
        LABEL: "To Date",
        VALIDATORS: [validators.required("To Date is required")],
      },
      {
        NAME: "role",
        LABEL: "Role",
        VALIDATORS: [validators.required("Role is required")],
      },
    ],
  },
};
export default Constants;
