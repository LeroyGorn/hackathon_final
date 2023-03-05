import * as yup from "yup";

export const UpdateSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  first_name: yup
    .string()
    .required("Required")
    .min(1, "First Name must be at least 1 letter"),
  last_name: yup
    .string()
    .required("Required")
    .min(1, "Last Name must be at least 1 letter"),
  role: yup.string().required("Required"),
});
