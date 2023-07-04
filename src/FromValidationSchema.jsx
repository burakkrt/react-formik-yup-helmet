import * as Yup from "yup";

export const FormValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("*This field is required.")
    .min(3, "Must be at least 3 characters.")
    .max(15, "Must be a maximum of 15 characters."),
  password: Yup.string()
    .required("*This field is required.")
    .min(8, "Must be at least 8 characters.")
    .max(20, "Must be a maximum of 15 characters."),
});