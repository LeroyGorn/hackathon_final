import * as yup from "yup";

export const CreateProjectValidator = yup.object().shape({
  name: yup
    .string()
    .min(1, "Name must be at least 1 symbol")
    .required("Required"),
  description: yup
    .string()
    .min(1, "Description must be at least 1 symbol")
    .required("Required"),
  max_members: yup.number().min(0, "Members have to be more than zero"),
  is_open: yup.boolean(),
  project_stack: yup.array().of(yup.string()),
});
