const validators = {
  required: (message) => (value) =>
    value || typeof value === "number" ? undefined : message,
  maxLength: (max) => (value, formValues, instanceRef, fieldName) => {
    return value && value.length > max
      ? `Must be ${max} characters or less`
      : undefined;
  },
  number: () => (value) =>
    value && isNaN(Number(value)) ? "Must be a number" : undefined,
  alphabet: () => (value) =>
    value && /[^a-zA-Z ]/i.test(value)
      ? "Only alphabet characters are allowed"
      : undefined,
  alphabetNumeric: () => (value) =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
      ? "Only alphanumeric characters are allowed"
      : undefined,
  phoneNumber: () => (value) =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
      ? "Invalid phone number, must be 10 digits"
      : undefined,
  email: () => (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? "Invalid email address"
      : undefined,
};

export default validators;
