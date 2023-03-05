import * as yup from "yup";

const url =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const CreateCvSchema = yup.object().shape({
  //  photo: yup.
  tech_stack: yup.array().of(yup.string()).required("Required"),
  telegram: yup.string().matches(url, "Enter correct url!"),
  github: yup.string().matches(url, "Enter correct url!"),
  linked_in: yup.string().matches(url, "Enter correct url!"),
  years_experience: yup
    .number()
    .min(0, "This field can't be not a number or less than 0"),
  education: yup.string().required("Required"),
  work_experience: yup.string().required("Required"),
  is_public: yup.boolean(),
});
